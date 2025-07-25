import { HelpCircle } from 'lucide-react';

const Connect = () => {
  return (
    <div className="w-full grid grid-cols-3 gap-14 px-28">
      <div className="text-8xl font-black col-span-3 p-10">Connect with us</div>
      <div className="col-span-3 flex flex-row justify-between gap-10">
        <div className="w-1/5 p-10 rounded-3xl bg-[#9000FF6D] flex flex-col justify-between gap-10">
          <div className="text-2xl w-fit flex items-center gap-2 px-10 py-7 bg-[#110C0C0A] rounded-3xl">
            <HelpCircle size={24} />
            <div className="text-2xl font-medium">Manual</div>
          </div>
          <div className="text-2xl font-bold flex items-center gap-2 p-5">
            <div className="text-4xl font-bold">Learn Nuclear</div>
          </div>
        </div>
        <div className="w-2/5 p-10 rounded-3xl aspect-[2/1] bg-[#00D3BE6D] flex flex-col justify-between gap-10">
          <div className="text-2xl w-fit flex items-center gap-2 px-10 py-7 bg-[#110C0C0A] rounded-3xl">
            <HelpCircle size={24} />
            <div className="text-2xl font-medium">Devlog</div>
          </div>
          <div className="text-2xl font-bold flex items-center gap-2 p-5">
            <div className="text-4xl font-bold">Learn Nuclear</div>
          </div>
        </div>
        <div className="w-2/5 p-10 rounded-3xl aspect-[2/1] bg-[#E463006D] flex flex-col justify-between gap-10">
          <div className="text-2xl w-fit flex items-center gap-2 px-10 py-7 bg-[#110C0C0A] rounded-3xl">
            <HelpCircle size={24} />
            <div className="text-2xl font-medium">Manual</div>
          </div>
          <div className="text-2xl font-bold flex items-center gap-2 p-5">
            <div className="text-4xl font-bold">Learn Nuclear</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;