import React from 'react';
import Image from 'next/image';

interface PropsType {
  img: string;
  title: string;
  comment: number;
  date: string;
}

const Blogcard = ({ img, title, date, comment }: PropsType) => {
  return (
    <div className="space-y-4 bg-white shadow-lg rounded-lg p-4 transition-transform duration-300 hover:scale-105">
      <div className="relative w-full h-64">
        <Image
          className="rounded-lg object-cover"
          src={img}
          alt="Blog post image"
          fill
          priority
        />
      </div>
      
      <div className="text-gray-600 font-medium flex justify-between text-sm">
        <span>{date}</span>
        <span>{comment} {comment === 1 ? 'Comment' : 'Comments'}</span>
      </div>

      <h3 className="font-bold text-lg text-gray-900">{title}</h3>
    </div>
  );
};

export default Blogcard;
