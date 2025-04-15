import React, { useState } from "react";

function Dropdown() {
  const countries = [
    {
      country: "USA",
      states: ["California", "Texas", "New York", "Florida", "Illinois"]
    },
    {
      country: "India",
      states: ["Maharashtra", "Karnataka", "Tamil Nadu", "Uttar Pradesh", "Gujarat"]
    },
    {
      country: "Canada",
      states: ["Ontario", "Quebec", "British Columbia", "Alberta", "Manitoba"]
    },
    {
      country: "Australia",
      states: ["New South Wales", "Victoria", "Queensland", "Western Australia", "South Australia"]
    },
    {
      country: "Germany",
      states: ["Bavaria", "Baden-Württemberg", "North Rhine-Westphalia", "Hesse", "Saxony"]
    }
  ];

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");

  const selectedCountryObj = countries.find((c) => c.country === selectedCountry);

  return (
    <div className="hello">
      <label>Select Country: </label>
      <select onChange={(e) => {
        setSelectedCountry(e.target.value);
        setSelectedState(""); // reset state when country changes
      }} value={selectedCountry}>
        <option value="">--Select Country--</option>
        {countries.map((c) => (
          <option key={c.country} value={c.country}>{c.country}</option>
        ))}
      </select>

      <br /><br />

      <label>Select State: </label>
      <select
        value={selectedState}
        onChange={(e) => setSelectedState(e.target.value)}
        disabled={!selectedCountry}
      >
        <option value="">--Select State--</option>
        {selectedCountryObj &&
          selectedCountryObj.states.map((state) => (
            <option key={state} value={state}>{state}</option>
          ))}
      </select>

      <br /><br />

      <p>Selected Country: {selectedCountry}</p>
      <p>Selected State: {selectedState}</p>
    </div>
  );
}

export default Dropdown;

