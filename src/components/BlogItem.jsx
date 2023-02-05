import React from "react";
import { Link } from "react-router-dom";
import pic from "../imgs/1672123640006.jpg";
export default function BlogItem() {
  return (
    <div className="BlogItem">
      <div className="image-container">
        <img src={pic} alt="some" />
      </div>
      <div className="text">
        <h1>Heading</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta quo
          itaque sunt, ipsum obcaecati iste numquam, omnis reprehenderit
          voluptates voluptatibus unde qui officia, minus repudiandae vel
          similique sapiente placeat tempore!
        </p>
        <Link to="/blogs/id" className="link">
          Read More..
        </Link>
      </div>
    </div>
  );
}
