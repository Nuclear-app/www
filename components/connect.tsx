import { BookOpen, YoutubeIcon, Bell } from 'lucide-react';

const Connect = () => {
  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-28 xl:px-50 py-16">
      <div className="text-5xl font-bold mb-12">Connect with us</div>
      
      <div className="flex flex-row justify-between gap-6">
        <div className="w-1/4 p-6 rounded-2xl aspect-square bg-[#9000FF6D] flex flex-col justify-between">
          <div className="text-sm w-fit flex items-center gap-2 px-4 py-3 bg-[#110C0C0A] rounded-xl">
            <BookOpen size={16} />
            <div className="text-sm font-medium">Manual</div>
          </div>
          <div className="text-lg font-bold">Learn Nuclear</div>
        </div>

        <div className="w-1/3 p-6 rounded-2xl aspect-[3/1] bg-[#00D3BE6D] flex flex-col justify-between">
          <div className="text-sm w-fit flex items-center gap-2 px-4 py-3 bg-[#110C0C0A] rounded-xl">
            <YoutubeIcon size={16} />
            <div className="text-sm font-medium">Youtube</div>
          </div>
          <div className="text-lg font-bold">Check out our content</div>
        </div>

        <div className="w-2/5 p-6 rounded-2xl aspect-[4/1] bg-[#E463006D] flex flex-col justify-between">
          <div className="text-sm w-fit flex items-center gap-2 px-4 py-3 bg-[#110C0C0A] rounded-xl">
            <Bell size={16} />
            <div className="text-sm font-medium">Devlog</div>
          </div>
          <div className="text-lg font-bold">Latest updates</div>
        </div>
      </div>
    </div>
  );
};

export default Connect;