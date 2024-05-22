import React from "react";
import { Route, RouterProvider, Routes } from "react-router-dom";
import "./App.css";
import ServiceCustomer from "./page/ServiceCustomer";
import HomePage from "./components/HomePage";
import PackageDefault from "./page/PackageDefault";
import Premiummembership from "./page/Premiummembership";
import Paymentconfirmation from "./page/Paymentconfirmation";
import Succes from "./page/Succes";
import Failure from "./page/Failure";
import Navbar from "./components/navbar";
import Wallet from "./components/wallet";


export default function App() {
  return (
    <>
      {/* <RouterProvider router={router}/> */}
      <Routes>
        <Route path="/service" element={<ServiceCustomer/>} />
        <Route path="/" element={<HomePage />} />
        <Route path="/packageDefault" element={<PackageDefault />} />
        <Route path="/premiummembership" element={<Premiummembership />} />
        <Route path="/Paymentconfirmation" element={<Paymentconfirmation />} />
        <Route path="/Succes" element={<Succes />} />
        <Route path="/Failure" element={<Failure />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/wallet" element={<Wallet />} />
      </Routes>
    </>
  );
}
