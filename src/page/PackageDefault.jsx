import React from "react";
import { AiFillClockCircle } from "react-icons/ai";
export default function PackageDefault() {
  return (
    <>
      <div>
        <div className="text-center mt-[20px]">
          <h2 className="text-3xl font-bold">Gói - Default</h2>
          <div className="flex items-center justify-center mt-[10px] ">
            <AiFillClockCircle />
            <p>Thời hạn sử dụng 03 : 12 : 24 : 60</p>
          </div>
          <button className="text-black bg-[#FFD24A] hover:bg-[#f9d874] font-bold py-2 px-4 rounded-3xl mt-6 w-[270px] pl-[20px] pr-[20px] ">
            Nâng cấp lên Gói Thành viên
          </button>
        </div>
        <div className="mt-[30px] w-[700px]  h-[210px] mx-auto flex justify-center align-center shadow p-[20px] gap-[130px] rounded-3xl">
          <div>
            <h2 className="text-3xl font-bold">Chat GPT</h2>
            <p className="mt-2">
              Trợ lý biết tuốt giải đáp <br /> mọi thắc mắc của bạn
            </p>
            <button className="text-black bg-[#FFD24A] hover:bg-[#f9d874] font-bold py-2 px-4 rounded-3xl mt-3  w-[173px] pl-[30px] pr-[30px]">
              Sử dụng ngay
            </button>
          </div>
          <div className="flex">
            <div>
              <img src="../../public/AI_1 1.png" alt="" />
            </div>
            <div>
              <img src="../../public/ChatGPT.png" alt="" />
            </div>
          </div>
        </div>
        <div className="mt-[30px]  w-[700px] h-[210px] mx-auto flex justify-center align-center  shadow p-[20px] rounded-3xl">
          <div>
            <h2 className="text-3xl font-bold">Image Generation</h2>
            <p className="mt-2">
              Biến giấc mơ của bạn thành hiện
              <br /> thực bằng phép thuật mang tên AI
            </p>
            <button className="text-black bg-[#FFD24A] hover:bg-[#f9d874] font-bold py-2 px-4 rounded-3xl mt-3 w-[173px] pl-[30px] pr-[30px]">
              Sử dụng ngay
            </button>
          </div>
          <div>
            <img src="../../public/Group.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
