import React from "react";

const AccountDeletionPolicy = () => {
  return (
    <div className="bg-[#FAF6FB] md:px-20 px-3 mt-10 ">
      <h1 className="font-bold text-3xl">Account Deletion Policy</h1>
      <p className="mt-2">
        At Passdn Technology Private Limited, safeguarding your privacy and
        ensuring a transparent and secure experience on our platform are our top
        priorities. Our account deletion policy is meticulously designed to
        ensure responsible data handling while giving you complete control over
        your account status. Below are the detailed points of our account
        deletion policy:
      </p>
      <div className="mt-5">
        <p className="font-semibold">Account Deletion Timeframe:</p>
        <p className="mt-3">
          When you request the deletion of your account, we commit to processing
          your request within one week (7 days) from the date of submission.
          After your account deletion request is confirmed and processed, all
          associated data linked to your account, including personal
          information, account details, preferences, and usage history, will be
          permanently and securely removed from our system.
        </p>
      </div>
      <div className="mt-2">
        <p className="font-semibold">Account Reactivation:</p>
        <p className="mt-3">
          In the event that you log in to your account within the one-week (7
          days) timeframe after requesting deletion, your account will not be
          considered deleted, and the deletion process will be halted. For your
          account deletion request to proceed successfully, we kindly ask that
          you refrain from logging in during the one-week period after
          submitting your deletion request.
        </p>
      </div>
      <div className="mt-2">
        <p className="font-semibold">Data Handling and Privacy:</p>
        <p className="mt-3">
          Passdn Technology Private Limited strictly adheres to comprehensive
          data protection policies and guidelines to ensure the utmost security
          and confidentiality of your personal information. Upon the successful
          deletion of your account, our system will securely erase all traces of
          your personal data from our servers, ensuring that your privacy is
          maintained and respected.
        </p>
      </div>

      <p className="mt-3">
        We encourage you to take a moment to review our Privacy Policy for a
        more in-depth understanding of how we handle your data and safeguard
        your privacy. Your trust and satisfaction are of paramount importance to
        us at Passdn Technology Private Limited.
      </p>

      <p className="mt-3 pb-3">
        Please submit the feedback form to delete your account.
      </p>
    </div>
  );
};

export default AccountDeletionPolicy;
