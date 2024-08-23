import { ChildrenProps } from "@/lib/types";

export default function H2({ children }: ChildrenProps) {
  return (
    <h2 className="font-semibold text-warmblack dark:text-whitecolor text-lg">{children}</h2>
  )
}
