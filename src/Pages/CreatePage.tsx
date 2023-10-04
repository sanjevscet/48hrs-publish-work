import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

const CreatePage: React.FC = () => {
  const [hoursToGive, setHoursToGive] = useState<number>(0);
  const [peoplesNeeded, setPeoplesNeeded] = useState<number>(0);
  const [textarea, setTextarea] = useState<string>("");
  const [selectedPerk, setSelectedPerk] = useState<string>("");
  const [selectedExpertise, setSelectedExpertise] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleHoursToGiveChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHoursToGive(+e.target.value);
  };

  const handlePeoplesNeededChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPeoplesNeeded(+e.target.value);
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextarea(e.target.value);
  };

  const handlePerkChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPerk(e.target.value);
  };

  const handleExpertiseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedExpertise(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can access form values using hoursToGive, peoplesNeeded, textarea, and selectedPerk states
    console.log("Form submitted:", {
      hoursToGive,
      peoplesNeeded,
      textarea,
      selectedPerk,
      selectedExpertise,
    });
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      navigate("/about");
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Form cancelled");
    setHoursToGive(0);
    setPeoplesNeeded(0);
    setTextarea("");
    setSelectedPerk("");
    setSelectedExpertise("");
  };

  return (
    <>
      {isSubmitting ? (
        <Loader />
      ) : (
        <div style={{ marginTop: 40 }}>
          <h2 className="mb-4">Publish a new Work</h2>
          <form onSubmit={handleSubmit}>
            {/* Description */}
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Description
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={3}
                value={textarea}
                onChange={handleTextareaChange}
              />
            </div>
            {/* hourstogive */}
            <div className="mb-3">
              <label htmlFor="hours-to-give" className="form-label">
                Hours to Give
              </label>
              <input
                type="number"
                className="form-control"
                id="hours-to-give"
                value={hoursToGive}
                onChange={handleHoursToGiveChange}
              />
            </div>
            {/* peoplesNeeded */}
            <div className="mb-3">
              <label htmlFor="people-required" className="form-label">
                People Required
              </label>
              <input
                type="number"
                className="form-control"
                id="people-required"
                value={peoplesNeeded}
                onChange={handlePeoplesNeededChange}
              />
            </div>

            {/* Perks list */}
            <div className="mb-3">
              <label htmlFor="perks-list" className="form-label">
                Perks Category
              </label>
              <select
                id="perks-list"
                className="form-select"
                aria-label="Default select example"
                value={selectedPerk}
                onChange={handlePerkChange}
              >
                <option selected>Select type of Perk</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            {/* Expertise Required */}
            <div className="mb-3">
              <label htmlFor="expertise-list" className="form-label">
                Required Expertise:
              </label>
              <select
                id="expertise-list"
                className="form-select"
                aria-label="Default select example"
                value={selectedExpertise}
                onChange={handleExpertiseChange}
              >
                <option selected>Select type of Expertise</option>
                <option value="1">Java</option>
                <option value="2">React</option>
                <option value="3">Cloud</option>
                <option value="4">Sql</option>
              </select>
            </div>

            {/* Submit and Cancel buttons */}
            <div className="mb-3 mt-4">
              <button
                type="submit"
                className="btn btn-primary me-4 submit-button "
              >
                Submit
              </button>
              <button
                type="button"
                className="btn btn-secondary ms-2"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default CreatePage;
