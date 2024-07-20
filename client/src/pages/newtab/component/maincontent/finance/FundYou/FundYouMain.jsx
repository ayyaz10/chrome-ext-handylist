import React, { useState } from "react";
import FundYou from "./FundYou";

const FundYOuMain = () => {
  const [showFunds, setshowFunds] = useState(false);
  return (
    <div className="text-white text-4xl">
      <button
        onClick={() => setshowFunds(!showFunds)}
        className="tw-primary-btn ml-auto"
      >
        Add Funds
      </button>
      <FundYou showFunds={showFunds} setshowFunds={setshowFunds} />
    </div>
  );
};

export default FundYOuMain;
