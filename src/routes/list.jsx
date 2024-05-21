import React from "react";
import Navbar from "../components/navbar";

export default function Population() {
  return (
    <div>
      <h1>Countries of Latin America</h1>
      <Navbar />
      <p>
        This route should show a list of the countries of Latin America, their
        flags, and information about each country. This data comes from the API.
      </p>
    </div>
  );
}
