import React, { useState } from "react";
import avatar from "./img/avatar.png";
import Button from "../../components/Button";
import { CiMenuKebab } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import RelationshipModal from "./components/RelationshipModal";
import { useNavigate } from "react-router";
import BackButton from "../../components/BackButton";
import business from "../../assets/images/business_14040022 2.png";
import trash from "../../assets/images/throw-trash_18779891.png";

const MyRelationships = () => {
  const navigate = useNavigate();
  const [showOptionsMenu, setShowOptionsMenu] = useState(false);
  const [showSetAsMain, setShowSetAsMain] = useState(false);
  const [showRemoveAsMain, setRemoveAsMain] = useState(false);
  const [showRemoveSponsor, setShowRemoveSponsor] = useState(false);
  const [modalAction, setModalAction] = useState(null);

  const handleSetAsMain = () => {
    setModalAction("set-main");
    setShowOptionsMenu(false);
    setShowRemoveSponsor(false);
    setShowSetAsMain(true);
  };

  const handleRemoveAsMain = () => {
    setModalAction("remove-main");
    setShowOptionsMenu(false);
    setShowRemoveSponsor(false);
    setRemoveAsMain(true);
  };

  const handleViewPaymentDetails = () => {
    setShowOptionsMenu(false);
    navigate("/dashboard/payment-details");
  };

  const handleRemoveSponsor = () => {
    setShowOptionsMenu(false);
    setShowRemoveSponsor(true);
    setRemoveAsMain(false);
  };

  const handleAddNewRelationship = () => {
    setModalAction("add-new");
    navigate("/dashboard/create-relationship");
  };

  return (
    <section className="p-5 sm:py-5 sm:px-12">
      <BackButton />

      <h1 className="text-center text-xl font-bold text-[#331122] py-8 sm:text-left sm:py-10">
        My Relationships
      </h1>

      <div className="relative flex items-center justify-between border border-[#E8BF31] rounded-2xl p-3 sm:p-4 md:p-5 md:max-w-[60%] lg:max-w-[50%]">
        <div className="flex items-center gap-3">
          <img src={avatar} alt="" className="h-[65px] w-[65px]" />
          <div>
            <p className="text-xs font-bold">Mrs Kamasi</p>
            <span className="text-xs font-bold">Mother</span>
          </div>
        </div>
        <div className=" flex items-center gap-4">
          <button
            className="bg-[#401C6D] w-fit h-fit py-2 px-4 rounded-full text-white font-bold text-xs"
            onClick={() => navigate("/dashboard/sponsor-profile")}
          >
            View
          </button>
          <button
            className="text-[#401C6D] w-fit h-fit py-2 px-4 rounded-full bg-white font-bold text-xs border border-[#E8BF31]"
            onClick={() => navigate("/dashboard/edit-sponsor-profile")}
          >
            Edit
          </button>
        </div>
        <button onClick={() => setShowOptionsMenu(!showOptionsMenu)}>
          <CiMenuKebab className="cursor-pointer" />
        </button>

        {/* Options Menu Modal */}
        {showOptionsMenu && (
          <div className="fixed inset-0 bg-black/80 bg-opacity-40 flex justify-center items-center z-50 w-full px-6">
            <button
              onClick={() => setShowOptionsMenu(false)}
              className="absolute top-3 right-3 z-50"
            >
              <IoMdClose className="h-8 w-8 text-white cursor-pointer" />
            </button>
            <ul className="text-center bg-white rounded-xl text-sm">
              <li
                className="py-4 px-8 cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={handleSetAsMain}
              >
                Set As Main Sponsor
              </li>
              <hr className="text-gray-300" />
              <li
                className="py-4 px-8 cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={handleRemoveAsMain}
              >
                Remove As Main Sponsor
              </li>
              <hr className="text-gray-300" />
              <li
                className="py-4 px-8 cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={handleViewPaymentDetails}
              >
                View Payment Details
              </li>
              <hr className="text-gray-300" />
              <li
                className="py-4 px-8 cursor-pointer hover:bg-gray-100 transition-colors text-red-600"
                onClick={handleRemoveSponsor}
              >
                Remove Sponsor
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Set as main sponsor Modal */}
      {showSetAsMain && (
        <div className="fixed inset-0 bg-black/80 bg-opacity-40 flex justify-center items-center z-50 w-full px-6">
          <RelationshipModal
            action={modalAction}
            onClick={() => setShowSetAsMain(false)}
            img={business}
            title="Success! Mrs. Kamisi is now set as your main sponsor"
            message="They'll now appear first when making future requests."
            btnTxt="Done"
          />
        </div>
      )}

      {/* Remove As Main Sponsor */}
      {showRemoveAsMain && (
        <div className="fixed inset-0 bg-black/80 bg-opacity-40 flex justify-center items-center z-50 w-full px-6">
          <RelationshipModal
            action={modalAction}
            onClick={() => setRemoveAsMain(false)}
            img={trash}
            title="Mrs. Kamisi has been removed as your Main Sponsor"
            message="Feel free to pick another when you're ready!"
            btnTxt="Done"
          />
        </div>
      )}

      {showRemoveSponsor && (
        <div className="fixed inset-0 bg-black/80 bg-opacity-40 flex justify-center items-center z-50 w-full px-6">
          <RelationshipModal
            action={modalAction}
            onClick={() => setShowRemoveSponsor(false)}
            img={trash}
            title="Sponsor Profile Deleted."
            message="Mrs. Kamal is no longer linked to your account."
            btnTxt="Done"
          />
        </div>
      )}

      <div className="flex flex-col justify-center items-center pt-16 sm:items-start">
        <Button
          btnTxt="Add New Relationship"
          onClick={handleAddNewRelationship}
        />
      </div>
    </section>
  );
};

export default MyRelationships;
