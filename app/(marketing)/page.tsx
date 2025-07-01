'use client'

import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
  SimpleGrid,
  Link,
} from '@chakra-ui/react'
import { Br } from '@saas-ui/react'
import type { NextPage } from 'next'
import Image from 'next/image'
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
  FiBook,
  FiMic,
  FiFileText,
  FiEdit,
  FiCpu,
  FiTarget,
  FiZap,
  FiLayers,
  FiMonitor,
  FiSmartphone,
  FiHeadphones,
  FiType,
  FiImage,
  FiTable,
} from 'react-icons/fi'

import * as React from 'react'

import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from '#components/highlights'
import { ChakraLogo, NextjsLogo } from '#components/logos'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Pricing } from '#components/pricing/pricing'
import { Em } from '#components/typography'
import faq from '#data/faq'
import pricing from '#data/pricing'

const Home: NextPage = () => {
  return (
    <Box>
      <HeroSection />

      <HighlightsSection />

      <FeaturesSection />

     

      <PricingSection />

      <FaqSection />
    </Box>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Ditch archaic ways 
                <Br /> of notetaking
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Nuclear transforms your notes into interactive learning experiences. 
                Not just copy-paste, enforce comprehension before revealing answers.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="primary" size="lg" href="/signup">
                  Join the waitlist!
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="#features"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: 'common',
                        transitionDuration: 'normal',
                        '.chakra-button:hover &': {
                          transform: 'translate(5px)',
                        },
                      }}
                    />
                  }
                >
                  Explore features
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: 'none', lg: 'block' }}
            left={{ lg: '60%', xl: '55%' }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/list.png"
                  width={1200}
                  height={762}
                  alt="Nuclear AI-powered note-taking interface"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: 'Smart Generation',
            icon: FiCpu,
            description: 'AI instantly creates summaries, flashcards, FAQs, and adaptive quizzes from your inputs.',
            iconPosition: 'left',
            delay: 0.6,
          },
          {
            title: 'Multimodal Input',
            icon: FiMic,
            description: 'Import text, audio, PDF, handwriting, and free-form thought-dumps for processing.',
            iconPosition: 'left',
            delay: 0.8,
          },
          {
            title: 'Three Learning Modes',
            icon: FiTarget,
            description: '"Just the Story!" for instant resources, "Story and Sword!" with comprehension checkpoints, "Death March" for distraction-free notetaking with LaTeX and markdown. Choose your own learning adventure.',
            iconPosition: 'left',
            delay: 1,
          },
          {
            title: 'Active Learning',
            icon: FiZap,
            description: 'Enforces comprehension before revealing answers - no more passive copy-paste.',
            iconPosition: 'left',
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  )
}

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard('npm install nuclear-ai')

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Interactive Learning & Generation">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            From your inputs - notes, PDFs, audio, handwritten content, and thought-dumps - Nuclear instantly produces interactive learning materials that adapt to your needs.
          </Text>
          
          <VStack alignItems="flex-start" spacing="4">
            <Box>
              <Text fontWeight="bold" color="blue.400">Smart Summaries</Text>
              <Text color="muted" fontSize="sm">
                AI condenses your content into clear, structured summaries that highlight key concepts and relationships.
              </Text>
            </Box>
            <Box>
              <Text fontWeight="bold" color="purple.400">Interactive Flashcards</Text>
              <Text color="muted" fontSize="sm">
                Generate study cards with questions on one side and detailed explanations on the other, perfect for spaced repetition.
              </Text>
            </Box>
            <Box>
              <Text fontWeight="bold" color="green.400">Dynamic FAQs</Text>
              <Text color="muted" fontSize="sm">
                Any question you ask becomes a standalone FAQ entry for easy reference during review sessions.
              </Text>
            </Box>
            <Box>
              <Text fontWeight="bold" color="orange.400">Real-world Examples</Text>
              <Text color="muted" fontSize="sm">
                Connect abstract concepts to practical applications, like showing math formulas in real-world contexts.
              </Text>
            </Box>
            <Box>
              <Text fontWeight="bold" color="red.400">Adaptive Quizzes</Text>
              <Text color="muted" fontSize="sm">
                Duolingo-style quizzes that track your mistakes and personalise future practice sessions based on your learning patterns.
              </Text>
            </Box>
          </VStack>

        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Three Learning Modes">
        <Text color="muted" fontSize="lg">
          Nuclear adapts to your learning style with three distinct difficulty levels. Like a game, you choose your own path: <Em>"Just the Story!"</Em> for instant learning, <Em>"Story and Sword!"</Em> for guided comprehension, or <Em>"Death March"</Em> for deep focus.
        </Text>
        <VStack alignItems="flex-start" spacing="4" mt="6">
          <Box>
            <Text fontWeight="bold" color="green.400">"Just the Story!" (Easy)</Text>
            <Text color="muted" fontSize="sm">
              Instant resources generated like NotebookLM - upload your inputs and get all learning materials right away. Perfect for quick reviews and casual learning.
            </Text>
          </Box>
          <Box>
            <Text fontWeight="bold" color="orange.400">"Story and Sword!" (Medium)</Text>
            <Text color="muted" fontSize="sm">
              Includes fill-in-the-blank checkpoints before unlocking full resources - ensuring comprehension before revealing content. Ideal for structured learning.
            </Text>
          </Box>
          <Box>
            <Text fontWeight="bold" color="red.400">"Death March" (Hard)</Text>
            <Text color="muted" fontSize="sm">
              A rich, distraction-free notetaking environment supporting LaTeX, markdown, tables, images, and quality-of-life enhancements. A free mode with sleek UI.
            </Text>
          </Box>
        </VStack>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Sarah Chen"
        description="Medical Student"
        avatar="/static/images/avatar.jpg"
        gradient={['purple.700', 'purple.900']}
      >
        <Text color="gray.200" _dark={{ color: 'gray.700' }}>
          "Nuclear transformed how I study. The adaptive quizzes actually help me understand concepts instead of just memorizing. The three learning modes let me choose the right intensity for each topic."
        </Text>
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Built for modern learners"
      >
        <Text color="muted" fontSize="lg">
          Nuclear supports all styles of note-taking and learning, from visual learners to audio processors, with seamless mode transitions and real-time block rendering.
        </Text>
        <Wrap mt="8">
          {[
            'text input',
            'audio transcription',
            'pdf import',
            'handwriting ocr',
            'thought-dumps',
            'latex support',
            'markdown',
            'tables',
            'images',
            'adaptive quizzes',
            'flashcards',
            'faq generation',
            'real-world examples',
            'mistake tracking',
            'personalised practice',
            'comprehension checkpoints',
            'distraction-free mode',
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  )
}

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="left"
          as="p"
        >
          Not your standard
          <Br /> note-taking app.
        </Heading>
      }
      description={
        <>
          Nuclear goes beyond passive note-taking with AI-powered learning tools.
          <Br />
          Transform your inputs into interactive learning experiences that actually teach you.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: 'Smart Resource Generation',
          icon: FiCpu,
          description: 'Instantly create summaries, flashcards, FAQs, real-world examples, and adaptive quizzes from any input - notes, PDFs, audio, or handwritten content.',
          variant: 'inline',
        },
        {
          title: 'Multimodal Input Support',
          icon: FiMic,
          description: 'Import and convert text, audio, PDF, handwriting, and free-form thought-dumps. Thought-dumps offer informal, raw capture for immediate processing.',
          variant: 'inline',
        },
        {
          title: 'Three Learning Modes',
          icon: FiTarget,
          description: '"Just the Story!" for instant resources, "Story and Sword!" with comprehension checkpoints, "Death March" for distraction-free notetaking with LaTeX and markdown. Choose your own learning adventure.',
          variant: 'inline',
        },
        {
          title: 'Crates & Blocks Model',
          icon: FiBox,
          description: 'Organize content with "Crates" (notebooks/folders) and "Blocks" (individual content items) for seamless workflow and easy navigation.',
          variant: 'inline',
        },
        {
          title: 'Adaptive Quizzes',
          icon: FiSearch,
          description: 'Duolingo-style quizzes that track mistakes and personalise future practice sessions based on your learning patterns.',
          variant: 'inline',
        },
        {
          title: 'Real-time Rendering',
          icon: FiMonitor,
          description: 'Backend supports real-time block rendering and fluid mode transitions with NovelEditor for a streamlined editing experience.',
          variant: 'inline',
        },
        {
          title: 'LaTeX & Markdown',
          icon: FiType,
          description: 'Full support for LaTeX equations, markdown formatting, tables, and images in distraction-free "Death March" mode.',
          variant: 'inline',
        },
        {
          title: 'Comprehension Checkpoints',
          icon: FiLock,
          description: '"Story and Sword!" mode includes fill-in-the-blank checkpoints before unlocking full resources - ensuring understanding before revealing content.',
          variant: 'inline',
        },
        {
          title: 'Mistake Tracking',
          icon: FiTrendingUp,
          description: 'AI tracks your mistakes across quizzes and practice sessions to create personalised learning paths and targeted review materials.',
          variant: 'inline',
        },
      ]}
    />
  )
}

