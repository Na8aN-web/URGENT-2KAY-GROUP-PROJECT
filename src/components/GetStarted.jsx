import Image4 from "../assets/images/image4.png";
import { useNavigate } from "react-router";

const GetStarted = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/sign-up");
  };
  return (
    <section className="lg:w-[82%] mx-auto px-6 py-20 bg-[#ECE8F0]">
      <div className="flex flex-col md:flex-row md:gap-10 md:items-stretch">
        {/* Text Content */}
        <div className="md:w-1/2 flex flex-col justify-center mb-10 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get Started Today
          </h2>

          <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
            Join thousands of users and start your <br />
            financial transformation.
          </p>

          <button
            onClick={handleGetStarted}
            className="text-white bg-[#401A6D] px-8 py-3 md:px-10 md:py-4 
                       font-bold rounded-full text-sm md:text-base shadow-md
                       transition-all duration-300 
                       hover:bg-[#53228d] hover:scale-105 self-start"
          >
            Join Urgent2Kay
          </button>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center items-stretch">
          <img
            src={Image4}
            alt="Get started with Urgent2Kay illustration"
            className="w-full max-w-[450px] object-contain h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
