import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Opinions = () => {
  return (
    <div className="py-15 w-full flex flex-col gap-2 md:gap-6 items-start justify-center px-4 sm:px-8 md:px-15 lg:px-30 xl:px-90">
        <div className="text-xl md:text-4xl font-bold">
          Have opinions? We're all ears.
        </div> 
        <Link href="/contact" className="bg-foreground text-background text-center px-3 md:px-6 font-bold py-2 md:py-4 rounded-xl md:rounded-2xl text-sm md:text-xl flex items-center gap-2">
          Reach Out  
        </Link>
    </div>
  );
};

export default Opinions;