import React from "react";
import { Route, RouterProvider, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./page/HomePage";
import ServiceCustomer from "./page/ServiceCustomer";
export default function App() {
  return (
    <>
      {/* <RouterProvider router={router}/> */}
      <Routes>
        <Route path="/service" element={<ServiceCustomer/>} />
      </Routes>
    </>
  );
}
