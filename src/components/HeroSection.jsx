import { useNavigate } from "react-router";
import heroImage from "../assets/images/image.png";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/sign-up");
  };
  return (
    <div>
      {/* Text Section */}
      <div className="flex justify-center flex-col items-center gap-4 mt-10 px-4 lg:w-[82%] m-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Bundle Bills, Send Requests, Track <br />
          Payments—<span className="text-[#E8BF31]">All in One Place.</span>
        </h1>

        <p className="w-full md:w-[80%] lg:w-[45rem] text-sm md:text-base text-gray-600">
          Simplify your finances with URGENT 2KAY. Combine expenses, request
          funds from sponsors, and ensure payments go exactly where they’re
          needed.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-10">
          {/* Get Started Button */}
          <button
            onClick={handleGetStarted}
            className="text-white bg-[#401A6D] px-8 py-3 md:px-10 md:py-4 rounded-full text-sm font-bold 
                       hover:bg-[#53228d] transition-all duration-300 hover:scale-105"
          >
            Get Started
          </button>

          {/* Learn More Button */}
          <button
            className="text-[#401A6D] border-2 border-[#E8BF31] px-8 py-3 md:px-10 md:py-4 rounded-full text-sm font-bold 
                       hover:bg-[#E8BF31] hover:text-[#401A6D] transition-all duration-300 hover:scale-105"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center mt-10 px-4">
        <img
          src={heroImage}
          alt="Happy man holding smartphone"
          className="w-full max-w-[600px] object-contain"
        />
      </div>
    </div>
  );
};

export default HeroSection;
