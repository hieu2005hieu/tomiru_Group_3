import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { IoCheckmark } from "react-icons/io5";
import "../utils/Background.css";
import { NavLink } from "react-router-dom";
export default function ServiceCustomer() {
  return (
    <>
    <div className="ml-9 w-[484px] ">
      <div className="flex items-center pl-7 pt-[50px]">
        <MdArrowBackIos />
        <p className="font-bold text-2xl pl-4">Mua gói sử dụng dịch vụ </p>
      </div>
      <div className="flex items-center justify-center ">
        <div className="w-[500px] h-[400px] flex justify-around  items-center">
          <div className=" rounded-lg h-[320px] w-[220px] text-center leading-[35px] border-[4px] border-solid border-[#F4D35D] ">
            <div className="bgimage  rounded-t-none">
              <p> PREMIUM GOLD </p>
              <p className="text-sm">1320 TOMXU </p>
            </div>
            <div className=" px-2 mt-3 ">
              <div className="flex ">
                <span className="ml-2 ">1</span>
                <p className=" w-[180px] text-left pl-5">
                  {" "}
                  Chia sẻ thu nhập{" "}
                </p>{" "}
                <IoCheckmark className=" mt-1" />
              </div>
              <div className="flex">
                <span className="ml-2">2</span>{" "}
                <p className=" w-[180px] text-left pl-5"> Dịch vụ Tom GPT </p>{" "}
                <IoCheckmark className=" mt-1" />
              </div>
              <div className="flex">
                <span className="ml-2">3</span>
                <p className=" w-[180px] text-left pl-5 ">Dịch vụ Tom Avatar</p>{" "}
                <IoCheckmark className=" mt-1" />
              </div>
              <div className="flex">
                <span className="ml-2">4</span>{" "}
                <p className="w-[180px] text-left pl-5"> Dịch vụ Tom Art </p>
                <IoCheckmark className=" mt-1" />
              </div>
              <div className="flex">
                <span className="ml-2">5</span>{" "}
                <p className="w-[180px] text-left pl-5"> Gian hàng riêng</p>
                <IoCheckmark className=" mt-1" />
              </div>
             
            </div>
            <NavLink to="/packageDefault">
                <button className="bgimage mt-4 w-[140px] rounded-2xl font-bold">
                  Mua ngay
                </button>
            </NavLink>
           
          </div>

          <div className=" rounded-lg h-[320px] w-[220px] text-center leading-[35px] border-[4px] border-solid border-[#D3D3D3] ">
            <div className="bgsilver  rounded-t-none">
              <p> PREMIUM GOLD </p>
              <p className="text-sm">1320 TOMXU </p>
            </div>
            <div className=" px-2 mt-3 ">
              <div className="flex ">
                <span className="ml-2 ">1</span>
                <p className=" w-[180px] text-left pl-5">
                  {" "}
                  Chia sẻ thu nhập{" "}
                </p>{" "}
                <IoCheckmark className=" mt-1" />
              </div>
              <div className="flex">
                <span className="ml-2">2</span>{" "}
                <p className=" w-[180px] text-left pl-5"> Dịch vụ Tom GPT </p>{" "}
                <IoCheckmark className=" mt-1" />
              </div>
              <div className="flex">
                <span className="ml-2">3</span>
                <p className=" w-[180px] text-left pl-5 ">Dịch vụ Tom Avatar</p>{" "}
                <IoCheckmark className=" mt-1" />
              </div>
              <div className="flex">
                <span className="ml-2">4</span>{" "}
                <p className="w-[180px] text-left pl-5"> Dịch vụ Tom Art </p>
                <IoCheckmark className=" mt-1" />
              </div>
              <div className="flex">
                <span className="ml-2">5</span>{" "}
                <p className="w-[180px] text-left pl-5"> Gian hàng riêng</p>
                <IoCheckmark className=" mt-1" />
              </div>
             
            </div>
            <NavLink to='/packageDefault'>
                <button className="bgsilver mt-4 w-[140px] rounded-2xl font-bold">
                  Mua ngay
                </button>
            </NavLink>
            
          </div>
          
        </div>
      </div>
    </div>

    </>
  );
}
