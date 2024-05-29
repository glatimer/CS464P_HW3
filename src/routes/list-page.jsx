import React from "react";
import Root from "./root";
import useFetchData from "../components/fetchData";

export default function List() {
  const { countries, loading } = useFetchData();
  if (loading) {
    <div>
      <p>Loading...</p>
    </div>;
  }

  return (
    <>
      <div>
        <h1>Countries of Latin America</h1>
        <Root />
        <p>
          This route should show a list of the countries of Latin America, their
          flags, and information about each country.
        </p>

        <main className="container">
          <div className="grid">
            {countries.map((country) => (
              <li key={country.id} className="card">
                <h2>{country.name}</h2>
                <img
                  src={country.flag_png}
                  alt={country.flag_alt}
                  width="100"
                />
                <p>Population: {country.population}</p>
                <p>GDP: {country.gdp_billions} billion</p>
              </li>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
