import { ArrowRight } from "lucide-react";

const Opinions = () => {
  return (
    <div className="py-16 w-full flex flex-col gap-6 items-start justify-center px-4 sm:px-8 md:px-16 lg:px-28 xl:px-50">
        <div className="text-5xl font-bold text-center leading-tight">
          Have opinions? We're all ears.
        </div> 
        <button className="bg-black text-white px-6 py-4 rounded-2xl text-lg flex items-center gap-2">
          Reach Out <ArrowRight size={20} /> 
        </button>
    </div>
  );
};

export default Opinions;