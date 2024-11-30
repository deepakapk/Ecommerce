import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {
    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext)
    const [visible, setVisible] = useState(false)
    const location = useLocation()

    useEffect(()=>{
        if(location.pathname.includes("collection")){
            setVisible(true)
        }
        else{
            setVisible(false)
        }
    },[location])
  return visible && showSearch ? (
    <div className='border-t border-b bg-gray-50 text-center'>
        <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input className='flex-1 outline-none bg-inherit text-sm' type="text" placeholder='Search'  onChange={(e) => setSearch(e.target.value)}/>
        <img src={assets.search_icon} className='w-4 box-border hover:scale-110 duration-200 ease-in-out' alt="" />
        </div>
        <img className='inline w-3 cursor-pointer hover:rotate-180 transition-all duration-200 ease-in-out ' onClick={()=>setShowSearch(false)} src={assets.cross_icon} alt="" />
      
    </div>
  ) : null
}

export default SearchBar
