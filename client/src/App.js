import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { PageNotFound } from "./components/PageNotFound";
import PlaceOrderForm from './components/PlaceOrderForm.js'


const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="body-container">
        <Outlet />
      </div>
    </div>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/PlaceOrderForm/:_id", element: <PlaceOrderForm /> },
   
    
    ],
    errorElement: <PageNotFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
