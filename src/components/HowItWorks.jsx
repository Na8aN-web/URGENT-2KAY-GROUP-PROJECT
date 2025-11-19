import { ClipboardList, PiggyBank, Smile } from "lucide-react";
import Image2 from "../assets/images/image2.png";

const StepItem = ({ icon: Icon, title, description, colorClass }) => (
  <div className="flex items-start gap-4 mb-8">
    <div className={`p-3 rounded-full ${colorClass} text-white shrink-0`}>
      <Icon size={24} />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

const HowItWorks = () => {
  return (
    <section className="lg:w-[82%] mx-auto my-10 px-6 py-16 bg-white">
      <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-2">
        How Urgent2Kay Works
      </h2>

      <hr className="w-1/2 md:w-1/3 h-0.5 mx-auto mb-12 bg-[#66488A] border-0" />

      <div className="flex flex-col md:flex-row items-center md:gap-16">
        <div className="md:w-1/2">
          <StepItem
            icon={ClipboardList}
            title="Make a Request"
            description="Tell us what bill you need help with (school fees, rent, hospital bills, etc)."
            colorClass="bg-[#C4B8D2]"
          />
          <StepItem
            icon={PiggyBank}
            title="Sponsor Payments"
            description="Sponsors pay directly to the service provider — no middleman wahala."
            colorClass="bg-[#C4B8D2]"
          />
          <StepItem
            icon={Smile}
            title="Bill Settled?"
            description="You're stress-free. No begging. No embarrassment."
            colorClass="bg-[#C4B8D2]"
          />
        </div>

        {/* Image */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src={Image2}
            alt="How Urgent2Kay works illustration"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
