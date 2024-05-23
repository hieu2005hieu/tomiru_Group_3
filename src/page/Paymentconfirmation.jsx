import React from "react";
import { NavLink } from "react-router-dom";

export default function Paymentconfirmation() {
  return (
    <>
      <div className="w-[495px] h-[220px] ml-[25px]  border-2 border-solid border-[#dedfe2] p-[20px] rounded-2xl mt-[200px] text-center ">
        <h2 className="text-2xl font-bold">XÁC NHẬN THANH TOÁN</h2>
        <p className="mt-[20px]">Thanh toán 1320 TOMXU cho gói thành viên?</p>
        <div className="mt-[20px] flex justify-center align-center gap-3 mb-7">
          <NavLink to='/failure'>
            <button className="text-black bg-[#ffffff] border border-solid border-black-500 p-[20px] font-bold py-2 px-4 rounded-3xl mt-6 w-[150px] pl-[20px] pr-[20px]">
              HỦY
            </button>
          </NavLink>
         
          <NavLink to='/succes'>
              <button className="text-black bg-[#FFD24A] hover:bg-[#f9d874] font-bold py-2 px-4 rounded-3xl mt-6 w-[150px]">
                XÁC NHẬN
              </button>
          </NavLink>
          
        </div>
      </div>
    </>
  );
}
