import { Metadata } from 'next'
import { MarketingLayout } from '#components/layout'

export const metadata: Metadata = {
  title: 'Nuclear - AI-powered note-taking that teaches you',
  description: 'Transform your notes into interactive learning experiences with AI-powered generation tools, multimodal input support, and three learning modes.',
}

export default function Layout(props: { children: React.ReactNode }) {
  return <MarketingLayout>{props.children}</MarketingLayout>
}
