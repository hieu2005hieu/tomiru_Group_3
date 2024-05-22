import React from 'react'
import { BiBrain, BiSearch, BiSolidBell } from 'react-icons/bi'
import { BsThreeDots } from 'react-icons/bs'
import { FaRegUserCircle } from 'react-icons/fa'
import { FaRegCircleUser, FaRegMessage } from 'react-icons/fa6'
import { IoShareSocialOutline } from 'react-icons/io5'
import { LuShoppingCart } from 'react-icons/lu'
import { RiHomeLine, RiRoadMapLine } from 'react-icons/ri'

export default function navbar() {
    return (
        <div className='w-[15%]'>
            <div>
                <img className='w-[130px]' src="https://app.tomiru.com/assets/logo-f88d9dda.png" alt="" />
            </div>
            <div className='mt-5'>
                <ul className='text-lg'>
                    <li className='flex gap-2 items-center mt-2'>
                        <RiHomeLine size={20} />
                        <h2 className='font-bold ml-2' >Trang chủ</h2>
                    </li>
                    <li className='flex gap-2 items-center mt-2'>
                        <BiSolidBell size={20} />
                        <h2 className='m-2'>Thông báo</h2>
                    </li>
                    <li className='flex gap-2 items-center mt-2'>
                        <FaRegMessage size={20} />
                        <h2 className='m-2'>Tin nhắn <span className=' border border-1 bg-[#F44336] text-white rounded-xl px-[5px] ml-8'>5</span></h2>
                    </li>
                    <li className='flex gap-2 items-center mt-2'>
                        <BiBrain size={20} />
                        <h2 className='m-2'>Gói thành viên</h2>
                    </li>
                    <li className='flex gap-2 items-center mt-2'>
                        <IoShareSocialOutline size={20} />
                        <h2 className='m-2'>Mạng lưới</h2>
                    </li>
                    <li className='flex gap-2 items-center mt-2'>
                        <LuShoppingCart size={20} />
                        <h2 className='m-2'>Cửa hàng</h2>
                    </li>
                    <li className='flex gap-2 items-center mt-2'>
                        <RiRoadMapLine size={20} />
                        <h2 className='m-2'>Bản đồ</h2>
                    </li>
                    <li className='flex gap-2 items-center mt-2'>
                        <BiSearch  size={20} />
                        <h2 className='m-2'>Tìm kiếm</h2>
                    </li>
                    <li className='flex gap-2 items-center mt-2'>
                        <FaRegUserCircle size={20} />
                        <h2 className='m-2'>Trang cá nhân</h2>
                    </li>
                </ul>
            </div>

            <div className='mt-[60px]'>
                <button className='w-[226px] border border-1 bg-[#FFD24B] text-lg font-bold rounded-[40px] px-[40px] py-[10px]'>Đăng bài</button>
            </div>

            <div className='mt-3 flex gap-[100px] items-center w-[226px]'>
                <div className='max-w-[100px] flex gap-3 items-center'>
                    <p><FaRegCircleUser size={35} /></p>
                    <div>
                        <h2 className='font-bold w-[100px]'>Nguyễn Văn A</h2>
                        <p className='text-sm'>@NguyenVanA</p>
                    </div>
                </div>
                <p><BsThreeDots /></p>
            </div>
        </div>
    )
}
