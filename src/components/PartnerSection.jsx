import Image6 from "../assets/images/image6.png";

const PartnerSection = () => {
  return (
    <section className="lg:w-[82%] mx-auto px-6 py-20 bg-[#ECE8F0] mt-10 mb-10">
      <div className="flex flex-col md:flex-row items-center md:gap-10">
        <div className="md:w-1/2 order-1 md:order-1 text-left mb-10 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Partner with Urgent2kay
          </h2>

          <ul className="list-disc list-outside pl-6 space-y-4 text-gray-600 mb-6 text-sm md:text-base">
            <li>
              Payment Gateways: Integration for seamless and secure
              transactions.
            </li>
            <li>
              Financial Institutions: Collaboration on offering innovative
              financial services.
            </li>
            <li>
              Service Providers: Enable direct and bundled payments for your
              services.
            </li>
          </ul>

          <button
            className="text-white bg-[#401A6D] px-8 py-3 md:px-10 md:py-4 
                       rounded-full text-sm md:text-base font-bold shadow-md 
                       transition-all duration-300 hover:bg-[#53228d] hover:scale-105"
          >
            Partner With Us
          </button>
        </div>

        {/* Image */}
        <div className="md:w-1/2 order-2 md:order-2 flex justify-center md:justify-end">
          <img
            src={Image6}
            alt="Partner with Urgent2Kay"
            className="w-full max-w-[450px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
