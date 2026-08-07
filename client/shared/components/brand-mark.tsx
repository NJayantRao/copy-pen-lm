import { BookOpenText } from "lucide-react";
import { cn } from "@/lib/utils";

export function BrandMark({
  className,
  iconClassName,
  textClassName,
}: {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <span
        className={cn(
          "flex size-8 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground",
          iconClassName,
        )}
      >
        <BookOpenText className="size-4" strokeWidth={2.25} />
      </span>
      <span
        className={cn(
          "font-heading text-lg font-semibold tracking-tight text-foreground",
          textClassName,
        )}
      >
        Copy Pen LM
      </span>
    </div>
  );
}
