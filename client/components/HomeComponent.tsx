"use client";

import Link from "next/link";
import {
  ArrowRightIcon,
  BookOpenCheckIcon,
  FolderInputIcon,
  LayersIcon,
  LibraryIcon,
  MessageSquareIcon,
  NetworkIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { BrandMark } from "@/shared/components/brand-mark";
import { authRoutes } from "@/features/auth/lib/auth-routes";

const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#faq", label: "FAQ" },
];

const FEATURES = [
  {
    icon: LibraryIcon,
    title: "Bring your whole library",
    description:
      "Drop in PDFs, ebooks, web pages, and transcripts. Chaibook reads and indexes everything you upload.",
  },
  {
    icon: MessageSquareIcon,
    title: "Ask, don't just search",
    description:
      "Hold a real conversation with your sources instead of scanning pages for the answer.",
  },
  {
    icon: BookOpenCheckIcon,
    title: "Answers with citations",
    description:
      "Every reply points back to the exact passage it came from, so you can trust what you read.",
  },
  {
    icon: SparklesIcon,
    title: "Learn faster",
    description:
      "Turn any source into flashcards, quizzes, mind maps, and summaries in a couple of clicks.",
  },
  {
    icon: LayersIcon,
    title: "Organized notebooks",
    description:
      "Group sources by project or topic, and keep every conversation scoped to the right material.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Grounded, not guessed",
    description:
      "Chaibook only answers from what you've actually given it — no hallucinated facts posing as your content.",
  },
];

const STEPS = [
  {
    value: "upload",
    label: "1. Upload",
    icon: FolderInputIcon,
    title: "Bring in your sources",
    description:
      "Add PDFs, web links, and notes to a notebook. Chaibook parses and indexes them in the background.",
    points: [
      "Supports PDFs, web pages, and plain text",
      "Sources stay organized per notebook",
      "Re-process or remove sources anytime",
    ],
  },
  {
    value: "ask",
    label: "2. Ask",
    icon: MessageSquareIcon,
    title: "Chat with your material",
    description:
      "Ask questions in plain language. Answers are grounded in your sources, with citations back to the original passage.",
    points: [
      "Follow-up questions keep context",
      "Every claim links to its source",
      "Switch models per notebook",
    ],
  },
  {
    value: "learn",
    label: "3. Learn",
    icon: NetworkIcon,
    title: "Turn it into study material",
    description:
      "Generate summaries, flashcards, quizzes, and mind maps from any notebook to review what matters.",
    points: [
      "Flashcards and quizzes for review",
      "Mind maps for how ideas connect",
      "Reports and takeaways to skim fast",
    ],
  },
];

const FAQS = [
  {
    question: "What can I upload to a notebook?",
    answer:
      "PDFs, web pages, and plain notes today, with more source types on the way. Everything you add is scoped to that notebook.",
  },
  {
    question: "Are answers actually grounded in my sources?",
    answer:
      "Yes. Chaibook answers from what you've uploaded and cites the passage each answer came from, so you can verify it instead of taking it on faith.",
  },
  {
    question: "Can I have more than one notebook?",
    answer:
      "Yes — create as many as you need and keep sources, chats, and generated study material scoped to each one.",
  },
  {
    question: "Is Chaibook free to use?",
    answer:
      "Yes, you can get started for free by signing in with Google — no separate account or setup required.",
  },
  {
    question: "How do I sign in?",
    answer:
      "Chaibook uses Google sign-in only, so there's no separate password to create or remember.",
  },
];

