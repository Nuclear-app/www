interface FeatureProps {
  title: string;
  tag: string;
  description: string;
  image: string;
}

const Feature = ({ title, tag, description, image }: FeatureProps) => {
  return <div className="border-2 h-[900px] w-full grid grid-rows-6 gap-4">
    <div className="flex flex-col gap-2 row-span-4">
      <div className="flex flex-row gap-2">
        <div className="text-sm text-gray-500">feature</div>
      </div>
    </div>
    <div className="flex flex-col gap-2 row-span-2 border-2">
      <div className="text-2xl font-bold"></div>
    </div>
  </div>;
};

export default Feature;