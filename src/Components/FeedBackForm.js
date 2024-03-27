import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from 'axios';

const FeedBackForm = () => {
  const [formData, setFormData] = useState({
    reason: "",
    satisfaction: "",
    technical: "",
    improvements: "",
    likely: "",
    recommend: "",
    phoneNumber: "",
    confirmation: "",
    aboutApp: "",
    aboutAppExperience: "",
    technicalIssues: "",
    termAgreed: false,
    dataLostAgreed: false,
    notReclaimAgreed: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData);
    // Add your logic to submit the form data here

    
  };

  return (
    <div className="w-full h-screen bg-white mt-10 px-2">
      <h1 className="font-bold text-3xl">Account Delete Confirmation</h1>

      <form onSubmit={handleSubmit}>
        {/* 1 */}
        <div className="mt-8 flex flex-col gap-y-2 ">
          <label className="text-xl text-gray-600">
            1. What is the primary reason for deleting your account?
          </label>
          <div className="flex gap-x-2 text-gray-600">
            <input
              type="radio"
              id="dissatisfaction"
              name="reason"
              value="Dissatisfaction with app features or functionality."
              checked={
                formData.reason ===
                "Dissatisfaction with app features or functionality."
              }
              onChange={handleInputChange}
            />
            <label htmlFor="dissatisfaction">
              Dissatisfaction with app features or functionality.
            </label>
          </div>
          <div className="flex gap-x-2 text-gray-600">
            <input
              type="radio"
              id="privacy"
              name="reason"
              value="Privacy concerns or data handling issues."
              checked={
                formData.reason === "Privacy concerns or data handling issues."
              }
              onChange={handleInputChange}
            />
            <label htmlFor="privacy">
              Privacy concerns or data handling issues.
            </label>
          </div>
          <div className="flex gap-x-2 text-gray-600">
            <input
              type="radio"
              id="alternative"
              name="reason"
              value="Found an alternative service or platform."
              checked={
                formData.reason === "Found an alternative service or platform."
              }
              onChange={handleInputChange}
            />
            <label htmlFor="alternative">
              Found an alternative service or platform.
            </label>
          </div>
          <div className="flex gap-x-2 text-gray-600">
            <input
              type="radio"
              id="no-need"
              name="reason"
              value="No longer need the app's services."
              checked={formData.reason === "No longer need the app's services."}
              onChange={handleInputChange}
            />
            <label htmlFor="no-need">No longer need the app's services.</label>
          </div>
          <div className="flex flex-col gap-y-2 text-gray-600">
            <label>
              Write us what went wrong.<sup>*</sup>
            </label>
            <textarea
              className="border-[1.3px] border-gray-600 rounded-md"
              rows={5}
              name="aboutApp"
              value={formData.aboutApp}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </div>
        {/* 2 */}
        <div className="mt-8 flex flex-col gap-y-2 ">
          <label className="text-xl text-gray-600">
            2. How satisfied were you with the app's overall user experience?
          </label>
          <div className="flex gap-x-2 text-gray-600">
            <input
              type="radio"
              id="very satisfied"
              name="satisfied"
              value="Very satisfied"
              checked={formData.satisfied === "Very satisfied"}
              onChange={handleInputChange}
            />
            <label htmlFor="very satisfied">Very satisfied</label>
          </div>
          <div className="flex gap-x-2 text-gray-600">
            <input
              type="radio"
              id="somewhat"
              name="satisfied"
              value="Somewhat satisfied"
              checked={formData.satisfied === "Somewhat satisfied"}
              onChange={handleInputChange}
            />
            <label htmlFor="somewhat">Somewhat satisfied</label>
          </div>
          <div className="flex gap-x-2 text-gray-600">
            <input
              type="radio"
              id="neutral"
              name="satisfied"
              value="Neutral"
              checked={formData.satisfied === "Neutral"}
            />
            <label htmlFor="neutral">Neutral</label>
          </div>
          <div className="flex gap-x-2 text-gray-600">
            <input
              type="radio"
              id="somewhat dissatisfied"
              name="satisfied"
              value="Somewhat dissatisfied"
              checked={formData.satisfied === "Somewhat dissatisfied"}
              onChange={handleInputChange}
            />
            <label htmlFor="somewhat dissatisfied">
              Somewhat dissatisfied{" "}
            </label>
          </div>
          <div className="flex flex-col gap-y-2 text-gray-600">
            <label>
              How can we improve?<sup>*</sup>
            </label>
            <textarea
              className="border-[1.3px] border-gray-600 rounded-md"
              rows={5}
              name="aboutAppExperience"
              value={formData.aboutAppExperience}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </div>
        {/* 3 */}
        <div className="mt-8 flex flex-col gap-y-2 ">
          <label className="text-xl text-gray-600">
            3. Did you encounter any technical issues or bugs while using the
            app?
          </label>
          <div className="flex gap-x-2 text-gray-600">
            <input
              type="radio"
              id="frequently"
              name="technical"
              value="Yes, frequently"
              checked={formData.technical === "Yes, frequently"}
              onChange={handleInputChange}
            />
            <label htmlFor="frequently">Yes, frequently</label>
          </div>
          <div className="flex gap-x-2 text-gray-600">
            <input
              type="radio"
              id="occasionally"
              name="technical"
              value="Yes, occasionally"
              checked={formData.technical === "Yes, occasionally"}
              onChange={handleInputChange}
            />
            <label htmlFor="occasionally">Yes, occasionally</label>
          </div>
          <div className="flex gap-x-2 text-gray-600">
            <input
              type="radio"
              id="notreally"
              name="technical"
              value="No, not really"
              checked={formData.technical === "No, not really"}
              onChange={handleInputChange}
            />
            <label htmlFor="notreally">No, not really</label>
          </div>
          <div className="flex gap-x-2 text-gray-600">
            <input
              type="radio"
              id="appfeatures"
              name="technical"
              value="Dissatisfaction with app features or functionality."
              checked={
                formData.technical ===
                "Dissatisfaction with app features or functionality."
              }
              onChange={handleInputChange}
            />
            <label htmlFor="appfeatures">
              Dissatisfaction with app features or functionality.
            </label>
          </div>
          <div className="flex flex-col gap-y-2 text-gray-600">
            <label>
              Any technical issues you faced? <sup>*</sup>
            </label>
            <textarea
              className="border-[1.3px] border-gray-600 rounded-md"
              rows={5}
              name="technicalIssues"
              value={formData.technicalIssues}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </div>
        {/* 4 */}
        <div className="mt-8 flex flex-col gap-y-2 ">
          <label className="text-xl text-gray-600">
            4. How likely are you to recommend our app to others?
          </label>
          <div className="flex gap-x-2 text-gray-600">
            <input
              type="radio"
              id="not"
              name="recommend"
              value="Very likely"
              checked={formData.recommend === "Very likely"}
              onChange={handleInputChange}
            />
            <label htmlFor="not"> Very likely</label>
          </div>
          <div className="flex gap-x-2 text-gray-600">
            <input
              type="radio"
              id="li"
              name="recommend"
              value="Likely"
              checked={formData.recommend === "Likely"}
              onChange={handleInputChange}
            />
            <label htmlFor="li">Likely</label>
          </div>
          <div className="flex gap-x-2 text-gray-600">
            <input
              type="radio"
              id="neurtaal"
              name="recommend"
              value="Neutral"
              checked={formData.recommend === "Neutral"}
              onChange={handleInputChange}
            />
            <label htmlFor="neurtaal">Neutral</label>
          </div>
          <div className="flex gap-x-2 text-gray-600">
            <input
              type="radio"
              id="no-like"
              name="recommend"
              value="Unlikely"
              checked={formData.recommend === "Unlikely"}
              onChange={handleInputChange}
            />
            <label htmlFor="no-like">Unlikely</label>
          </div>
        </div>

        {/* checkbox */}
        <div className="mt-3 text-gray-600">
          {/* 1 */}
          <div className="flex gap-x-2">
            <input
              type="checkbox"
              id="checkbox1"
              name="termAgreed"
              checked={formData.termAgreed}
              onChange={handleInputChange}
            />
            <label htmlFor="checkbox1">
              I have read and agree all terms<sup className="text-red-500">*</sup>
            </label>
          </div>
          {/* 2 */}
          <div className="flex gap-x-2">
            <input
              type="checkbox"
              id="checkbox2"
              name="dataLostAgreed"
              checked={formData.dataLostAgreed}
              onChange={handleInputChange}
            />
            <label htmlFor="checkbox2">
              I understood all my data will be lost if I deleting my account
              <sup className="text-red-500">*</sup>
            </label>
          </div>
          {/* 3 */}
          <div className="flex gap-x-2">
            <input
              type="checkbox"
              id="checkbox3"
              name="notReclaimAgreed"
              checked={formData.notReclaimAgreed}
              onChange={handleInputChange}
            />
            <label htmlFor="checkbox3">
              I understood my account details will be lost if I deleting my
              account and can not be reclaim<sup className="text-red-500">*</sup>
            </label>
          </div>
        </div>

        {/* mobile details */}
        <div className="mt-5 text-gray-600">
          <div className="flex flex-col gap-y-1">
            <label>Enter Mobile Number</label>
            <input
              className="border-[1.3px] border-gray-600 rounded-md p-2 outline-none"
              type="tel"
              placeholder="8888888888"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-y-1 mt-5">
            <label>Write “DELETE” for your conformation</label>
            <input
              className="border-[1.3px] border-gray-600 rounded-md p-2 outline-none"
              type="text"
              placeholder=" DELETE"
              name="confirmation"
              value={formData.confirmation}
              onChange={handleInputChange}
            />
          </div>
          {/* <Link to={'/confirm-otp'} > */}
          <button
            type="submit"
            className="bg-red-700 text-white font-bold rounded-md p-2 mt-4 w-full mb-10"
          >
            Send OTP
          </button>
          {/* </Link> */}
        </div>
      </form>
    </div>
  );
};

export default FeedBackForm;
