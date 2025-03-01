
import React from 'react'
import { Whisper } from 'next/font/google';
import Categorycard from './categorycard';

const whisper = Whisper({subsets: ["latin"] , weight:["400"]});


const data =[
    {
        img:"/category-1.jpg",
        type: "Makeup",
        quantity: "(4 Items)",

    },
    {
       img:"/category-2.jpg",
       type:"Nails & Wax",
       quantity: "(8 Items)",
    },
    {
        img:"/category-3.jpg",
        type:"Skincare",
        quantity:"(6 Items)"
    },
];

const Category = () => {
  return (
    <div className='bg-[url(/cats__bg.jpg)] bg-no-repeat py-16 mt-32'>
        <div className='container text-center text-white'>
            <h3 className={`${whisper.className} text-[40px]`}>Favorite category</h3>
            <h2 className='text-[40px] font-medium'>Top category</h2>

            <div className='flex justify-center gap-4 md:gap-16 pt-8'>
                {data.map((item)=> (
                    <Categorycard
                    key={item.type}
                    img={item.img}
                    type={item.type}
                    quantity={item.quantity}
                    />
                ))}

            </div>
             </div>  
           </div>
  );
};

export default Category;