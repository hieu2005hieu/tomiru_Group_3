import React from 'react'
import Logo from '../../public/Logo (1).png'
import back from '../../public/Group 427320626.png'

export default function UpdatePage() {
    return (
        <div className='grid grid-cols-2 ml-10'>
            <div>
                <div className='mt-[60px]'>
                    <img className='w-[180px] h-[50px] m-auto object-cover' src={Logo} alt="" />
                </div>
                <div className='mt-5'>
                    <h2 className='font-bold text-[40px] text-[#0F1419] text-center font-sans '>Thông báo bảo trì hệ thống</h2>
                </div>
                <div className='text-center text-lg font-normal mt-5'>
                    <p className='text-[#474747]'>Thân gửi cộng đồng Tomiru,</p>
                    <p className='text-[#474747] mt-5'>Nhằm nâng cao hiệu năng Tomiru, đội ngũ kỹ thuật sẽ</p>
                    <p className='text-[#474747]'>thực hiện bảo trì và hoàn thiện thêm nhưng tính năng mới.</p>
                </div>
                <div className='w-[650px] h-[40px] bg-[#F9B00D] m-auto mt-10 rounded-3xl'>
                    <h2 className='font-bold text-2xl py-1 text-[#0F1419] text-center font-sans'> Thời gian dự kiến: 22:00 - 00:00 ngày 07/11/2023.</h2>
                </div>

                <div className='text-center text-[#474747] text-lg font-[400px]'>
                    <p className='mt-4'>
                        Trong khoảng thời gian này, người dùng sẽ không truy cập được vào app.tomiru.com.
                    </p>
                    <p className='font-bold'>Lưu ý: <span className='text-[#474747] font-medium'>Việc bảo trì lần này sẽ tạo thuận lợi và khác biệt nhất để thành viên TOMIRU hỗ trợ,</span></p>
                    <p>giúp đỡ nhau cùng nhau thành công</p>
                    <p>Hãy cùng TOMIRU tỏa sáng và tạo nên sự khác biệt.</p>
                    <p>Kính mong quý cộng đồng thông cảm,</p>
                    <p className='mt-5'>Trân trọng,</p>
                    <p>Đội ngũ Tomiru.</p>
                </div>

            </div>
            <div>
                <div className='w-full h-[700px]' style={{ backgroundImage: `url(${back})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} >

                </div>
            </div>
        </div>
    )
}
