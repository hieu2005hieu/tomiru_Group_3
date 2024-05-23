import React from 'react'
import { HiPencilSquare } from "react-icons/hi2";
import Navbar from '../components/navbar';
import { LuSearch } from "react-icons/lu";
export default function Message() {
  return (
    <>
        <div className='flex'>
            <Navbar></Navbar>
            <div>
                <div className='w-[320px] bg-rose-200'>
                    <span className='flex justify-between   '>
                        <h1 className='ml-2 text-xl font-bold'>  Tin nhắn </h1> 
                        <HiPencilSquare className='mr-2 mt-1' />
                    </span>
                    <div className='flex border border-solid border-[#cecfd2] w-[280px] ml-4 h-[45px] mt-3 rounded-3xl '>
                        <LuSearch className='mt-3 ml-3' />
                        <input className='ml-3 mt-[6px] h-[30px] outline-none' type="text" placeholder='Tìm kiếm trong tin nhắn' />
                    </div>
                    <div className='flex justify-around mt-2'>
                        <p>Tất cả</p>
                        <p>Nhóm</p>
                        <p>Mọi người</p>
                    </div>
                    <div className='mt-5 bg-blue-200 h-[70px]' >
                        <div>
                            <div className='flex'>
                                <img className='ml-3 rounded-[50px] w-[55px] ' src="../../public/image.png" alt="" />
                                <div>
                                    <p>Tomiru</p>
                                    <p>Ngày hôm nay của du thiên ...</p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
    
    </div>
       
    </>
  )
}
