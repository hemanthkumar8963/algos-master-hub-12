
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        linkedin: "bg-[hsl(var(--linkedin))] text-[hsl(var(--linkedin-foreground))] hover:bg-[hsl(var(--linkedin))]/90 hover:scale-110 hover:shadow-xl hover:shadow-[hsl(var(--linkedin))]/40 active:scale-95 transform transition-all duration-300 hover:rotate-1 hover:-translate-y-1 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
        github: "bg-[hsl(var(--github))] text-[hsl(var(--github-foreground))] hover:bg-[hsl(var(--github))]/90 hover:scale-110 hover:shadow-xl hover:shadow-[hsl(var(--github))]/40 active:scale-95 transform transition-all duration-300 hover:-rotate-1 hover:-translate-y-1 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
        email: "bg-[hsl(var(--email))] text-[hsl(var(--email-foreground))] hover:bg-[hsl(var(--email))]/90 hover:scale-110 hover:shadow-xl hover:shadow-[hsl(var(--email))]/40 active:scale-95 transform transition-all duration-300 hover:rotate-1 hover:-translate-y-1 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 hover:animate-pulse",
        resume: "bg-[hsl(var(--resume))] text-[hsl(var(--resume-foreground))] hover:bg-[hsl(var(--resume))]/90 hover:scale-110 hover:shadow-xl hover:shadow-[hsl(var(--resume))]/40 active:scale-95 transform transition-all duration-300 hover:-rotate-1 hover:-translate-y-1 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 hover:brightness-110",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
