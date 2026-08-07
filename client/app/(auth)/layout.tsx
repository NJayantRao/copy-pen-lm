import { ModeToggle } from "@/components/ui/mode-toggle";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-background p-6">
      <div className="absolute top-6 right-6">
        <ModeToggle />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 size-[28rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
      />
      <div className="relative">{children}</div>
    </div>
  );
}
