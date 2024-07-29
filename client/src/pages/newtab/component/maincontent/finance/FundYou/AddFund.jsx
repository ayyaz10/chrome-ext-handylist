import React from "react";

const AddFund = ({ handleChange, inputData, addFund, isFocus }) => {
  return (
    <div className="max-w-[300px] w-full ml-0 mb-4 md:mb-0 md:ml-auto">
      <div>
        <input
          id="fundHeading"
          onChange={handleChange}
          name="amountTitle"
          type="text"
          value={inputData.amountTitle}
          className="tw-input"
          placeholder="Enter amount title"
          autoFocus={isFocus}
        />
      </div>
      <div>
        <input
          id="fundInput"
          onChange={handleChange}
          type="text"
          value={inputData.amount}
          name="amount"
          className="tw-input"
          placeholder="Enter a number (e.g., 0, 10)"
        />
      </div>

      <button onClick={addFund} className="tw-primary-btn ml-auto">
        Submit
      </button>
    </div>
  );
};

export default AddFund;
