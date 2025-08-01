interface FeatureProps {
  title: string;
  tag_img: string;
  tag: string;
  description: string;
  image: string;
  gradientFrom?: string;
  gradientTo?: string;
}

const Feature = ({ title, tag_img, tag, description, image, gradientFrom = "#8B5CF6", gradientTo = "#3B82F6" }: FeatureProps) => {
  const gradientStyle = {
    background: `radial-gradient(circle, ${gradientFrom}, ${gradientTo})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };
  
  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-90 xl:px-90">
      <img src={image} alt="Block" className="w-full mx-auto h-auto" />
      <div className="flex flex-col mt-5">
        <div className="flex flex-row gap-2 items-center">
          <img src={tag_img} alt="Tag" className="w-7 h-7 sm:w-7 sm:h-7" />
          <div className="text-sm flex items-center justify-center font-bold" style={gradientStyle}>{tag}</div>
        </div>
        <div className="text-2xl sm:text-5xl font-bold">
          {title}
        </div>
        <div className="text-base sm:text-2xl">{description}</div>
      </div>
    </div>
  );
};

export default Feature;