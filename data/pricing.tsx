import { HStack, Text } from '@chakra-ui/react'

export default {
  title: 'Simple, transparent pricing',
  description:
    'Start with a two-week free trial. No credit card required, no commitment. Then choose the plan that fits your learning journey.',
  plans: [
    {
      id: 'monthly',
      title: 'Monthly',
      description: 'Perfect for flexible learning schedules.',
      price: '$20/month',
      isRecommended: true,
      features: [
        {
          title: 'All Nuclear features',
        },
        {
          title: 'Unlimited crates and blocks',
        },
        {
          title: 'All three difficulty levels',
        },
        {
          title: 'Multimodal input support',
        },
        {
          title: 'AI-powered generation tools',
        },
        {
          title: 'Adaptive quizzes & flashcards',
        },
        {
          title: 'Priority support',
        },
        {
          title: 'Cancel anytime',
        },
      ],
      action: {
        href: '#',
      },
    },
    {
      id: 'semester',
      title: 'Semester',
      description: 'Great value for academic terms.',
      price: '$75/semester',
      features: [
        {
          title: 'Everything in Monthly',
        },
        {
          title: '4 months of access',
        },
        {
          title: 'Save $5 compared to monthly',
        },
        {
          title: 'Perfect for academic terms',
        },
        {
          title: 'Advanced analytics',
        },
        {
          title: 'Export capabilities',
        },
        {
          title: 'Team collaboration features',
        },
        {
          title: 'Priority onboarding',
        },
      ],
      action: {
        href: '#',
      },
    },
    {
      id: 'yearly',
      title: 'Yearly',
      description: 'Best value for long-term learners.',
      price: '$200/year',
      features: [
        {
          title: 'Everything in Semester',
        },
        {
          title: '12 months of access',
        },
        {
          title: 'Save $40 compared to monthly',
        },
        {
          title: 'Best value option',
        },
        {
          title: 'Exclusive beta features',
        },
        {
          title: 'Custom integrations',
        },
        {
          title: 'Dedicated support',
        },
        {
          title: 'Early access to new features',
        },
      ],
      action: {
        href: '#',
      },
    },
  ],
}
