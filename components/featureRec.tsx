
const FeatureRec = () => {
  return <div className="border-2 h-[900px] w-full grid grid-rows-6 gap-4">
    <div className="flex flex-col gap-2 row-span-3">
      <div className="flex flex-row gap-2">
      <img src="/block.png" alt="Block" className="" />
      </div>
    </div>
    <div className="grid grid-cols-3 gap-2 row-span-3 border-2">
      <div className="text-2xl font-bold col-span-3 border-2">
      </div>
      <div className="col-span-1 border-2">Feature</div>
      <div className="col-span-1 border-2">Feature</div>
      <div className="col-span-1 border-2">Feature</div>
    </div>
  </div>;
};

export default FeatureRec;