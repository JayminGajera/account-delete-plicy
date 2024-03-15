import React from "react";
import { Link } from "react-router-dom";

const FeedBackForm = () => {
  return (
    <div className="w-full h-screen bg-white mt-10 px-2">
      <h1 className="font-bold text-3xl">Account Delete Confirmation</h1>

      <form>
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
            />
            <label htmlFor="no-need">No longer need the app's services.</label>
          </div>
          <div className="flex flex-col gap-y-2 text-gray-600">
            <label>
              Write about app experience<sup>*</sup>
            </label>
            <textarea
              className="border-[1.3px] border-gray-600 rounded-md"
              rows={5}
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
            />
            <label htmlFor="very satisfied">Very satisfied</label>
          </div>
          <div className="flex gap-x-2 text-gray-600">
            <input
              type="radio"
              id="somewhat"
              name="satisfied"
              value="Somewhat satisfied"
            />
            <label htmlFor="somewhat">Somewhat satisfied</label>
          </div>
          <div className="flex gap-x-2 text-gray-600">
            <input type="radio" id="neutral" name="satisfied" value="Neutral" />
            <label htmlFor="neutral">Neutral</label>
          </div>
          <div className="flex gap-x-2 text-gray-600">
            <input
              type="radio"
              id="somewhat dissatisfied"
              name="satisfied"
              value="Somewhat dissatisfied "
            />
            <label htmlFor="somewhat dissatisfied">
              Somewhat dissatisfied{" "}
            </label>
          </div>
          <div className="flex flex-col gap-y-2 text-gray-600">
            <label>
              Write about app experience<sup>*</sup>
            </label>
            <textarea
              className="border-[1.3px] border-gray-600 rounded-md"
              rows={5}
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
            />
            <label htmlFor="frequently">Yes, frequently</label>
          </div>
          <div className="flex gap-x-2 text-gray-600">
            <input
              type="radio"
              id="occasionally"
              name="technical"
              value="Yes, occasionally"
            />
            <label htmlFor="occasionally">Yes, occasionally</label>
          </div>
          <div className="flex gap-x-2 text-gray-600">
            <input
              type="radio"
              id="notreally"
              name="technical"
              value="No, not really"
            />
            <label htmlFor="notreally">No, not really</label>
          </div>
          <div className="flex gap-x-2 text-gray-600">
            <input
              type="radio"
              id="appfeatures"
              name="technical"
              value="Dissatisfaction with app features or functionality."
            />
            <label htmlFor="appfeatures">
              Dissatisfaction with app features or functionality.
            </label>
          </div>
          <div className="flex flex-col gap-y-2 text-gray-600">
            <label>
              Any technical issues you faced *<sup>*</sup>
            </label>
            <textarea
              className="border-[1.3px] border-gray-600 rounded-md"
              rows={5}
            ></textarea>
          </div>
        </div>
        {/* 4 */}
        <div className="mt-8 flex flex-col gap-y-2 ">
          <label className="text-xl text-gray-600">
            4. What improvements or additional features would have encouraged
            you to continue using our app?
          </label>
          <div className="flex gap-x-2 text-gray-600">
            <input
              type="radio"
              id="ver like"
              name="likely"
              value=" Very likely"
            />
            <label htmlFor="ver like"> Very likely</label>
          </div>
          <div className="flex gap-x-2 text-gray-600">
            <input type="radio" id="md like" name="likely" value="Likely" />
            <label htmlFor="md like">Likely</label>
          </div>
          <div className="flex gap-x-2 text-gray-600">
            <input
              type="radio"
              id="netualal"
              name="likely"
              value="Neutral"
            />
            <label htmlFor="netualal">Neutral</label>
          </div>
          <div className="flex gap-x-2 text-gray-600">
            <input type="radio" id="unlikely" name="likely" value="Unlikely" />
            <label htmlFor="unlikely">Unlikely</label>
          </div>
          <div className="flex flex-col gap-y-2 text-gray-600">
            <label>
              What we need to improve<sup>*</sup>
            </label>
            <textarea
              className="border-[1.3px] border-gray-600 rounded-md"
              rows={5}
            ></textarea>
          </div>
        </div>
        {/* 5 */}
        <div className="mt-8 flex flex-col gap-y-2 ">
          <label className="text-xl text-gray-600">
            5. How likely are you to recommend our app to others?
          </label>
          <div className="flex gap-x-2 text-gray-600">
            <input
              type="radio"
              id="not"
              name="recommend"
              value=" Very likely"
            />
            <label htmlFor="not"> Very likely</label>
          </div>
          <div className="flex gap-x-2 text-gray-600">
            <input type="radio" id="li" name="recommend" value="Likely" />
            <label htmlFor="li">Likely</label>
          </div>
          <div className="flex gap-x-2 text-gray-600">
            <input
              type="radio"
              id="neurtaal"
              name="recommend"
              value="Neutral"
            />
            <label htmlFor="neurtaal">Neutral</label>
          </div>
          <div className="flex gap-x-2 text-gray-600">
            <input type="radio" id="no-like" name="recommend" value="Unlikely" />
            <label htmlFor="no-like">Unlikely</label>
          </div>
        </div>

        {/* checkbox */}
        <div className="mt-3 text-gray-600">
          {/* 1 */}
          <div className="flex gap-x-2">
            <input type="checkbox" id="checkbox1" />
            <label htmlFor="checkbox1">I have read and agree all terms</label>
          </div>
          {/* 2 */}
          <div className="flex gap-x-2">
            <input type="checkbox" id="checkbox2" />
            <label htmlFor="checkbox2">
              I understood all my data will be lost if I deleting my account
            </label>
          </div>
          {/* 3 */}
          <div className="flex gap-x-2">
            <input type="checkbox" id="checkbox3" />
            <label htmlFor="checkbox3">
              I understood my account details will be lost if I deleting my
              account and can not be reclaim
            </label>
          </div>
        </div>

        {/* mobile details */}
        <div className="mt-5 text-gray-600">
          <div className="flex flex-col gap-y-1">
            <label>Enter Your Number</label>
            <input
              className="border-[1.3px] border-gray-600 rounded-md p-2 outline-none"
              type="number"
              placeholder="+91 XXXXX XXXXX"
            />
          </div>
          <div className="flex flex-col gap-y-1 mt-5">
            <label>Write “DELETE” for your conformation</label>
            <input
              className="border-[1.3px] border-gray-600 rounded-md p-2 outline-none"
              type="number"
              placeholder=" Delete"
            />
          </div>
          <Link to={'/confirm-otp'} >
          <button className="bg-red-700 text-white font-bold rounded-md p-2 mt-4 w-full mb-10">
            Send OTP
          </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default FeedBackForm;
