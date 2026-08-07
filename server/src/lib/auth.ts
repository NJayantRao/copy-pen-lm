import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./db.js";

const clientUrl = process.env.CLIENT_URL ?? "http://localhost:3000";

/**
 * Configured Better Auth instance shared by Express route handlers.
 *
 */
export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,
  secret: process.env.BETTER_AUTH_SECRET,
  trustedOrigins: [clientUrl],
  database: prismaAdapter(prisma, { provider: "postgresql" }),
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },
  advanced: {
    trustedProxyHeaders: true, // trust X-Forwarded-Proto/Host from your PaaS proxy
    defaultCookieAttributes: {
      sameSite: "none", // required: frontend/backend are cross-site
      secure: true, // required when sameSite is "none"
    },
  },
  onAPIError: {
    errorURL: `${clientUrl}/login`, // send auth errors to the frontend, not the backend
  },
});
