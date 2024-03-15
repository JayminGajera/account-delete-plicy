import React from "react";
import cardImage from "../images/cardImage.png"; 
import { Link } from "react-router-dom";

const DeleteCard = () => {
  return (
    <div className="w-full h-full flex justify-center items-center px-3">
      <div className="w-[25rem] flex flex-col items-center gap-y-8 border-2 border-gray-200 rounded-md">
      <div className="bg-[#FAF6FB] w-full">
        <img src={cardImage} alt="card" className="mx-auto h-[15rem]"/>
      </div>
      <div className="px-5">
        <h2 className="text-xl">Account Delete Confirmation</h2>
        <p className="text-gray-700 mt-2">If you wish to proceed with deleting your account, please click the confirmation button below:</p>
      </div>
      <div className="w-full px-5 py-2 flex gap-x-3 font-semibold">
        <button className="w-full rounded-full p-2 border-2 border-gray-200">Cancel,Keep account</button>
        <Link to={'/account-delete-policy'} className="w-full bg-red-700 text-white rounded-full p-2 border-2 border-gray-200 text-center"><button >Delete Account</button></Link>
      </div>
      </div>
    </div>
  );
};

export default DeleteCard;
