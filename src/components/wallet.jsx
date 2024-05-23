import React from 'react'
import { BiHide } from 'react-icons/bi'
import { GoArrowUpRight } from 'react-icons/go'
import { HiArrowDownTray, HiMiniArrowUpRight } from 'react-icons/hi2'
import { PiArrowsOutSimpleBold } from 'react-icons/pi'
import { RxCountdownTimer } from 'react-icons/rx'


export default function wallet() {
    return (
        <div className='w-[18%] ml-[30px] border-l-2 border-solid border-[#e4e6e8] '>
           <div className='ml-7'>
                <div className='flex'>
                    <h2 className='font-bold text-[16px]'>TOMXU</h2>
                    <img className='w-[20px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSSx0z5kB-8FREEzunMxrzXcbaqKm4S0th1ZsMJetS-w&s" alt="" />
                </div>
                <div className='flex items-center gap-[100px]'>
                    <p className='text-[32px]'>1,123.12</p>
                    <p><BiHide size={30} /></p>
                </div>
                <div className='flex items-center mt-5'>
                    <h2 className='font-bold text-[16px]'>pTOMXU</h2>
                    <img className='w-[20px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSSx0z5kB-8FREEzunMxrzXcbaqKm4S0th1ZsMJetS-w&s" alt="" />
                    <p className='ml-2 text-[#0F1419] text-[13px]'>(Chi tiết)</p>
                </div>
                <div className='flex items-center gap-[100px]'>
                    <p className='text-[32px]'>1,123.12</p>
                    <p><BiHide size={30} /></p>
                </div>

                <div className='flex gap-2 mt-4'>
                    <div className=''>
                        <button className='flex items-center justify-center w-[116px] px-[25px] py-[10px] text-[14px] rounded-[40px] border border-1 bg-[#0F1419] text-[#E8D6A1] '>Chuyển
                            <p className='ml-2'> <HiMiniArrowUpRight className='text-[#E8D6A1]' size={15} /> </p>
                        </button>
                    </div>
                    <div className=''>
                        <button className='flex items-center justify-center w-[116px] px-[25px] py-[10px] text-[14px] rounded-[40px] border border-1 bg-[#0F1419] text-[#E8D6A1] '>Nhận
                            <p className='ml-2'> <HiArrowDownTray className='text-[#E8D6A1]' size={15} /></p>
                        </button>
                    </div>
                </div>
           </div>

           {/* <hr className='mt-8 text-[#A1A1A1]' /> */}
           <p className='w-full h-[1px] bg-[#A1A1A1] mt-6 ml-5'></p>

            <div className='mt-6 ml-8'>
                <div className='flex items-center gap-5 border-2 border-solid border-[#A1A1A1] rounded-3xl p-2 cursor-pointer'>
                    <RxCountdownTimer className='text-[#0F1419] ml-2 ' size={18} />
                    <button className='text-[20px] rounded-[40px] text-[#0F1419] font-serif'>Lịch sử giao dịch</button>
                </div>
                <div className='flex items-center gap-5 border-2 border-solid border-[#A1A1A1] rounded-3xl p-2 bg-[#FFF9E5] mt-4 cursor-pointer '>
                    <PiArrowsOutSimpleBold  className='text-[#0F1419] ml-2 ' size={18} />
                    <button className='text-[20px] rounded-[40px] border-2 text-[#0F1419] font-serif  '>Đại lý</button>
                </div>
            </div>


        </div>
    )
}
