import React from "react";
import { useState } from "react";
import axios from "axios";
import { CountryDropdown } from 'react-country-region-selector';

function CountryList() {
  const [country, setCountry] = useState('');

  const postData = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/setCurrency", {
      country
    }).then((res) => {
    });


  }


  return (
    <div>
      <form onSubmit={postData}>
        <CountryDropdown
          value={country}
          onChange={(val) => setCountry(val)} />
        <button type="submit">submit</button>
      </form>

    </div>
  );
}

export default CountryList;
