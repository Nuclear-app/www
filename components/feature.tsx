interface FeatureProps {
  title: string;
  tag_img: string;
  tag: string;
  description: string;
  image: string;
}

const Feature = ({ title, tag_img, tag, description, image }: FeatureProps) => {
  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-28 xl:px-50">
      <img src={image} alt="Block" className="w-full h-auto" />
      <div className="flex flex-col gap-4 mt-8">
        <div className="flex flex-row gap-2 items-center">
          <img src={tag_img} alt="Tag" className="w-8 h-8 sm:w-10 sm:h-10" />
          <div className="text-sm">{tag}</div>
        </div>
        <div className="text-2xl sm:text-4xl font-bold">
          {title}
        </div>
        <div className="text-base sm:text-lg">{description}</div>
      </div>
    </div>
  );
};

export default Feature;