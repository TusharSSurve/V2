import { ChildrenProps } from "@/lib/types";
import { cn } from "@/lib/utils";

export default function P({ children, className }: ChildrenProps) {
  return (
    <p className={cn("leading-6 text-greycolor dark:text-darkwhitecolor", className)}>{children}</p>
  )
}
