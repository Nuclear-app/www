import Feature from "@/components/feature";
import Faq from "@/components/faq";
import Hero from "@/components/hero";
import Testimonial from "@/components/testimonial";
import Unis from "@/components/unis";
import Connect from "@/components/connect";
import Opinions from "@/components/opinions";

export default function Home() {
  return (
    <div className="font-sans items-center flex flex-col justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Hero />
      <Unis />
      <Feature
        title="Multi-modal input"
        tag="Zero Distractions"
        tag_img="/zero-dist-tag.svg"
        description="Drag in any type of file, and we’ll transcribe, OCR, convert it and generate notes that actually help you."
        image="/block.svg" />

      <Feature
        title="Quizzes that know you"
        tag="Personalisation"
        tag_img="/personalisation-tag.svg"
        description="Nuclear constantly learns your mistakes, and makes sure you equally understand everything in your notes."
        image="/quiz.svg" />

      <Feature
        title="Flaschards to help you remember."
        tag="Study Better"
        tag_img="/study-better-tag.svg"
        description="Flashcards that know your misses and hits, so that you can focus just on the learning and understanding."
        image="/flashcards.svg" />
      <Testimonial />
      <Faq />
      <Connect />
      <Opinions />
    </div>
  );
}
