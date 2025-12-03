import React, { useState } from "react";
import { RxAvatar } from "react-icons/rx";
import Button from "../../components/Button";
import { CiMenuKebab } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import RelationshipModal from "./components/RelationshipModal";
import { useNavigate } from "react-router-dom";
import BackButton from "../../components/BackButton";
import business from "../../assets/images/business_14040022 2.png";
import trash from "../../assets/images/throw-trash_18779891.png";
import { useRelationships } from "../../contexts/RelationshipContexts";
import people from "../../assets/images/people_13831175.png";

const Relationships = () => {
  const navigate = useNavigate();
  const {
    relationships,
    deleteRelationship,
    setMainSponsor,
    removeMainSponsor,
    isMainSponsor,
  } = useRelationships();

  const [showOptionsMenu, setShowOptionsMenu] = useState(false);
  const [showSetAsMain, setShowSetAsMain] = useState(false);
  const [showRemoveAsMain, setRemoveAsMain] = useState(false);
  const [showRemoveSponsor, setShowRemoveSponsor] = useState(false);
  const [selectedSponsor, setSelectedSponsor] = useState(null);

  const handleOpenOptions = (sponsor) => {
    setSelectedSponsor(sponsor);
    setShowOptionsMenu(true);
  };

  const handleSetAsMain = () => {
    if (selectedSponsor) {
      setMainSponsor(selectedSponsor.id);
      setShowOptionsMenu(false);
      setShowSetAsMain(true);
    }
  };

  const handleRemoveAsMain = () => {
    removeMainSponsor();
    setShowOptionsMenu(false);
    setRemoveAsMain(true);
  };

  const handleViewPaymentDetails = () => {
    setShowOptionsMenu(false);
    navigate(`/dashboard/payment-details/${selectedSponsor.id}`);
  };

  const handleRemoveSponsor = () => {
    setShowOptionsMenu(false);
    setShowRemoveSponsor(true);
  };

  const confirmRemoveSponsor = () => {
    if (selectedSponsor) {
      deleteRelationship(selectedSponsor.id);
      setShowRemoveSponsor(false);
      setSelectedSponsor(null);
    }
  };

  const handleAddNewRelationship = () => {
    navigate("/dashboard/create-relationship");
  };

  const handleViewSponsor = (sponsorId) => {
    navigate(`/dashboard/sponsor-profile/${sponsorId}`);
  };

  const handleEditSponsor = (sponsorId) => {
    navigate(`/dashboard/edit-relationship/${sponsorId}`);
  };

  return (
    <section className="p-5 sm:py-5 sm:px-12 bg-[#ECE8F0] min-h-screen">
      <BackButton />

      <h1 className="text-center text-2xl font-bold text-[#331122] py-8 sm:text-left sm:py-10">
        My Relationships
      </h1>

      {relationships.length === 0 ? (
        <div className="p-6 lg:p-8 flex flex-col items-center justify-center text-center">
          <img
            src={people}
            alt="people.png"
            className="h-56 w-56 md:h-56 md:w-56"
          />

          <span className="text-[#545050] text-base sm:text-lg font-bold pt-8 pb-1">
            Oops!
          </span>
          <p className="pb-4 text-[#545050] text-base sm:text-lg font-normal">
            It Seems Like you Haven't Created Any Relationship Yet
          </p>

          <Button
            btnTxt="Create a relationship"
            onClick={handleAddNewRelationship}
            className="px-8 sm:px-16 md:px-20"
          />
        </div>
      ) : (
        <div className="space-y-4 bg-[#fafafa] px-4 py-6 rounded-md">
          {relationships.map((sponsor) => (
            <div
              key={sponsor.id}
              className={`relative flex items-center justify-between border rounded-2xl p-3 sm:p-4 md:p-5 md:max-w-[60%] lg:max-w-[50%] bg-white ${
                isMainSponsor(sponsor.id)
                  ? "border-[#E8BF31] bg-yellow-50"
                  : "border-gray-300"
              }`}
            >
              <div className="flex items-center gap-1 sm:gap-3">
               <RxAvatar className="w-10 h-10 md:w-[60px] md:h-[60px] text-[#70588e]" />
                <div>
                  <p className="text-xs sm:text-sm font-bold">
                    {sponsor.fullName}
                  </p>
                  <span className="text-xs sm:text-sm font-bold">
                    {sponsor.relationshipType}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  className="bg-[#401C6D] w-fit h-fit py-2 px-4 rounded-full text-white font-bold text-xs"
                  onClick={() => handleViewSponsor(sponsor.id)}
                >
                  View
                </button>
                <button
                  className="text-[#401C6D] w-fit h-fit py-2 px-4 rounded-full bg-white font-bold text-xs border border-[#E8BF31]"
                  onClick={() => handleEditSponsor(sponsor.id)}
                >
                  Edit
                </button>
              </div>
              <button onClick={() => handleOpenOptions(sponsor)}>
                <CiMenuKebab className="cursor-pointer" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Options Menu Modal */}
      {showOptionsMenu && selectedSponsor && (
        <div className="fixed inset-0 bg-black/80 bg-opacity-40 flex justify-center items-center z-50 w-full px-6">
          <button
            onClick={() => setShowOptionsMenu(false)}
            className="absolute top-3 right-3 z-50"
          >
            <IoMdClose className="h-8 w-8 text-white cursor-pointer" />
          </button>
          <ul className="text-center bg-white rounded-xl text-sm">
            {!isMainSponsor(selectedSponsor.id) && (
              <>
                <li
                  className="py-4 px-8 cursor-pointer hover:bg-gray-100 transition-colors"
                  onClick={handleSetAsMain}
                >
                  Set As Main Sponsor
                </li>
                <hr className="text-gray-300" />
              </>
            )}
            {isMainSponsor(selectedSponsor.id) && (
              <>
                <li
                  className="py-4 px-8 cursor-pointer hover:bg-gray-100 transition-colors"
                  onClick={handleRemoveAsMain}
                >
                  Remove As Main Sponsor
                </li>
                <hr className="text-gray-300" />
              </>
            )}
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

      {/* Set as main sponsor Modal */}
      {showSetAsMain && selectedSponsor && (
        <div className="fixed inset-0 bg-black/80 bg-opacity-40 flex justify-center items-center z-50 w-full px-6">
          <RelationshipModal
            onClick={() => setShowSetAsMain(false)}
            img={business}
            title={`Success! ${selectedSponsor.fullName} is now set as your main sponsor`}
            message="They'll now appear first when making future requests."
            btnTxt="Done"
          />
        </div>
      )}

      {/* Remove As Main Sponsor */}
      {showRemoveAsMain && selectedSponsor && (
        <div className="fixed inset-0 bg-black/80 bg-opacity-40 flex justify-center items-center z-50 w-full px-6">
          <RelationshipModal
            onClick={() => setRemoveAsMain(false)}
            img={trash}
            title={`${selectedSponsor.fullName} has been removed as your Main Sponsor`}
            message="Feel free to pick another when you're ready!"
            btnTxt="Done"
          />
        </div>
      )}

      {showRemoveSponsor && selectedSponsor && (
        <div className="fixed inset-0 bg-black/80 bg-opacity-40 flex justify-center items-center z-50 w-full px-6">
          <RelationshipModal
            onClick={confirmRemoveSponsor}
            img={trash}
            title="Sponsor Profile Deleted."
            message={`${selectedSponsor.fullName} is no longer linked to your account.`}
            btnTxt="Done"
          />
        </div>
      )}
      {relationships.length > 0 && (
        <div className="flex flex-col justify-center items-center pt-16 sm:items-start">
          <Button
            btnTxt="Add New Relationship"
            onClick={handleAddNewRelationship}
          />
        </div>
      )}
    </section>
  );
};

export default Relationships;
