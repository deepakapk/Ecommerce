import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={'CONTACT'} text2={"US"}/>
      </div>
      <div className="my10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">Theek Subah 9:30 baje Yaha Pahunch jana <br />Agar Jindagi Mein Kuch Karna Chate Ho toh</p>
          <p className="text-gray-500">Tel : +91 100 102 108 <br />Email: admin@forever.com</p>
          <p className="font-semibold text-xl text-gray-600">Careers at Forever</p>
          <p className="text-gray-500">Learn More about our teams and Job Opening</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default Contact
