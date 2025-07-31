import { BookOpen, YoutubeIcon, Bell } from 'lucide-react';
import Link from 'next/link';

const Connect = () => {
  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-28 xl:px-50 py-16">
      <div className="text-5xl font-bold mb-12">Connect with us</div>
      
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <Link href="#" className="w-full md:w-1/4 p-6 rounded-4xl md:aspect-square aspect-video bg-[#9000FF6D] flex flex-col justify-between">
          <div className="text-sm w-fit flex items-center gap-2 px-4 py-3 bg-[#EEEEEE33] mb-10 md:mb-0 rounded-2xl">
            <BookOpen size={16} />
            <div className="text-xl font-medium">Manual</div>
          </div>
          <div className="text-3xl font-bold">Learn Nuclear</div>
        </Link>

        <Link href="https://www.youtube.com/watch?v=7RDcsrUcNWw" target="_blank" className="w-full md:w-1/3 p-6 rounded-4xl md:aspect-[3/1] aspect-video bg-[#00D3BE6D] flex flex-col justify-between">
          <div className="text-sm w-fit flex items-center gap-2 px-4 py-3 bg-[#EEEEEE33] mb-10 md:mb-0 rounded-2xl">
            <YoutubeIcon size={16} />
            <div className="text-xl font-medium">Youtube</div>
          </div>
          <div className="text-3xl font-bold">Check out our content</div>
        </Link>

        <Link href="https://dev.nuclearapp.ca" target="_blank" className="w-full md:w-2/5 p-6 rounded-4xl md:aspect-[4/1] aspect-video bg-[#E463006D] flex flex-col justify-between">
          <div className="text-sm w-fit flex items-center gap-2 px-4 py-3 bg-[#EEEEEE33] mb-10 md:mb-0 rounded-2xl">
            <Bell size={16} />
            <div className="text-xl font-medium">Devlog</div>
          </div>
          <div className="text-3xl font-bold">Latest updates</div>
        </Link>
      </div>
    </div>
  );
};

export default Connect;