// const UniversitiesSection: React.FC = () => {
//   const universities = [
//     { name: 'McGill University', logo: '/static/images/universities/mit.png' },
//     { name: 'University of Michigan', logo: '/static/images/universities/stanford.png' },
//     { name: 'University of Toronto', logo: '/static/images/universities/harvard.png' },
//     { name: 'National University of Singapore', logo: '/static/images/universities/oxford.png' },
//     { name: 'Nanyang Technological University', logo: '/static/images/universities/cambridge.png' },
//     { name: 'University of Edinburgh', logo: '/static/images/universities/berkeley.png' },
//     { name: 'University of Massachusetts', logo: '/static/images/universities/yale.png' },
//     { name: 'University of Waterloo', logo: '/static/images/universities/princeton.png' },
//     { name: 'Indiana University', logo: '/static/images/universities/princeton.png' },
//   ]

//   return (
//     <Box py="20" bg="gray.50" _dark={{ bg: 'gray.900' }}>
//       <Container maxW="container.xl">
//         <VStack spacing="12">
//           <VStack spacing="4" textAlign="center">
//             <Heading fontSize={['2xl', null, '4xl']} color="gray.700" _dark={{ color: 'gray.200' }}>
//               Trusted by students from
//             </Heading>
//             <Text fontSize="lg" color="gray.600" _dark={{ color: 'gray.400' }}>
//               Leading universities worldwide choose Nuclear for their learning needs
//             </Text>
//           </VStack>
          
