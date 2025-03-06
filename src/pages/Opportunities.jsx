import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, RefreshCw, Star } from "lucide-react";

const OpportunityCard = ({ icon, title, description }) => {
  return (
    <Card className="bg-[#24282D] border-none shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-4 flex flex-col">
        <div className="flex items-start justify-between mb-2">
          <div className="bg-[#5D5DFF] rounded-lg p-2">
            <span className="text-white text-2xl">{icon}</span>
          </div>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </CardContent>
    </Card>
  );
};

const opportunities = [
  {
    icon: <DollarSign />,
    title: "Easy upsell",
    description:
      "Your clients know getting testimonials is crucial for their business. It's your job to help them get more!",
  },
  {
    icon: <RefreshCw />,
    title: "Recurring revenue",
    description:
      "Testimonials need to be maintained, hosted and updated, adding clear value to your service fee.",
  },
  {
    icon: <Star />,
    title: "Competitive edge",
    description:
      "Few agencies offer unique features like Testimonial. We help you stand out.",
  },
];

const Opportunities = () => {
  return (
    <div className="bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-bold mb-4 text-center text-[#5D5DFF]">
          OPPORTUNITIES FOR YOU
        </h2>
        <h1 className="text-6xl font-bold mb-6 text-center">
          Offer a unique, dynamic service
        </h1>
        <p className="text-center text-gray-400 mb-8">
          Your clients need testimonials to drive more conversions for their
          business.
          <br /> They understand the value of social proof. Helping them
          collect, manage, and embed <br /> testimonials is a no-brainer service
          they are eager to have!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          {opportunities.map((opportunity, index) => (
            <OpportunityCard
              key={index}
              icon={opportunity.icon}
              title={opportunity.title}
              description={opportunity.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
