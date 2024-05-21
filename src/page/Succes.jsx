import React from "react";

export default function Succes() {
  return (
    <>
      <div className="w-[500px] mx-auto flex justify-center align-center  shadow p-[20px] rounded-3xl mt-[200px]">
        <div>
          <h2 className="text-3xl font-bold text-center mt-3">THÀNH CÔNG</h2>
          <p className="text-center mt-3">
            Hãy khám phá các tiện ích <br /> đặc quyền thành viên của bạn.
          </p>
          <div className="text-center mb-3">
            <button className="text-black bg-[#f9d874] hover:bg-[#f3c94d]  border border-solid border-black-500 p-[20px] font-bold py-2 px-4 rounded-3xl mt-6 w-[150px]">
              OK
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
