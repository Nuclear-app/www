import * as React from 'react'

const faq = {
  title: 'Frequently asked questions',
  // description: '',
  items: [
    {
      q: 'What makes Nuclear different from other note-taking apps?',
      a: (
        <>
          Nuclear goes beyond passive note-taking by actively teaching you. It enforces comprehension before revealing answers, creates adaptive quizzes that track your mistakes, and supports multimodal input including audio, handwriting, and PDFs. Unlike traditional apps that just let you copy-paste, Nuclear ensures you actually understand the material.
        </>
      ),
    },
    {
      q: 'How do the three learning modes work?',
      a: '"Just the Story!" provides instant resources like NotebookLM - upload your inputs and get all learning materials immediately. "Story and Sword!" includes fill-in-the-blank checkpoints before unlocking full resources, ensuring comprehension. "Death March" offers a distraction-free notetaking environment with LaTeX, markdown, and advanced features.',
    },
    {
      q: 'Can I use Nuclear for group study or teaching?',
      a: 'Yes! Nuclear is perfect for educators and group study. Teachers can create interactive learning materials with comprehension checkpoints, and students can collaborate on shared crates. The Institution plan includes team management and admin dashboards for educational organizations.',
    },
    {
      q: 'What types of files can I import into Nuclear?',
      a: 'Nuclear supports text files, PDFs, audio recordings (with transcription), handwritten notes (with OCR), and free-form thought-dumps. The Pro plan includes advanced features like audio transcription and handwriting recognition.',
    },
    {
      q: 'How does the adaptive quiz system work?',
      a: 'Nuclear creates Duolingo-style quizzes based on your content and tracks your mistakes across sessions. It uses this data to personalize future practice sessions, focusing on areas where you struggle and adapting difficulty based on your performance.',
    },
    {
      q: 'Is my data secure and private?',
      a: 'Absolutely. Nuclear uses enterprise-grade security with end-to-end encryption for your notes and learning data. We never share your personal information or content with third parties. Your learning journey stays private.',
    },
  ],
}

export default faq
