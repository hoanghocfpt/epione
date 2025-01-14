
const Drawer = ({isOpen, onClose, children}) => {
  return (
    <>
      <div onClick={() => onClose(true)} className={`fixed z-[51] inset-0 bg-black bg-opacity-50 transition-opacity ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
      </div>
      <div className={`z-[51] fixed top-0 right-0 h-full bg-white shadow-lg transform transition-transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } max-w-[375px] w-[calc(100%-50px)] flex flex-col`}>
        <div className='flex justify-between py-[10px] px-[12px] border-b border-[#e5e5e5]'>
          <div className='size-[38px]'></div>
          <div className='flex flex-col items-center'>
            <span className='text-[#282828] text-[15px]'>Bộ lọc</span>
            <span className='text-[#000000b3] text-[14px]'>5 sản phẩm</span>
          </div>
          <button onClick={() => onClose(false)}>
          <svg xmlns='http://www.w3.org/2000/svg' width={38} height={38} viewBox='0 0 24 24'><path fill='none' stroke='#282828' strokeLinecap='round' strokeLinejoin='round' d='M18 6L6 18M6 6l12 12'></path></svg>
          </button>
        </div>
        <div className='p-5 flex-grow'>{children}</div>
        <div className='flex justify-center py-[10px] gap-4 px-[12px] border-t mb-2 border-[#e5e5e5]'>
          <button className='w-full text-[#10069f] py-[10px] px-[20px] rounded-xl'>Xóa</button>
          <button className='w-full bg-[#10069f] text-white py-[10px] px-[20px] rounded-xl'>Áp dụng</button>
        </div>
      </div>
    </>
  )
}

export default Drawer;