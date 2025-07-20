import Feature from "@/components/feature";
import FeatureRec from "@/components/featureRec";
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
      <FeatureRec />
      <Feature title="Feature" tag="feature" description="description" image="image" />
      <Feature title="Feature" tag="feature" description="description" image="image" />
      <Testimonial />
      <Faq />
      <Connect />
      <Opinions />
    </div>
  );
}
