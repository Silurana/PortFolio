import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactElement,
  ReactNode,
} from "react"
import { cn } from "../lib/utils"

type BaseProps = {
  children: ReactNode
  className?: string
  variant?: "primary" | "secondary"
}

type AnchorProps = BaseProps & {
  href: string
  target?: string
  rel?: string
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children" | "href">

type NativeButtonProps = BaseProps & {
  href?: undefined
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"]
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">

export function Button(props: AnchorProps): ReactElement
export function Button(props: NativeButtonProps): ReactElement
export function Button(props: AnchorProps | NativeButtonProps) {
  const { className, variant = "primary" } = props

  const styles =
    variant === "primary"
      ? "group relative inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-gradient-to-r from-cyan-400/20 via-sky-500/20 to-blue-500/20 px-5 py-2.5 text-sm font-semibold text-white shadow-glow backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
      : "group relative inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-portfolioCard/40 px-5 py-2.5 text-sm font-semibold text-white/90 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-portfolioCard/60"

  // `href` exists only for anchor variants
  if ("href" in props && typeof props.href === "string") {
    const anchorProps = props as AnchorProps
    const { href, target, rel, ...rest } = anchorProps
    return (
      <a
        href={href}
        target={target}
        rel={rel ?? "noreferrer"}
        className={cn(styles, "hover:shadow-glow hover:scale-[1.02] ", className)}
        {...rest}
      >
        {anchorProps.children}
        <span aria-hidden className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </a>
    )
  }

  const buttonProps = props as NativeButtonProps
  const { onClick, type, ...rest } = buttonProps
  return (
    <button
      type={type ?? "button"}
      onClick={onClick}
      className={cn(styles, "hover:shadow-glow hover:scale-[1.02] ", className)}
      {...rest}
    >
      {buttonProps.children}
    </button>
  )
}

