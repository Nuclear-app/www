import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Opinions = () => {
  return (
    <div className="py-26 w-full flex flex-col gap-6 items-center md:items-start justify-center px-4 sm:px-8 md:px-16 lg:px-90 xl:px-90">
        <div className="text-5xl font-bold text-center leading-tight">
          Have opinions? We're all ears.
        </div> 
        <Link href="/contact" className="bg-foreground text-background text-center px-6 font-bold py-4 rounded-2xl text-2xl flex items-center gap-2">
          Reach Out  
        </Link>
    </div>
  );
};

export default Opinions;