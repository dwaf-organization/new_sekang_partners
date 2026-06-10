import { motion, useReducedMotion, type HTMLMotionProps } from 'motion/react'

type ScrollRevealProps = HTMLMotionProps<'div'> & {
  delay?: number
  y?: number
}

export function ScrollReveal({
  children,
  delay = 0,
  y = 44,
  transition,
  viewport,
  ...props
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y }}
      transition={{
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
        delay,
        ...transition,
      }}
      viewport={{ once: true, amount: 0.22, ...viewport }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
