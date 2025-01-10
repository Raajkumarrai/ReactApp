import React, { useState, useEffect } from "react";

const Country = (props) => {
  const myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "grey" : "white",
  };
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 21;

  const totalPages = Math.ceil(countries.length / itemsPerPage);

  const handleLeftClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleRightClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/all`);
        const data = await response.json();
        const formattedData = data.map((country) => ({
          name: country.name.common,
          flag: country.flags.svg,
        }));
        setCountries(formattedData);
        console.log(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCountries = countries.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div style={myStyle}>
      <h1>Country</h1>
      <p>
        Here you can see the list of countries and their flags from the REST
        API.
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {currentCountries.map((country, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              textAlign: "center",
              borderRadius: "5px",
              width: "150px",
              height: "160px",
            }}
          >
            <img
              src={country.flag}
              alt={`${country.name} flag`}
              style={{ width: "100%", height: "100px", objectFit: "cover" }}
            />
            <p>{country.name}</p>
          </div>
        ))}
      </div>
      <div
        className="mt-3 p-0container d-flex justify-content-between
      "
      >
        <button
          type="button"
          class="btn btn-primary"
          onClick={handleLeftClick}
          disabled={currentPage === 1}
        >
          &larr; Previous
        </button>
        <span className="align-self-center">
          Page {currentPage} of {totalPages}
        </span>
        <button
          type="button"
          class="btn btn-primary"
          onClick={handleRightClick}
          disabled={currentPage === totalPages}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

export default Country;
