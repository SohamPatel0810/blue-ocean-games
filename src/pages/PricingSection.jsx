import { useNavigate } from "react-router-dom";
import { CircleCheck } from "lucide-react";

const PricingSection = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 text-center">
          Ready to upsell Testimonial service to gain more recurring revenue?
        </h1>
        <p className="text-center text-gray-400 mb-8">
          Your clients need testimonials to sell more. Let's make it happen!
        </p>
        <div className="flex gap-10 justify-center">
          <div className="flex items-center gap-2">
            <CircleCheck />
            <p> 7 days free trial</p>
          </div>
          <div className="flex items-center gap-2">
            <CircleCheck />
            <p> Cancel anytime</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 justify-center mt-8">
          <button
            onClick={() => navigate("/signup")}
            className="bg-blue-600 w-[150px] hover:bg-blue-700 text-white px-6 py-2 rounded-lg cursor-pointer p-2"
          >
            Try Now
          </button>
          <a
            onClick={() => navigate("/pricing")}
            className="text-white underline cursor-pointer hover:text-blue-50"
          >
            See our pricing →
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
