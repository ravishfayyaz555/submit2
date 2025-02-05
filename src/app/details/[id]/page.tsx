'use client'
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Data from "@/utils/productData"
import Link from 'next/link';
import Image from 'next/image';
import { AiFillStar, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineStar } from 'react-icons/ai';
import { MdCompareArrows } from 'react-icons/md';
import { FaFacebookSquare, FaTwitter, FaInstagram } from 'react-icons/fa6';

// Define TypeScript interface
interface Product {
    id: number;
    name: string;
    price: number;
    img: string;
    category: string[];
}

// Component
const Detailpage = () => {
    const params = useParams();
    const [productData, setProductData] = useState<Product | null>(null);

    useEffect(() => {
        const id = params.id;
        const getProductData = Data.find((item) => item.id.toString() === id) || null;
        setProductData(getProductData);
    }, [params.id]); // Added dependency array

    if (!productData) {
        return <p className="text-center py-10 text-lg">Product not found.</p>;
    }

    return (
        <div className='pt-8'>
            {/* Breadcrumb Section */}
            <div className='bg-gray-100 py-4'>
                <div className='container flex gap-4 items-center text-gray-500'>
                    <Link href="/" className='cursor-pointer'>Home</Link>
                    <div className='w-[30px] h-[2px] bg-gray-400'/>
                    <p>{productData.category[0]}</p>
                    <div className='w-[30px] h-[2px] bg-gray-400'/>
                    <p>{productData.name}</p>
                </div>
            </div>

            {/* Product Detail Section */}
            <div className='container pt-8'>
                <div className='grid md:grid-cols-2 gap-16'>
                    {/* Product Image */}
                    <div>
                        <Image className='w-full h-full' src={productData.img} width={1000} height={1200} alt={productData.name} />
                    </div>

                    {/* Product Info */}
                    <div className='space-y-4'>
                        <div className='flex items-center text-accent'>
                            <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/>
                            <p className='text-gray-400 text-[14px] ml-2 hover:text-accent cursor-pointer'>(8 customer reviews)</p>
                        </div>

                        <div className='text-[#161616] space-y-6'>
                            <h2 className='text-3xl font-semibold'>{productData.name}</h2>
                            <p className='text-xl'>${productData.price}.00</p>
                        </div>

                        <p className='text-gray-500 text-[14px]'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Quisquam neque minima aliquam nihil voluptatum quidem!
                        </p>
                        <p className='text-gray-500 text-[14px]'>20 in stock</p>

                        {/* Add to Cart Button */}
                        <button className='uppercase bg-accent py-4 px-8 rounded-lg text-white flex gap-2 items-center hover:bg-black'>
                            <AiOutlineShoppingCart className="text-[24px]" />
                            Add to cart
                        </button>

                        {/* Wishlist and Compare */}
                        <div className='flex gap-4 items-center uppercase py-4 text-[14px]'>
                            <div className='flex gap-1 items-center'><AiOutlineHeart/> Add to wish List</div>
                            <div className='flex gap-1 items-center'><MdCompareArrows/> Compare</div>
                        </div>

                        <div className='w-[30px] h-[2px] bg-gray-400'/>
                        <div>Name: {productData.name}</div>
                        <div className='capitalize'>Category: {productData.category[0]}</div>
                        <div>Tags: {productData.category.map((item) => <span key={item} className="mr-2">{item}</span>)}</div>
                        <div className='w-[30px] h-[2px] bg-gray-400'/>

                        {/* Social Share */}
                        <div className='flex gap-1 items-center pt-4'>
                            SHARE:{" "}
                            <div className='flex gap-2 items-center text-[18px]'>
                                <FaFacebookSquare/> <FaTwitter/> <FaInstagram/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detailpage;
