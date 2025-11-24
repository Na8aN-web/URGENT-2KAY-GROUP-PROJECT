import { useNavigate } from "react-router-dom";
import {
  Zap,
  ShoppingCart,
  GraduationCap,
  Home,
  Smartphone,
  Utensils,
  ArrowRight,
  Package,
} from "lucide-react";

const iconsMap = {
  Electricity: Zap,
  "Shop Online": ShoppingCart,
  "School Fees": GraduationCap,
  "House Rent": Home,
  Airtime: Smartphone,
  Food: Utensils,
  "Data Top-Up": Smartphone,
  Transfer: ArrowRight,
  "See more": Package,
};

const IconWrapper = ({ name }) => {
  const Icon = iconsMap[name];
  if (!Icon) return null;

  return (
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#F8F1F1] text-[#401A6D]">
      <Icon className="text-xl" />
    </div>
  );
};

const BillIconCard = ({ name, isSeeMore = false }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    if (name === "See more") return;

    const target =
      name === "Electricity" || name === "Shop Online"
        ? `/dashboard/pay/${name}`
        : `/dashboard/under-construction/${name}`;

    navigate(target);
  };

  return (
    <div
      onClick={handleNavigation}
      className={`flex flex-col items-center p-3 rounded-lg cursor-pointer ${
        isSeeMore ? "" : "hover:bg-purple-50"
      }`}
    >
      <IconWrapper name={name} />
      <p className="mt-2 text-xs font-medium text-gray-700 text-center">
        {name}
      </p>
    </div>
  );
};

export default BillIconCard;