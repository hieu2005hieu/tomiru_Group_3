import React from "react";
import { AiFillClockCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";
export default function PackageDefault() {
  return (
    <>
      <div className="ml-5  ">
        <div className="text-center mt-[20px] ">
          <h2 className="text-2xl font-bold">Gói - Default</h2>
          <div className="flex items-center justify-center mt-[10px] "> 
            <AiFillClockCircle />
            <p>Thời hạn sử dụng 03 : 12 : 24 : 60</p>
          </div>
          <NavLink to='/premiummembership'>
              <button className="text-black text-sm bg-[#FFD24A] hover:bg-[#f9d874] font-bold py-2 px-4 rounded-3xl mt-6 w-[240px] pl-[20px] pr-[20px] ">
                Nâng cấp lên Gói Thành viên
              </button>
          </NavLink>
         
        </div>
        <div className="mt-[30px] w-[500px]  h-[200px] flex justify-center align-center shadow p-[20px] gap-[100px] rounded-3xl">
          <div>
            <h2 className="text-3xl font-bold">Chat GPT</h2>
            <p className="mt-2 text-sm">
              Trợ lý biết tuốt giải đáp <br /> mọi thắc mắc của bạn
            </p>
            <button className="text-black bg-[#FFD24A] hover:bg-[#f9d874] font-bold py-2 px-4 rounded-3xl mt-3  w-[173px] pl-[30px] pr-[30px]">
              Sử dụng ngay
            </button>
          </div>
          <div className="flex">
            <div className=" w-[120px]">
              <img src="../../public/AI_1 1.png" alt="" />
            </div>
            <div>
              <img src="../../public/ChatGPT.png" alt="" />
            </div>
          </div>
        </div>
        <div className="mt-[30px]  w-[500px] h-[200px] mx-auto flex justify-between align-center  shadow p-[20px] rounded-3xl">
          <div>
            <h2 className="text-3xl font-bold">Image Generation</h2>
            <p className="mt-2 text-sm">
              Biến giấc mơ của bạn thành hiện
              <br /> thực bằng phép thuật mang tên AI
            </p>
            <button className="text-black bg-[#FFD24A] hover:bg-[#f9d874] font-bold py-2 px-4 rounded-3xl mt-3 w-[173px] pl-[30px] pr-[30px]">
              Sử dụng ngay
            </button>
          </div>
          <div className="w-[200px] ">
            <img src="../../public/Group 1 1.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
