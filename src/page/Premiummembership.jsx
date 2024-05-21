import React from "react";

export default function Premiummembership() {
  return (
    <>
      <div className="w-[500px] mx-auto flex justify-center align-center  shadow p-[20px] rounded-3xl mt-[70px]">
        <div className="text-center mt-[20px]">
          <h2 className="text-3xl font-bold">GÓI THÀNH VIÊN CAO CẤP</h2>
          <div className="mt-[20px] w-[260px]  mx-auto text-2xl bg-[#F0C428] rounded-3xl font-medium ">
            1320 TOMXU
          </div>
          <div className="mt-[40px] flex ">
            <p
              className="w-[50px] bg-[#A1A1A1] h-0.5 mt-3 mr-6"
            ></p>
            <p className="text-xl font-bold"> Các tính năng đặc quyền</p>
            <p
              className="w-[50px] bg-[#A1A1A1] h-0.5 mt-3 ml-6"
            ></p>
          </div>
          <div className="mt-[20px] text-left w-[350px]  mx-auto ">
            <li>Cơ chế chia sẻ thu nhập không giới hạn</li>
            <li className="mt-[10px]">Dịch vụ AI Chat GPT không giới hạn.</li>
            <li className="mt-[10px]">
              Dịch vụ AI Image Generation không giới hạn.
            </li>
            <li className="mt-[10px]">
              Tạo gian hàng riêng trên hệ sinh thái Tomiru
            </li>
            <li className="mt-[10px]">Các dịch vụ khác trong tương lai</li>
          </div>
          <div className="mt-[30px] flex justify-center align-center gap-3 mb-7">
            <button className="text-black bg-[#ffffff] border border-solid border-black-500 p-[20px] font-bold py-2 px-4 rounded-3xl mt-6 w-[150px] pl-[20px] pr-[20px] ">
              QUAY LẠI
            </button>
            <button className="text-black bg-[#FFD24A] hover:bg-[#f9d874] font-bold py-2 px-4 rounded-3xl mt-6 w-[150px] pl-[20px] pr-[20px]">
              MUA GÓI
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
