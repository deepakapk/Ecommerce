import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div className="">
            <img src={assets.logo}  alt="logo-icon" className='mb-5 w-32' />
            <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quaerat impedit voluptatibus dolorum provident architecto adipisci itaque. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam amet quod ducimus reiciendis ad laborum sint quo?</p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>DELIVERY</li>
                <li>PRIVACY POLICY</li>
            </ul>
        </div>
        <div>
            <p className='textxl font-medium mb-5'>GET IN TOUCH</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>+91-123-456-7890</li>
                <li>contact@foreveryou.com</li>
            </ul>
        </div>
      </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright&copy; 2024@forever.com - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer
