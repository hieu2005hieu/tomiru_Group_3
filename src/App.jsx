import React from "react";
import { Outlet, Route, RouterProvider, Routes } from "react-router-dom";
import "./App.css";
import ServiceCustomer from "./page/ServiceCustomer";
import PackageDefault from "./page/PackageDefault";
import Premiummembership from "./page/Premiummembership";
import Paymentconfirmation from "./page/Paymentconfirmation";
import Succes from "./page/Succes";
import Failure from "./page/Failure";
import Navbar from "./components/navbar";
import Wallet from "./components/wallet";

import Message from "./page/Message";
=======
import UpdatePage from "./page/UpdatePage";



export default function App() {
  return (
    <>
      {/* <RouterProvider router={router}/> */} 

      <Routes>

      <Route
          path="/"
          element={
            <div className="flex">
              <Navbar/> <Outlet /> <Wallet />{" "}
            </div>
          }
        >
            <Route path="/" element={<ServiceCustomer/>} />
            <Route path="packageDefault" element={<PackageDefault />} />
            <Route path="premiummembership" element={<Premiummembership />} />
            <Route path="paymentconfirmation" element={<Paymentconfirmation />} />
            <Route path="succes" element={<Succes />} />
            <Route path="failure" element={<Failure />} />
        </Route>
            <Route path = "message" element={<Message />}></Route>

        <Route path="/service" element={<ServiceCustomer />} />
        <Route path="/packageDefault" element={<PackageDefault />} />
        <Route path="/premiummembership" element={<Premiummembership />} />
        <Route path="/Paymentconfirmation" element={<Paymentconfirmation />} />
        <Route path="/Succes" element={<Succes />} />
        <Route path="/Failure" element={<Failure />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/upgrade" element={<UpdatePage />} />

      </Routes>
    </>
  );
}
