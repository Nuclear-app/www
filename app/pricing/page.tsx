import Feature from "@/components/feature";
import Faq from "@/components/faq";
import Hero from "@/components/hero";
import Testimonial from "@/components/testimonial";
import Unis from "@/components/unis";
import Connect from "@/components/connect";
import Opinions from "@/components/opinions";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Pricing from "@/components/pricing";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div id="hero">
        <Hero isPricingPage={true} />
      </div>
      <div id="universities">
        <Unis />
      </div>
      <div id="pricing">
        <Pricing />
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
