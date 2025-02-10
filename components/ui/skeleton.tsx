import { cn } from "@/lib/utils";

function Skeleton({
  // Skeleton component is used as placeholder when content is loading
  className,
  ...props // ...props pass along any additional props given to the component
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-primary/5", className)}
      {...props}
    />
  );
}

export { Skeleton };
