import Link from 'next/link'

const Footer = () => {
  return (
    <div className='flex flex-col lg:justify-center md:flex-row gap-20 lg:gap-32 flex-wrap bg-[#E8ECEF] py-20 px-10'>
      <div className='bg-b-[1px] border-gray-600 py-3 flex flex-col gap-5'>
        <strong className='text-2xl font-semibold'>3legant collection</strong>
        <span className='text-sm text-gray-700'>4311 Jal talieu street,</span>
        <span className='text-sm text-gray-700'>District 4, HMCF</span>
        <span className='text-sm text-gray-700'>Nigeria</span>
        <span className='text-sm text-gray-700'>(+234) 807 548 9362</span>
        <div className='flex gap-6 text-3xl mt-4'>
          <i className='fa-brands fa-instagram'></i>
          <i className='fa-brands fa-x-twitter'></i>
          <i className='fa-brands fa-facebook'></i>
        </div>
      </div>

      <div className='bg-b-[1px] border-gray-600 py-3 flex flex-col gap-5'>
        <div className='flex justify-between items-center'>
          <strong className='text-2xl font-semibold'>Pages</strong>
          <div className='md:hidden'>
            <i className='fa-solid fa-angle-up'></i>
          </div>
        </div>

        <Link href={'/'} className='text-sm text-gray-700'>Home</Link>
        <Link href={'/shop'} className='text-sm text-gray-700'>Shop</Link>
        <Link href={'/shop'} className='text-sm text-gray-700'>Products</Link>
        <Link href={'/blog'} className='text-sm text-gray-700'>Articles</Link>
        <Link href={'/contact'} className='text-sm text-gray-700'>Contact Us</Link>
      </div>

      <div className='bg-b-[1px] border-gray-600 py-3 flex flex-col gap-5'>
        <div className='flex justify-between items-center'>
          <strong className='text-2xl font-semibold'>Info</strong>
          <div className='md:hidden'>
            <i className='fa-solid fa-angle-up'></i>
          </div>
        </div>

        <span className='text-sm text-gray-700'>Shipping Policy</span>
        <span className='text-sm text-gray-700'>Return & Refund</span>
        <span className='text-sm text-gray-700'>Support</span>
        <span className='text-sm text-gray-700'>FAQs</span>
      </div>

      <div className='bg-b-[1px] border-gray-600 py-3 flex flex-col gap-5 gap-y-7 md:basis-[45%] lg:basis-[30%]'>
        <div className='flex justify-between items-center'>
          <strong className='text-2xl font-semibold'>Join Newsletter</strong>
          <div className='md:hidden'>
            <i className='fa-solid fa-angle-up'></i>
          </div>
        </div>

        <span className='text-sm text-gray-700 w-full'>Subscribe our newsletter to get more deals, new products and promotions</span>
        <div className='text-sm text-gray-700 border-gray-400 border-2 rounded-full px-2 py-2 flex items-center justify-between'>
          <input type="text" className=' bg-transparent w-[70%] h-full rounded-full outline-none pl-3' placeholder='Enter your email' />
          <button className='w-10 h-10 bg-[#377DFF] text-white rounded-full flex items-center justify-center'>
            <span className='font-semibold'>&rarr;</span>
          </button>
        </div>
      </div>

    </div>
  )
}

export default Footer