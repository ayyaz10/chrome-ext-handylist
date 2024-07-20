import React, { useEffect, useState, useRef } from "react";
import AddFund from "./AddFund";

const FundYou = ({ showFunds, setshowFunds }) => {
  const [inputData, setinputData] = useState({
    amount: "",
    amountTitle: "",
  });
  const [isFocus, setisFocus] = useState(false);
  const [funds, setFunds] = useState([]);
  // const [totalFunds, settotalFunds] = useState(0);
  const [error, setError] = useState("");

  const amountRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "amount") {
      const numValue = Number(value);
      if (!isNaN(numValue)) {
        setinputData((prev) => {
          return { ...prev, [name]: value };
        });
      }
    } else {
      setinputData((prev) => {
        return { ...prev, [name]: value };
      });
    }
  };
  const resetInput = () => {
    setinputData({
      amount: "",
      amountTitle: "",
    });
  };
  const submitFund = () => {
    if (inputData.amount === "" || inputData.amountTitle === "") return;
    resetInput();
    setisFocus(true);
    setFunds([...funds, inputData]);
    // calTotalFunds();
  };

  const totalFunds = funds.reduce((a, b) => {
    return a + Number(b.amount);
  }, 0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case "Enter":
          setisFocus(false);
          setisFocus(true);
          submitFund();
          break;
        case "b":
          if (e.ctrlKey || e.metaKey) {
            // Check for Ctrl key (or Command key on macOS)
            setisFocus(true);
            setshowFunds((prevShowFunds) => !prevShowFunds);
          }
          break;

        default:
          break;
      }
      // if (e.key === "Enter") {
      //   submitFund();
      // }
    };
    window.addEventListener("keydown", handleKeyDown);
  }, [inputData, funds, isFocus]);
  const formattedNumber = (num) => {
    return num.toLocaleString();
  };

  return (
    <div className="flex flex-col-reverse md:flex-row">
      <div className="max-w-[300px] text-text w-full mr-4">
        {error && <p>{error}</p>}
        {totalFunds > 0 ? (
          <div className="flex text-base p-4 border border-secondary">
            <span>Total</span>{" "}
            <span className="ml-auto">Rs{formattedNumber(totalFunds)}</span>
          </div>
        ) : null}
        <ul className="flex flex-col rounded-md bg-secondary">
          {funds &&
            funds.map((fund, i) => (
              <li
                key={i}
                className="flex w-full text-base p-4 border-b border-white"
              >
                <span>{fund.amountTitle}</span>{" "}
                <span className="ml-auto">
                  Rs{formattedNumber(fund.amount)}
                </span>
              </li>
            ))}
        </ul>
      </div>
      {showFunds && (
        <AddFund
          handleChange={handleChange}
          inputData={inputData}
          submitFund={submitFund}
          isFocus={isFocus}
        />
      )}
    </div>
  );
};

export default FundYou;
