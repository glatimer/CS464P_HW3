import axios from "axios";
import { useState, useEffect } from "react";

export default function fetchData() {
  const url = "https://cs464p564-frontend-api.vercel.app/api/countries";

  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState({}); // list of countries

  // list of languages
  // population chart data

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setLoading(true);
        console.log(response.data);
        setCountry(response.data);
        setLoading(false);
      })
      .catch((error) => console.error(error.message));
  }, []);
  return (
    <div>
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
          {/* <h2>Data from the API</h2>
          <p>Pokemon ID: {pokemon.id}</p>
          <p>Name: {pokemon.name}</p>
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p> */}
        </div>
      )}
    </div>
  );
}
