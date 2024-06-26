import React, { useState, useEffect, useRef } from "react";
import { Blocks } from "react-loader-spinner";
import { Ellipsis, X } from "lucide-react";

function QuoteCard() {
  const [loading, setLoading] = useState(false);
  const [quotes, setQuotes] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  const baseUrl = "http://localhost:5555/api/quotes"; // Update to port 6000
  const menuRefs = useRef([]);

  useEffect(() => {
    setLoading(true);
    const fetchQuotes = async () => {
      try {
        const response = await fetch(baseUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          setFetchError("Could not fetch the quotes");
          setQuotes([]);
        } else {
          const data = await response.json();
          setQuotes(data);
          setFetchError(null);
        }
      } catch (error) {
        console.error("Error fetching quotes", error);
        setFetchError("Could not fetch the quotes");
        setQuotes([]);
      } finally {
        setLoading(false);
      }
    };


    // fetchQuotes();


    function handleClickOutside(e) {
      menuRefs.current.forEach((menuRef, index) => {
        if (menuRef && !menuRef.contains(e.target)) {
          setQuotes((prevQuotes) =>
            prevQuotes.map((quote, i) =>
              i === index ? { ...quote, menuShow: false } : quote
            )
          );
        }
      });
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleShowMenu = (index) => {
    setQuotes((prevQuotes) =>
      prevQuotes.map((quote, i) =>
        i === index
          ? { ...quote, menuShow: true }
          : { ...quote, menuShow: false }
      )
    );
  };

  const handleHideMenu = (index) => {
    setQuotes((prevQuotes) =>
      prevQuotes.map((quote, i) =>
        i === index ? { ...quote, menuShow: false } : quote
      )
    );
  };

  return (
    <div className="max-w-6xl m-auto bg-zinc-900 p-4 rounded-lg mt-4 relative">
      {loading && (
        <p className="flex justify-center">
          <Blocks
            height="30"
            width="30"
            color="#4fa94d"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            visible={true}
          />
        </p>
      )}
      {fetchError && <p className="text-red-500">{fetchError}</p>}
      {quotes.map((quote, index) => (
        <div key={quote.quoteId} className=" relative">
          <div className="bg-zinc-800 text-sm rounded-lg p-3 flex mb-4">
            <p className="w-[90%] text-zinc-500 ">{quote.quoteText}</p>
            <Ellipsis
              className="ml-auto top-0 right-0 cursor-pointer"
              onClick={() => handleShowMenu(index)}
            />
          </div>
          {quote.menuShow && (
            <div
              className="custom-card-menu-style z-10 absolute -right-44 top-0 text-zinc-500 bg-zinc-900"
              ref={(el) => (menuRefs.current[index] = el)}
            >
              <header className="w-[250px] relative text-xs pb-2">
                <h2 className="text-center">List Actions</h2>
                <X
                  className="absolute top-0 right-[8px] w-[16px] h-[16px] cursor-pointer hover:bg-zinc-800 hover:rounded-sm"
                  onClick={() => handleHideMenu(index)}
                />
              </header>
              <div className="flex flex-col">
                <li className="text-xs font-semibold text-zinc-500 cursor-pointer py-1 px-3 list-none hover:bg-zinc-800">
                  Set Quote
                </li>
                <li className="text-xs font-semibold text-zinc-500 cursor-pointer py-1 px-3 list-none hover:bg-zinc-800">
                  Edit
                </li>
                <li className="text-xs font-semibold text-zinc-500 cursor-pointer py-1 px-3 list-none hover:bg-zinc-800">
                  Delete
                </li>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default QuoteCard;
