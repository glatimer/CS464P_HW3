import axios from "axios";
import { useState, useEffect } from "react";

export default function useFetchData() {
  const url = "https://cs464p564-frontend-api.vercel.app/api/countries";

  const [loading, setLoading] = useState(true);
  const [countries, setCountry] = useState([]);

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
  return { countries, loading };
}
