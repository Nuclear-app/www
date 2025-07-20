import Testies from "./testies";

const Testimonial = () => {
    return (
        <div className="border-2 h-[900px] w-full grid grid-col-3 gap-4">
            <div className="text-sm text-gray-500 col-span-3 border-2">testimonial</div>
            <div className="col-span-1 ">
                <Testies />
            </div>
            <div className="col-span-1 ">
                <Testies />
            </div>
            <div className="col-span-1 ">
                <Testies />
            </div>
            <div className="col-span-1 ">
                <Testies />
            </div>
            <div className="col-span-1 ">
                <Testies />
            </div>
            <div className="col-span-1">
                <Testies />
            </div>

        </div>
    );
};

export default Testimonial;