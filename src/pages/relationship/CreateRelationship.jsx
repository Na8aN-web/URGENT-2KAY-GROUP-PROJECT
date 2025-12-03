import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InputField from "../../components/InputField";
import { RxAvatar } from "react-icons/rx";
import business from "../../assets/images/business_14040022 2.png";
import RelationshipModal from "./components/RelationshipModal";
import Button from "../../components/Button";
import { useRelationships } from "../../contexts/RelationshipContexts";
import BackButton from "../../components/BackButton";

const CreateRelationship = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get ID from URL if editing
  const { addRelationship, updateRelationship, getRelationshipById } =
    useRelationships();

  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({});

  // Check if we're in edit mode
  const isEditMode = !!id;
  const existingRelationship = isEditMode ? getRelationshipById(id) : null;

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    relationshipType: "",
    spendingLimit: "",
    frequency: "",
  });

  // Load existing data if editing
  useEffect(() => {
    if (isEditMode && existingRelationship) {
      setFormData({
        fullName: existingRelationship.fullName || "",
        phoneNumber: existingRelationship.phoneNumber || "",
        email: existingRelationship.email || "",
        relationshipType: existingRelationship.relationshipType || "",
        spendingLimit: existingRelationship.spendingLimit || "",
        frequency: existingRelationship.frequency || "",
      });
    }
  }, [isEditMode, existingRelationship]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (formData.phoneNumber.length < 10) {
      newErrors.phoneNumber = "Please enter a valid phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.relationshipType.trim()) {
      newErrors.relationshipType = "Relationship type is required";
    }

    if (!formData.spendingLimit.trim()) {
      newErrors.spendingLimit = "Spending limit is required";
    }

    if (!formData.frequency.trim()) {
      newErrors.frequency = "Frequency is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      if (isEditMode) {
        // Update existing relationship
        updateRelationship(id, formData);
      } else {
        // Create new relationship
        addRelationship(formData);
      }
      setShowModal(true);
    }
  };

  const handleView = () => {
    setShowModal(false);
    navigate("/dashboard/relationships");
  };

  return (
    <>
      <section className="p-8 sm:px-28 sm:py-12 lg:px-18 lg:pt-20 lg:max-w-5xl lg:mx-auto">
        {isEditMode && (
          <div className="pb-4">
            <BackButton />
          </div>
        )}
        <h2 className="text-2xl font-bold text-[#331122] pb-12 text-center">
          {isEditMode ? "Edit Sponsor Profile" : "Create a Relationship"}
        </h2>
        {/* Create relationship */}
        <form>
          <div className="flex flex-col justify-center items-center pb-16">
            <RxAvatar className="w-[65px] h-[65px] md:w-[85px] md:h-[85px] text-[#70588e]"/>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-30 gap-y-4 xl:gap-x-60 pb-16 sm:pb-12">
            <InputField
              inputLabel="Sponsor's Full Name"
              placeholder="Mrs. Kamisi"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              error={errors.fullName}
            />
            <InputField
              inputLabel="Sponsor's Phone Number"
              placeholder="0801 901 0001"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              error={errors.phoneNumber}
            />
            <InputField
              inputLabel="Email Address"
              placeholder="Mamakeam@gmail.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
            <InputField
              inputLabel="Relationship Type"
              placeholder="Mother"
              inputSpan="E.g Father, Mother, Sister, Brother, Friend."
              name="relationshipType"
              value={formData.relationshipType}
              onChange={handleChange}
              error={errors.relationshipType}
            />
            <InputField
              inputLabel="Spending Limit"
              placeholder="N500,000"
              inputSpan="E.g N5,000, N50,000, N500,000, N5,000,000"
              name="spendingLimit"
              value={formData.spendingLimit}
              onChange={handleChange}
              error={errors.spendingLimit}
            />
            <InputField
              inputLabel="Frequency"
              placeholder="Monthly"
              inputSpan="E.g Monthly, Weekly, Daily"
              name="frequency"
              value={formData.frequency}
              onChange={handleChange}
              error={errors.frequency}
            />
          </div>

          <div className="flex justify-center items-center sm:pt-8">
            <Button
              btnTxt={isEditMode ? "Update Relationship" : "Save Changes"}
              type="button"
              onClick={handleSubmit}
              className="px-8 sm:px-16 md:px-18"
            />
          </div>
        </form>
      </section>

      {/* show success modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 bg-opacity-40 flex justify-center items-center z-50 w-full px-6">
          <RelationshipModal
            onClick={handleView}
            title={
              isEditMode
                ? "Relationship Updated Successfully!"
                : "Relationship Added Successfully!"
            }
            message="Now, invite your sponsor to connect and approve bill requests easily"
            btnTxt="View Relationships"
            img={business}
          />
        </div>
      )}
    </>
  );
};

export default CreateRelationship;
