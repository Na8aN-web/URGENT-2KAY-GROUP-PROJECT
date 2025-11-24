import {
  FaBolt,
  FaShoppingCart,
  FaGraduationCap,
  FaHome,
  FaMobileAlt,
  FaUtensils,
  FaArrowRight,
} from "react-icons/fa";

const iconsMap = {
  Electricity: FaBolt,
  "Shop Online": FaShoppingCart,
  "School Fees": FaGraduationCap,
  "House Rent": FaHome,
  Airtime: FaMobileAlt,
  Food: FaUtensils,
  "Data Top-Up": FaMobileAlt,
  Transfer: FaArrowRight,
};

const IconWrapper = ({ name }) => {
  const Icon = iconsMap[name];
  if (!Icon) return null;

  return (
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50 text-indigo-600">
      <Icon className="text-xl" />
    </div>
  );
};

export default IconWrapper;