import Image from "next/image";
import React from "react";

const MainNews = ({ news }) => {
    const firstNews = news[0]
  console.log(firstNews);

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <Image
            src={firstNews.imageUrl}
            width={20}
            height={20}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNews;
