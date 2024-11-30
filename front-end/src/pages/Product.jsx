import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const {productId} = useParams();
  const {products,currency,addToCart} = useContext(ShopContext)
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState("")
  const [size, setSize] = useState("")

  const fetchProductData = async() =>{
    products.map((item)=>{
      if (item._id === productId){
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })
  }

  useEffect(()=>{
    fetchProductData()
  },[productId, products])

  return productData ?  (
    <div className='bordert2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex box-border sm:flex-col overflow-x-hidden sm:overflow-y-auto justify-between sm:justify-normal sm:w-[18.7%] w-full sm:gap-2">
            {
              productData.image.map((item, index)=>(
                <div key={index} className='overflow-hidden rounded-md'>
                  <img onClick={()=>setImage(item)}  src={item} alt="product image" className="box-border ease-in-out duration-150 hover:scale-110 object-cover w-[24%] sm:w-full flex-shrink-0 cursor-pointer" />

                </div>
              ))
            }
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="product image" className="w-full h-auto"/>
          </div>
          </div>
          {/* product Info */}
          <div className="flex-1">
            <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
            <div className='flex items-center gap-1 mt-2'>
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_dull_icon} alt="" className="w-3 5" />
              <p className='pl-2'>(122)</p>
            </div>
            <p className="mt-5 text-3xl font-medium">{currency}{productData.price}</p>
            <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
            <div className="flex flex-col gap-4 my-8">
              <p>Select Size</p>
              <div className='flex gap-2'>
                {
                  productData.sizes.map((item, index)=>(
                    <button onClick={()=>setSize(item)} className={`border py-2 bg-gray-100 px-4 ${item == size ? 'border-orange-500' : ""} `} key={index}>{item}</button>
                  ))
                }
              </div>
            </div>
              <button onClick={()=>addToCart(productData._id, size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
              <hr className="mt-8  sm:w-4/5" />
              <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
                <p className="">100% Original Product.</p>
                <p className="">Cash on delivery is available on this product.</p>
                <p className="">Easy return and exchange policy within 7 days.</p>
              </div>
        </div>
      </div>
      {/* Description and Review Section */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border p-6 text-sm text-gray-500">
          <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem qui aliquid quasi asperiores! Commodi a fugiat earum fuga rem hic incidunt laborum voluptatem quo aliquid, quia et labore, modi eveniet dolore, excepturi repellendus voluptate laboriosam praesentium odio. Unde incidunt illo repellendus ducimus iure quos minus in amet voluptatibus reiciendis! Tempora eaque dolor ab doloribus veniam sit expedita aperiam asperiores quo repellat, cum quisquam similique molestiae sapiente, saepe ipsum officiis iste. Blanditiis alias possimus necessitatibus facere.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere in ipsa at eum? Iusto voluptate harum aut voluptatem! Quis, magnam ab soluta voluptatibus repellendus natus deleniti consectetur! Quaerat, placeat vitae unde cumque minus suscipit at aut expedita. Aperiam ratione modi ipsam placeat iusto tenetur accusantium veritatis ab maiores error. Omnis id aliquam nesciunt recusandae accusantium?</p>
        </div>
      </div>
      {/* Display related Products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
