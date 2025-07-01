import { ChakraProps, chakra } from '@chakra-ui/react'
import { HTMLMotionProps, motion } from 'framer-motion'

export interface MotionBoxProps extends Omit<ChakraProps, 'color' | 'transition'>, HTMLMotionProps<'div'> {
  children?: React.ReactNode
}

export const MotionBox = chakra(motion.div)
