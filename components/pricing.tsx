import { Check, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const Pricing = () => {
    const plans = [
        {
            type: "Month",
            price: "$14",
            currency: "USD",
            duration: "per month",
            features: [
                "Unlimited Blocks and Crates",
                "All three difficulty levels",
                "Lowest Commitment"
            ]
        },
        {
            type: "Semester 🔥🔥",
            price: "$49",
            currency: "USD",
            duration: "per semester (4 months)",
            features: [
                "All Monthly features",
                "Study all semester long",
                "That's just two meals"
            ]
        },
        {
            type: "Year",
            price: "$89",
            currency: "USD",
            duration: "per year",
            features: [
                "All features",
                "All year long access",
                "Save $80 with yearly"
            ]
        },
    ];
    return (
        <div className="flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-28 xl:px-50 mt-20">
            <div className="text-3xl text-center">
                Start using our app, with a two week free trial.
                <div className="text-4xl font-extrabold mb-12 text-center">No payment until then. Zero commitment. Zero risk.</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
                {plans.map((plan, index) => (
                    <div key={index} className="bg-[#221D1D] rounded-4xl p-10 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between gap-4">
                        <div className="text-2xl font-bold">{plan.type}</div>
                        
                        <div className="flex flex-col ">
                            <div className="flex flex-row items-center">
                                <div className="text-4xl font-extrabold">{plan.price}</div>
                                <div className="text-2xl mt-2">{plan.currency}</div>
                            </div>
                            <div className="text-md text-[#888585] font-bold">{plan.duration}</div>
                        </div>
                        
                        
                        <div className="flex flex-col gap-2">
                            {plan.features.map((feature, index) => (
                                <div key={index} className="text-base flex items-center gap-2">
                                    <Check size={16} /> {feature}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-xl m-12 text-center">Don't let a price tag stop you from learning!
                <br/>
                <Link href="/yourstory" className="font-bold mb-12 text-[#9000FF] underline underline-offset-4 hover:text-[#B366FF] transition-colors">Reach out, tell us your story, and we'll get back to you</Link>
            </div>   


        </div>
    );
};

export default Pricing;