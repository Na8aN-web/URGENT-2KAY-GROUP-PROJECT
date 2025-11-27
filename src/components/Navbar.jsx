import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/login");
  };

  const handleSignUp = () => {
    navigate("/sign-up");
  };
  return (
    <nav className="flex items-center justify-between px-6 py-6">
      {/* Logo */}
      <div>
        <span className="text-[#401A6D] text-2xl font-extrabold">
          Urgent2kay
        </span>
      </div>

      {/* Buttons - hidden on sm*/}
      <div className="hidden md:flex items-center gap-6">
        <button
          onClick={handleSignIn}
          className="text-[#401A6D] border border-[#E8BF31] rounded-full py-2 px-5 font-semibold 
                     transition-all duration-300 hover:bg-[#E8BF31] hover:text-[#401A6D]"
        >
          Sign In
        </button>

        <button
          onClick={handleSignUp}
          className="bg-[#401A6D] text-white rounded-full py-2 px-5 font-semibold 
                     transition-all duration-300 hover:bg-[#5A278F]"
        >
          Join Urgent2kay
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
