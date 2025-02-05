import React from 'react';
import Blogcard from '@/components/blogsection';

const data = [
  {
    img: "/post__1.jpg",
    title: "Lorem ipsum dolor sit amet",
    date: "Jan 6, 2024",  // Fixed key name
    comment: 8,
  },
  {
    img: "/post__2.jpg",
    title: "Lorem ipsum dolor sit amet",
    date: "Jan 5, 2024",
    comment: 1,
  },
  {
    img: "/post__3.jpg",
    title: "Lorem ipsum dolor sit amet",
    date: "Jan 1, 2024",
    comment: 6,
  },
];

const Blogsection = () => {
  return (
    <div className="container pt-32">
      <h2 className="font-bold text-2xl">Latest News</h2>
      <p className="text-gray-500">
        Present posts in the best way to highlight interesting moments of your blog.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
        {data.map((item) => (
          <Blogcard
            key={item.img}  // Ensuring a unique key
            img={item.img}
            title={item.title}
            date={item.date}
            comment={item.comment}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogsection;
