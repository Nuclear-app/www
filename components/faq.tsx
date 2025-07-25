import Collapsible from './ui/collapsible';

const Faq = () => {
  return (
    <div className="w-full px-28 py-20 flex flex-row">
      <div className="w=1/2 text-8xl text-wrap font-bold mb-12">Frequently Asked Questions</div>
      <div className="w-1/2 mx-auto space-y-4">
        <Collapsible title="What is Nuclear?">
          <p className="text-2xl leading-relaxed">
            Nuclear is an AI-powered learning platform that transforms your notes into interactive learning experiences. 
            It provides a distraction-free, clean notetaking experience with advanced AI tools to help students learn more effectively.
          </p>
        </Collapsible>
        
        <Collapsible title="Is Nuclear free to use?">
          <p className="text-2xl leading-relaxed">
            Yes! Nuclear offers a free tier that includes core features for students to get started. 
            We also offer premium plans with advanced AI features and unlimited storage for power users.
          </p>
        </Collapsible>
        
        <Collapsible title="How does the AI help with learning?">
          <p className="text-2xl leading-relaxed">
            Our AI analyzes your notes and creates interactive quizzes, flashcards, and study guides. 
            It identifies key concepts, generates practice questions, and adapts to your learning style to help you retain information better.
          </p>
        </Collapsible>
        
        <Collapsible title="Can I use Nuclear on multiple devices?">
          <p className="text-2xl leading-relaxed">
            Absolutely! Nuclear syncs across all your devices - desktop, tablet, and mobile. 
            Your notes and AI-generated content are always available wherever you are, ensuring seamless learning across all platforms.
          </p>
        </Collapsible>
        
        <Collapsible title="What subjects does Nuclear support?">
          <p className="text-2xl leading-relaxed">
            Nuclear works with any subject or topic. Whether you're studying math, science, history, literature, 
            or any other subject, our AI adapts to help you learn and retain information effectively.
          </p>
        </Collapsible>
      </div>
    </div>
  );
};

export default Faq;