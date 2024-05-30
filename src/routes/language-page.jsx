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
  // function duplicates(current) {
  //   if (current === ...duplicate) return false;
  // }
  const duplicate = countries.map((country) => country.official_languages);
  const languages = countries
    .map((country) => country.Languages)
    .filter(duplicates(country.official_languages));

  console.log(languages);
  return (
    <div>
      <Root />

      <h1>Languages of Latin America</h1>
      <ul>
        {languages.map((language, index) => (
          <li key={index}>
            <p>{language}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
