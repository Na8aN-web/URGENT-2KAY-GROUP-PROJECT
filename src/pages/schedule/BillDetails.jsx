import React, { useState } from "react";
import { IoChevronBack } from "react-icons/io5";
import InputField from "../../components/InputField";
import avatar from "./images/avatar.png";
import Button from "../../components/Button";
import ButtonGold from "../../components/ButtonGold";
import { useNavigate } from "react-router";
import BackButton from "../../components/BackButton";

const AddNewSponsor = ({ onClose, onAddSponsor }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [relationship, setRelationship] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();

    const newSponsor = {
      id: Date.now(),
      name,
      phone,
      relationship,
    };

    onAddSponsor(newSponsor);
    onClose();
  };

  return (
    <div className="relative w-full max-w-[600px] bg-white py-10 px-4 md:py-20 md:px-8 rounded-lg">
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-600 text-xl font-bold"
      >
        ✕
      </button>

      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-20 md:gap-y-8"
        onSubmit={handleAdd}
      >
        <InputField
          inputLabel="Sponsor Full Name"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <InputField
          inputLabel="Sponsor Phone Number"
          placeholder="Enter phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <InputField inputLabel="Email Address" placeholder="Enter email" />

        <InputField
          inputLabel="Relationship Type"
          placeholder="Mother"
          inputSpan="e.g Father, Mother, Sister..."
          value={relationship}
          onChange={(e) => setRelationship(e.target.value)}
        />

        <button type="submit">
          <Button btnTxt="Add Sponsor" />
        </button>
      </form>
    </div>
  );
};


const BillDetails = () => {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [sponsors, setSponsors] = useState([
    { id: 1, name: "Ngozi", relationship: "Mother", phone: "080..." },
  ]);
  const [billData, setBillData] = useState({});

  const onAddSponsor = (newSponsor) => {
    setSponsors((prev) => [...prev, newSponsor]);
  };

  // const handleSelectSponsor = (sponsor) => {
  //   setSelectedSponsor(sponsor);
  // };

  return (
    <div className="p-5 sm:p-6 lg:p-8 bg-[#ECE8F0] min-h-screen">
      <BackButton />

      <h1 className="text-sm sm:text-base font-bold text-[#252323] pb-8">
        Bill Details
      </h1>

      {/* Bill inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-20 md:gap-y-8 lg:w-[80%] xl:w-[60%]">
        <InputField
          inputLabel="Bill Type"
          inputSpan="E.g Rent, Tuition"
          onChange={(e) => setBillData({ ...billData, type: e.target.value })}
        />

        <InputField
          inputLabel="Service Provider"
          onChange={(e) =>
            setBillData({ ...billData, provider: e.target.value })
          }
        />

        <InputField
          inputLabel="Frequency"
          onChange={(e) =>
            setBillData({ ...billData, frequency: e.target.value })
          }
        />

        <InputField
          inputLabel="Amount"
          onChange={(e) =>
            setBillData({ ...billData, amount: e.target.value })
          }
        />

        <InputField
          inputLabel="Account Number/Biller ID"
          onChange={(e) =>
            setBillData({ ...billData, account: e.target.value })
          }
        />

        <InputField
          inputLabel="What time of day should this be sent?"
          onChange={(e) =>
            setBillData({ ...billData, timeOfDay: e.target.value })
          }
        />
      </div>

      {/* Choose sponsor */}
      <div className="pt-12 sm:pt-16">
        <h2 className="text-base text-[#252323] font-bold pb-8">
          Choose Sponsor
        </h2>

        {sponsors.map((sp) => (
          <div
            key={sp.id}
            // onClick={() => handleSelectSponsor(sp)}
            className="flex gap-4 items-center pb-8 sm:pb-12 cursor-pointer"
          >
            <img src={avatar} className="w-[60px] h-[60px]" />
            <p className="text-sm font-bold">
              <span className="text-gray-500">{sp.relationship}</span> / {sp.name}
            </p>

            <Button btnTxt="Choose" onClick={() => navigate("/dashboard/confirm-details")} />
          </div>
        ))}

        <ButtonGold
          btnTxt="Add new Sponsor"
          onClick={() => setShowModal(true)}
        />
      </div>

      {/* Schedule button */}
      {/* <div className="pt-10">
        <ButtonGold
          btnTxt="Schedule Bill"
          onClick={handleScheduleBill}
        />
      </div> */}

      {/* Add sponsor modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 w-full px-6">
          <AddNewSponsor
            onClose={() => setShowModal(false)}
            onAddSponsor={onAddSponsor}
          />
        </div>
      )}

      {/* Success modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 w-full px-6">
          <ScheduleSuccess onClose={() => setShowSuccess(false)} />
        </div>
      )}
    </div>
  );
};

export default BillDetails;
