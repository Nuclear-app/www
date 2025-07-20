import Feature from "@/components/feature";
import Hero from "@/components/hero";
import Unis from "@/components/unis";

export default function Home() {
  return (
    <div className="font-sans items-center flex flex-col justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Hero />
      <Unis />
      <Feature />
    </div>
  );
}
