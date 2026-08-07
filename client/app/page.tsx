import { redirect } from "next/navigation";
import { authRoutes, getSession } from "@/features/auth";
import { HomeContent } from "@/components/HomeComponent";

export default async function HomePage() {
  const session = await getSession();

  if (session) {
    redirect(authRoutes.dashboard);
  }

  return <HomeContent />;
}
