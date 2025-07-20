const Hero = () => {
  return(
    <div className="h-96 w-full md:w-1/2 self-start">
      <div className="flex flex-col gap-10 text-left">
        <div className="text-8xl text-left">Nuclear is AI for learning.</div>
        <div className="text-2xl text-left">Students can transform their notes into interactive learning experiences with a distraction free, and clean, notetaking experience and AI tools.</div>
        <div className="text-2xl flex flex-row gap-2 justify-start">
          <button className="bg-black text-white hover:bg-gray-800 font-bold px-4 py-6 rounded-xl">Try Nuclear Free</button>
          <button className="font-bold px-4 py-6 rounded-xl hover:bg-gray-200">Demo -&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;