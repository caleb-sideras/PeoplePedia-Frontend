import React, { useState, useEffect } from "react";

interface SearchProps {
  data: string | null;
  onDataChange: (newData: string) => void;
}

export default function SearchBar(props: SearchProps) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError]= useState("");
  const { data, onDataChange } = props;

  useEffect(() => {
    setLoading(false);
  }, [data]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setQuery(value);
  };

  const handleButtonClick = () => {
    if (!query.trim()) {
      setError("Please enter a search term.");
      return;
    }
    
    setLoading(true);
    const data: { query: string } = {
      query: query,
    };

    const requestOptions: RequestInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    fetch("https://getme.herokuapp.com/query", requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw (response);
        }
        else{
          return response.json()
        }
      })
      .then((data) => {
        setLoading(false);
        setError("")
        onDataChange(JSON.stringify(data));
      })
      .catch((error) => {
        setLoading(false);
        if (error instanceof Response) {
          if (error.status === 400) {
            error.json().then((jsonError: any) => {
              console.log(jsonError);
              setError(jsonError)
            });
          }
        }
        else if (error instanceof Request) {
          console.error(error);
        } else {
          console.error("Error", error.message);
        }
      });
  };

  const handleEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleButtonClick();
    }
  };

  return (
    <>
    <div className="flex items-center bg-white rounded-full w-full shadow-md p-2 px-4">
      <input
        type="text"
        maxLength={25}
        className=" w-full ml-2 outline-none text-gray-800 placeholder-gray-500 font-medium text-lg rounded-lg focus:ring-indigo-600 focus:border-indigo-600 border-transparent transition duration-[300ms]"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleEnterPress} // Add onKeyPress event to handleEnterPress function
      />
      <button
        type="button"
        className={`ml-auto px-[16px] py-[8px] bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-[800] rounded-full shadow-md text-white font-medium text-base transition duration-[300ms] ${loading ? "opacity-50 cursor-not-allowed" : ""
          }`} // Disable button and change its appearance when loading
        onClick={handleButtonClick}
        disabled={loading} // Disable button when loading
      >
        {loading ? (
          <svg
            className="animate-spin h-5 w-5 m-auto"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg> 
        ) : (
          "Search" 
        )}
      </button> 
    </div>
    <div className="text-orange-400 text-xl text-start mt-2">{error}</div>
    </>
  )
}