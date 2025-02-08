import { cn } from "@/lib/utils";

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export default function Header({ children, className, ...props }: HeaderProps) {
  const classes =
    "fixed flex inset-x-6 top-6 rounded-[30px] lg:rounded-[45px] bg-revolver-900/80 p-4 backdrop-blur-xl";
  return (
    <header className={cn(classes, className)} {...props}>
      {children}
    </header>
  );
}
