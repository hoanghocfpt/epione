import Link from 'next/link'

const RegisterPage = () => {

    return (
        <div>
            <div className='flex items-center py-[8px] max-w-screen-2xl mx-auto px-8 bg-[#f0f0f0]'>
                <Link href='/' className='leading-none'>
                    <span className='text-xs text-[#282828]'>Trang chủ</span>
                </Link>
                <svg xmlns='http://www.w3.org/2000/svg' width={12} height={12} viewBox='0 0 24 24'><path fill='none' stroke='currentColor' d='m9 6l6 6l-6 6'></path></svg>
                <span className='text-xs text-[#282828]'>Tạo tài khoản</span>
            </div>
            <div className='w-[480px] mx-auto p-[28px] border rounded-xl mt-12 mb-8'>
                <h2 className='text-[24px] font-bold text-center'>Đăng ký tài khoản</h2>
                <div className='flex flex-col gap-1 mt-[20px]'>
                    <label className='text-[#929292] text-sm'>Tên của bạn</label>
                    <input className='border border-[#2828281a] hover:border-[#10069f] focus-visible:outline-[#10069f] p-[11px] h-[44px] rounded-md' placeholder='Tên của bạn' type='text' />
                </div>
                <div className='flex flex-col gap-1 mt-[20px]'>
                    <label className='text-[#929292] text-sm'>Tên của bạn</label>
                    <input className='border border-[#2828281a] hover:border-[#10069f] focus-visible:outline-[#10069f] p-[11px] h-[44px] rounded-md' placeholder='Tên của bạn' type='text' />
                </div>
                <div className='flex flex-col gap-1 mt-[20px]'>
                    <label className='text-[#929292] text-sm'>Tên của bạn</label>
                    <input className='border border-[#2828281a] hover:border-[#10069f] focus-visible:outline-[#10069f] p-[11px] h-[44px] rounded-md' placeholder='Tên của bạn' type='text' />
                </div>
                <div className='flex flex-col gap-1 mt-[20px]'>
                    <label className='text-[#929292] text-sm'>Tên của bạn</label>
                    <input className='border border-[#2828281a] hover:border-[#10069f] focus-visible:outline-[#10069f] p-[11px] h-[44px] rounded-md' placeholder='Tên của bạn' type='text' />
                </div>
                <div className='flex flex-col gap-1 mt-[20px]'>
                    <button className='bg-[#10069f] text-white p-[11px] outline outline-offset outline-transparent rounded-md hover:outline-[#10069f]'>Tạo tài khoản</button>
                </div>
                <div className='flex justify-center mt-[20px]'>
                    <Link href={'/account/login'} className='text-sm text-[#10069f] underline underline-offset-2 text-center'>Đăng nhập</Link>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage