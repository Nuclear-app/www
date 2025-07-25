import Testies from "./testies";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      major: "Computer Science",
      university: "/unis/mcgill.svg",
      quote: "Nuclear transformed how I study. The AI-generated quizzes are incredibly accurate and help me retain information so much better."
    },
    {
      name: "Marcus Rodriguez",
      major: "Engineering",
      university: "/unis/mcgill.svg",
      quote: "The clean interface and AI tools make studying actually enjoyable. I've seen a significant improvement in my grades."
    },
    {
      name: "Emily Watson",
      major: "Biology",
      university: "/unis/mcgill.svg",
      quote: "As a pre-med student, I need to memorize a lot. Nuclear's AI helps me create perfect study materials in seconds."
    },
    {
      name: "David Kim",
      major: "Mathematics",
      university: "/unis/waterloo.svg",
      quote: "The distraction-free environment and smart AI features have made my study sessions so much more productive."
    },
    {
      name: "Aisha Patel",
      major: "Psychology",
      university: "/unis/uoft.svg",
      quote: "Nuclear's AI understands my learning style and adapts perfectly. It's like having a personal tutor available 24/7."
    },
    {
      name: "James Wilson",
      major: "Economics",
      university: "/unis/umich.svg",
      quote: "The interactive learning experiences are game-changing. I've never been able to study this efficiently before."
    }
  ];

  return (
    <div className="w-full px-50 py-20">
      <div className="text-8xl font-black  mb-16">What people are saying</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-[#DDDDDD] rounded-2xl p-8 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between min-h-[400px]">
            <div>
              <p className="text-gray-700 leading-relaxed text-4xl mb-10">
                "{testimonial.quote}"
              </p>
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-4xl font-semibold text-gray-900 mb-1">{testimonial.name}</h3>
                  <p className="text-gray-600 text-2xl">{testimonial.major}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-start">
                <img 
                  src={testimonial.university} 
                  alt="University" 
                  className="w-20 h-20 object-contain"
                />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;