import Feature from "@/components/feature";
import Faq from "@/components/faq";
import Hero from "@/components/hero";
import Testimonial from "@/components/testimonial";
import Unis from "@/components/unis";
import Connect from "@/components/connect";
import Opinions from "@/components/opinions";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="universities">
        <Unis />
      </div>
      <div id="features" className="flex flex-col gap-16">
        <Feature
          title="Multi-modal input"
          tag="Zero Distractions"
          tag_img="/zero-dist-tag.svg"
          description="Drag in any type of file, and we'll parse, convert it and generate notes that actually help you."
          image="/upload.png"
          gradientFrom="#78E0D5"
          gradientTo="#A996ED"
        />  

        <Feature
          title="Quizzes that know you"
          tag="Personalisation"
          tag_img="/personalisation-tag.svg"
          description="Nuclear constantly learns your mistakes, and makes sure you equally understand everything in your notes."
          image="/quizzes.png" 
          gradientFrom="#E9A878"
          gradientTo="#9CCEB6"
        />

        <Feature
          title="Flaschards to help you remember."
          tag="Study Better"
          tag_img="/study-better-tag.svg"
          description="Flashcards that know your misses and hits, so that you can focus just on the learning and understanding."
          image="/flashes.png"
          gradientFrom="#BF78F6"
          gradientTo="#DD999C"
        />
      </div>
      <div id="testimonials">
        <Testimonial />
      </div>
      <div id="faq">
        <Faq />
      </div>
      <div id="connect">
        <Connect />
      </div>
      <div id="opinions">
        <Opinions />
      </div>
      <Footer />
    </div>
  );
}