export function HomeContent() {
  return (
    <div className="relative flex min-h-svh flex-col overflow-x-hidden bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_70%_45%_at_50%_0%,black_25%,transparent_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[130px]"
      />

      {/* Nav */}
      <header className="sticky top-0 z-20 border-b bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10">
          <BrandMark />
          <nav className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <ModeToggle />
            <Button
              variant="ghost"
              nativeButton={false}
              render={<Link href={authRoutes.login} />}
            >
              Sign in
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="relative flex flex-1 flex-col">
        <section className="flex flex-col items-center px-6 pt-16 pb-20 text-center md:px-10 md:pt-20">
          <span className="mb-6 w-fit rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            Now in early access
          </span>

          <h1 className="max-w-3xl font-heading text-4xl leading-[1.08] font-semibold tracking-tight text-balance md:text-6xl">
            Chat with your books, not just about them.
          </h1>

          <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
            Upload your sources and Chaibook turns them into an assistant that
            actually knows what's inside — ready to explain, cite, and connect
            the dots.
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="px-6 font-medium"
              nativeButton={false}
              render={<Link href={authRoutes.login} />}
            >
              Get started
              <ArrowRightIcon className="size-4" />
            </Button>
            <p className="text-xs text-muted-foreground">
              Free to try &middot; sign in with Google
            </p>
          </div>
        </section>

        {/* Features */}
        <section
          id="features"
          className="relative mx-auto w-full max-w-6xl scroll-mt-20 px-6 pb-24 md:px-10"
        >
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-semibold tracking-tight md:text-3xl">
              Everything you need to actually understand your sources
            </h2>
            <p className="mt-3 text-sm text-muted-foreground md:text-base">
              Not another search box — a workspace built around reading, asking,
              and remembering.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ icon: Icon, title, description }) => (
              <Card
                key={title}
                className="border border-border/60 transition-colors hover:border-primary/30"
              >
                <CardContent className="flex flex-col gap-3">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10">
                    <Icon
                      className="size-4.5 text-primary"
                      strokeWidth={2.25}
                    />
                  </span>
                  <div className="flex flex-col gap-1">
                    <p className="font-heading text-sm font-semibold">
                      {title}
                    </p>
                    <p className="text-sm leading-snug text-muted-foreground">
                      {description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section
          id="how-it-works"
          className="relative mx-auto w-full max-w-4xl scroll-mt-20 px-6 pb-24 md:px-10"
        >
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-semibold tracking-tight md:text-3xl">
              How it works
            </h2>
            <p className="mt-3 text-sm text-muted-foreground md:text-base">
              Three steps from raw files to real understanding.
            </p>
          </div>

          <Tabs defaultValue="upload" className="items-center">
            <TabsList className="h-auto w-full max-w-md gap-1 bg-muted p-1 sm:w-auto">
              {STEPS.map((step) => (
                <TabsTrigger
                  key={step.value}
                  value={step.value}
                  className="h-9 flex-1 px-3"
                >
                  {step.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {STEPS.map((step) => (
              <TabsContent
                key={step.value}
                value={step.value}
                className="mt-6 w-full"
              >
                <Card className="border border-border/60">
                  <CardContent className="flex flex-col gap-5 sm:flex-row sm:items-start">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                      <step.icon
                        className="size-5 text-primary"
                        strokeWidth={2.25}
                      />
                    </span>
                    <div className="flex flex-col gap-3 text-left">
                      <div>
                        <p className="font-heading text-lg font-semibold">
                          {step.title}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                      <ul className="flex flex-col gap-1.5">
                        {step.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="mt-1.5 size-1 shrink-0 rounded-full bg-primary" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="relative mx-auto w-full max-w-2xl scroll-mt-20 px-6 pb-24 md:px-10"
        >
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-semibold tracking-tight md:text-3xl">
              Frequently asked questions
            </h2>
          </div>

          <Accordion>
            {FAQS.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Final CTA */}
        <section className="relative mx-auto w-full max-w-6xl px-6 pb-24 md:px-10">
          <div className="relative overflow-hidden rounded-[min(var(--radius-4xl),24px)] bg-foreground px-8 py-14 text-center text-background">
            <div
              aria-hidden
              className="pointer-events-none absolute -left-24 -top-24 size-72 rounded-full bg-primary/25 blur-[100px]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -right-24 size-72 rounded-full bg-primary/20 blur-[100px]"
            />
            <h2 className="relative font-heading text-2xl font-semibold tracking-tight md:text-3xl">
              Ready to start a conversation with your books?
            </h2>
            <p className="relative mx-auto mt-3 max-w-md text-sm text-background/60 md:text-base">
              Sign in with Google and create your first notebook in under a
              minute.
            </p>
            <Button
              size="lg"
              className="relative mt-7 px-6 font-medium"
              nativeButton={false}
              render={<Link href={authRoutes.login} />}
            >
              Get started
              <ArrowRightIcon className="size-4" />
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-border/60 px-6 py-10 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex max-w-xs flex-col gap-3">
            <BrandMark />
            <p className="text-sm text-muted-foreground">
              An AI reading companion that turns your sources into a
              conversation you can trust.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:items-end">
            <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground sm:justify-end">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <Link
                href={authRoutes.login}
                className="transition-colors hover:text-foreground"
              >
                Sign in
              </Link>
            </nav>
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Chaibook. Built for readers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
