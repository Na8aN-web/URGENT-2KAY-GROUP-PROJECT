import { Heart, Lock, Zap, Globe } from "lucide-react";
import Image3 from "../assets/images/image3.png";

const BenefitItem = ({ icon: Icon, title, description }) => (
  <div className="flex items-start gap-4 mb-8">
    <div className="p-3 rounded-full bg-[#C4B8D2] text-white shrink-0">
      <Icon size={24} />
    </div>

    <div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

const WhyChoose = () => {
  return (
    <section className="lg:w-[82%] mx-auto my-10 px-6 py-16 bg-white">
      <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
        Why Choose Urgent2Kay
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 order-2 md:order-1 flex justify-center">
          <img
            src={Image3}
            alt="Urgent2Kay benefits"
            className="w-full max-w-[450px] object-contain"
          />
        </div>

        <div className="md:w-1/2 order-1 md:order-2">
          <BenefitItem
            icon={Heart}
            title="No More Awkwardness"
            description="Get help without shame or uncomfortable conversations."
          />

          <BenefitItem
            icon={Lock}
            title="Secure Transactions"
            description="Money goes straight to the service provider—not through anyone else."
          />

          <BenefitItem
            icon={Zap}
            title="Fast & Easy"
            description="Request, sponsor, and settle bills in minutes."
          />

          <BenefitItem
            icon={Globe}
            title="For Every Nigerian"
            description="School fees, rent, hospital bills—whatever the need, we’ve got you."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
