import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Root from "./routes/root.jsx";
import "./index.css";
import ErrorPage from "./routes/error-page.jsx";
import Home from "./routes/home-page.jsx";
import Population from "./routes/population-page.jsx";
import Languages from "./routes/language-page.jsx";
import List from "./routes/list-page.jsx";
import "bootstrap/dist/css/bootstrap.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "list/",
    element: <List />,
  },
  {
    path: "home/",
    element: <Home />,
  },
  {
    path: "population/",
    element: <Population />,
  },
  {
    path: "languages/",
    element: <Languages />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
