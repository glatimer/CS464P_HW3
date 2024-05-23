import React from "react";
import Root from "./root";
import useFetchData from "../components/fetchData";
export default function Languages() {
  const { countries, loading } = useFetchData();
  if (loading) {
    <div>
      <p>Loading...</p>
    </div>;
  }

  // map through the api making an array of official_languages, no duplicates

  const languages = countries.map((country) => country.population);
  return (
    <div>
      <h1>Languages of Latin America</h1>
      <Root />
    </div>
  );
}
