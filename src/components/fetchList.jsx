import axios from "axios";
import { useState, useEffect } from "react";

export default function fetchList() {
  const url = "https://cs464p564-frontend-api.vercel.app/api/countries";

  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState([]); // list of countries

  // list of languages
  // population chart data

  useEffect(() => {
    setLoading(true);

    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setCountry(response.data);
        setLoading(false);
      })
      .catch((error) => console.error(error.message));
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
          <h2>Data from the API</h2>
          <p>Country: {country.name}</p>
          {/* <p>Flag:</p>
          <img src={country.flad_png} alt={country.flag_alt} /> */}
          <p>Population: {country.population} </p>
          {/* might need to iterate through array of lang */}
          <p>Official Languages: {country.official_languages}</p>
          <p>Gross Domestic Product (GDP): {country.gdp_billions} billion</p>
        </div>
      )}
    </div>
  );
}
