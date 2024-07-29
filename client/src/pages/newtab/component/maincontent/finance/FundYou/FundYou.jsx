import React, { useEffect, useState, useRef } from "react";
import AddFund from "./AddFund";
import moment from "moment";

import useFetch from "../../../../../../hooks/useFetch";

const FundYou = ({ showFunds, setshowFunds }) => {
  let date = new Date();
  const [inputData, setinputData] = useState({
    amount: "",
    amountTitle: "",
  });

  const [isFocus, setisFocus] = useState(false);
  const [funds, setFunds] = useState([]);
  // const [totalFunds, settotalFunds] = useState(0);
  const [error, setError] = useState("");
  const [currentData, setCurrentData] = useState([]);
  const { data, loading, error: fetchError, fetchData } = useFetch(funds);

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
  const addFund = () => {
    console.log("helo ");
    if (inputData.amount === "" || inputData.amountTitle === "") return;
    const currentDateTime = moment().format("YYYY-MM-DD");

    setFunds((prevFunds) => {
      const existingFundIndex = prevFunds.findIndex(
        (fund) => fund.date === currentDateTime
      );
      console.log(existingFundIndex);

      if (existingFundIndex > -1) {
        // If a fund with the current date exists, update its items array
        const updatedFunds = [...prevFunds];
        console.log(updatedFunds);
        updatedFunds[existingFundIndex].items = [
          ...updatedFunds[existingFundIndex].items,
          { ...inputData },
        ];
        return updatedFunds;
      } else {
        // If no fund with the current date exists, add a new fund entry
        return [
          ...prevFunds,
          {
            date: currentDateTime,
            items: [{ ...inputData }],
          },
        ];
      }
    });
    // submitFunds();
    // groupDataByDate();
    const groupedData = groupBy(datas, "date");
    console.log(groupedData);
    setCurrentData(groupedData);
    resetInput();
    setisFocus(true);
  };

  const totalFunds = funds[0]?.items.reduce((a, b) => {
    return a + Number(b.amount);
  }, 0);

  async function submitFunds() {
    try {
      const data = await fetchData(
        "http://localhost:5000/api/addFunds",
        "PUT",
        funds,
        funds
      );
      console.log(data);
    } catch (error) {
      console.error("Error submitting funds:", error);
      setError("Failed to submit funds. Please try again.");
    }
  }

  // const datas = [
  //   { date: "25th may", name: "ayyaz" },
  //   { date: "25th may", name: "mufleh" },
  //   { date: "25th may", name: "danial" },
  //   { date: "26th may", name: "alia" },
  // ];
  // let previousDate = "";

  // datas.forEach((data) => {
  //   if (data.date !== previousDate) {
  //     console.log("Date:", data.date);
  //     previousDate = data.date;
  //   }
  //   console.log(data.name);
  // });

  // const groupBy = (array, key) => {
  //   return array.reduce((result, currentValue) => {
  //     (result[currentValue[key]] = result[currentValue[key]] || []).push(
  //       currentValue
  //     );
  //     return result;
  //   }, {});
  // };

  useEffect(() => {
    console.log(currentData);
    console.log(funds);
    const handleKeyDown = (e) => {
      switch (e.key) {
        case "Enter":
          setisFocus(false);
          setisFocus(true);
          addFund();
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
      //   addFund();
      // }
    };
    console.log(funds);
    window.addEventListener("keydown", handleKeyDown);
  }, [inputData, funds, isFocus]);
  const formattedNumber = (num) => {
    console.log(num);
    return num.toLocaleString();
  };

  return (
    <div className="flex flex-col-reverse md:flex-row">
      {/* <div>
        {Object.entries(groupedData).map(([date, data]) => (
          <div key={date}>
            <h2>{date}</h2>
            <ul>
              {data.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div> */}
      <div className="max-w-[300px] text-text w-full mr-4">
        {error && <p>{error}</p>}
        {totalFunds > 0 ? (
          <div className="flex text-base p-4 border border-secondary">
            <span>Total</span>
            <span className="ml-auto">Rs{formattedNumber(totalFunds)}</span>
          </div>
        ) : null}
        <ul className="flex flex-col rounded-md bg-secondary">
          {funds &&
            funds.map((fund, i) => (
              <li
                key={i}
                className="flex flex-col w-full text-base p-4 border-b border-white"
              >
                <span className="text-white">
                  {moment(fund.date).format("dddd, YYYY-MM-DD")}
                </span>
                {fund.items.map((item, j) => (
                  <div key={j} className="flex w-full">
                    <span>{item.amountTitle}</span>
                    <span className="ml-auto">
                      Rs{formattedNumber(item.amount)}
                    </span>
                  </div>
                ))}
              </li>
            ))}
        </ul>
      </div>
      {showFunds && (
        <AddFund
          handleChange={handleChange}
          inputData={inputData}
          addFund={addFund}
          isFocus={isFocus}
        />
      )}
    </div>
  );
};

export default FundYou;
