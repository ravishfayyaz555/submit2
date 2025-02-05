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
    <div className="space-y-4">
      <Image
        className="rounded-lg hover:scale-105 transition-transform"
        src={img}
        alt="post"
        width={400} // Adjust as needed
        height={300} // Adjust as needed
        layout="responsive"
      />
      <div className="text-accent font-medium flex justify-between">
        <span>{date}</span>
        <span>{comment} Comments</span>
      </div>
      <h3 className="font-bold text-xl">{title}</h3>
    </div>
  );
};

export default Blogcard;
