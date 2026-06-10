import type { ComponentPropsWithoutRef } from 'react'

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  variant?: 'primary' | 'ghost'
}

const buttonVariants: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-primary-100 text-primary hover:border-primary-200 focus-visible:outline-primary font-mono text-base',
  ghost: 'bg-secondary-100 text-gray-900 hover:shadow-lg',
}

export function Button({
  children,
  className = '',
  type = 'button',
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        'inline-flex cursor-pointer items-center justify-center rounded-[5px] border-2 border-transparent px-2.5 py-[5px] transition-[border-color,box-shadow] duration-300 focus-visible:outline-2 focus-visible:outline-offset-2',
        buttonVariants[variant],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}