//           <SimpleGrid 
//             columns={[2, 3, 4]} 
//             spacing={8} 
//             w="full"
//             alignItems="center"
//             justifyItems="center"
//           >
//             {universities.map((university, index) => (
//               <Box
//                 key={university.name}
//                 p="6"
//                 bg="white"
//                 _dark={{ bg: 'gray.800' }}
//                 borderRadius="lg"
//                 boxShadow="sm"
//                 _hover={{ 
//                   transform: 'translateY(-2px)',
//                   boxShadow: 'md'
//                 }}
//                 transition="all 0.2s"
//               >
//                 <VStack spacing="2">
//                   <Box
//                     w="60px"
//                     h="60px"
//                     bg="gray.100"
//                     _dark={{ bg: 'gray.700' }}
//                     borderRadius="full"
//                     display="flex"
//                     alignItems="center"
//                     justifyContent="center"
//                     fontSize="lg"
//                     fontWeight="bold"
//                     color="gray.600"
//                     _dark={{ color: 'gray.300' }}
//                   >
//                     {university.name.split(' ').map(word => word[0]).join('')}
//                   </Box>
//                   <Text
//                     fontSize="sm"
//                     fontWeight="medium"
//                     color="gray.700"
//                     _dark={{ color: 'gray.200' }}
//                     textAlign="center"
//                   >
//                     {university.name}
//                   </Text>
//                 </VStack>
//               </Box>
//             ))}
//           </SimpleGrid>
//         </VStack>
//       </Container>
//     </Box>
//   )
// }

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        Don't let a price tag stop you from learning. <Link 
        href="/contact" 
        color="primary.500"
        textDecoration="underline"
        _hover={{ color: 'primary.600' }}
        display="block"
        fontWeight="bold"
      > Tell us about your story and we'll get back to you! </Link>
      </Text>
      
    </Pricing>
  )
}

const FaqSection = () => {
  return <Faq {...faq} />
}

export default Home
