import React from "react";
import { Route, RouterProvider, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import Navbar from "./components/navbar";
import Wallet from "./components/wallet";

export default function App() {
  return (
    <>
      {/* <RouterProvider router={router}/> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/wallet" element={<Wallet />} />
      </Routes>
    </>
  );
}
