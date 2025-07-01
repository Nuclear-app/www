import * as React from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

export const PageTransition: React.FC<HTMLMotionProps<'div'>> = (props) => (
  <motion.div
    initial={{ y: -24, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    {...props}
  />
)
