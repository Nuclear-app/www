import React from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

export interface FloatProps extends HTMLMotionProps<'div'> {
  delay?: number
  steps?: number[]
}

export const Float: React.FC<FloatProps> = (props) => {
  const { children, delay = 0.2, steps = [10, -10, 10], ...rest } = props
  return (
    <motion.div
      animate={{ translateY: steps }}
      transition={{
        delay,
        duration: 5,
        ease: 'easeInOut',
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 0,
        repeatType: 'reverse',
      }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
