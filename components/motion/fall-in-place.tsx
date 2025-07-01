import React from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

interface FallInPlaceProps extends HTMLMotionProps<'div'> {
  delay?: number
}

export const FallInPlace: React.FC<FallInPlaceProps> = (props) => {
  const {
    children,
    delay = 0.2,
    initial,
    animate,
    ...rest
  } = props
  return (
    <motion.div
      initial={initial ?? { scale: 1, opacity: 0, translateY: '20px' }}
      animate={animate ?? { scale: 1, opacity: 1, translateY: 0 }}
      transition={{
        duration: 2,
        delay: delay,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
