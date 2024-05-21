import React from "react";
import { Route, RouterProvider, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";

export default function App() {
  return (
    <>
      {/* <RouterProvider router={router}/> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}
