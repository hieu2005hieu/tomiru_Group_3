import React from "react";
import { NavLink } from "react-router-dom";

export default function Failure() {
  return (
    <>
      <div className="w-[495px] ml-[25px]  border-2 border-solid border-[#dedfe2] h-[220px] flex justify-center   shadow p-[20px] rounded-3xl mt-[200px]">
        <div>
          <h2 className="text-3xl font-bold text-center mt-3">THẤT BẠI</h2>
          <p className="text-center mt-3">
            Không đủ số dư TOMXU để thực hiện <br /> giao dịch. Vui lòng tìm Đại
            lý để mua thêm TOMXU.{" "}
          </p>
          <div className="text-center mb-3">
            {" "}
            <NavLink to='/'>
                <button className="text-black bg-[#f9d874] hover:bg-[#f3c94d]  border border-solid border-black-500 p-[20px] font-bold py-2 px-4 rounded-3xl mt-6 w-[150px]">
                  OK
                </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
