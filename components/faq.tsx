import Collapsible from './ui/collapsible';

const Faq = () => {
  const faqItems = [
    {
      title: "What makes Nuclear different from other note-taking apps?",
      content: "Nuclear goes beyond passive note-taking by actively teaching you. It enforces comprehension before revealing answers, creates adaptive quizzes that track your mistakes, and supports multimodal input including audio, handwriting, and PDFs. Unlike traditional apps that just let you copy-paste, Nuclear ensures you actually understand the material."
    },
    {
      title: "How do the three learning modes work?",
      content: "'Just the Story!' provides instant resources like NotebookLM - upload your inputs and get all learning materials immediately. 'Story and Sword!' includes fill-in-the-blank checkpoints before unlocking full resources, ensuring comprehension. 'Death March' offers a distraction-free notetaking environment with LaTeX, markdown, and advanced features."
    },
    {
      title: "What types of files can I import into Nuclear?",
      content: "Nuclear supports text files, PDFs, audio recordings (with transcription), handwritten notes (with OCR), and free-form thought-dumps. The Pro plan includes advanced features like audio transcription and handwriting recognition."
    },
    {
      title: "How does the adaptive quiz system work?",
      content: "Nuclear creates quizzes based on your content and tracks your mistakes across sessions. It uses this data to personalize future practice sessions, focusing on areas where you struggle and adapting difficulty based on your performance."
    },
    {
      title: "Is my data secure and private?",
      content: "Absolutely. Nuclear uses enterprise-grade security with end-to-end encryption for your notes and learning data. We never share your personal information or content with third parties. Your learning journey stays private."
    }
  ];

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-90 xl:px-90 py-16 flex md:flex-row flex-col gap-16">
      <div className="w-full md:w-1/2 text-5xl font-bold pt-8">Frequently Asked Questions</div>
      <div className="w-full md:w-1/2">
        {faqItems.map((item, index) => (
          <Collapsible key={index} title={item.title}>
            <p className="text-base">
              {item.content}
            </p>
          </Collapsible>
        ))}
      </div>
    </div>
  );
};

export default Faq;