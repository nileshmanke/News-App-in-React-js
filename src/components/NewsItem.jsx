import React from "react";
import image from '../assets/newsimg.jpg';

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: '345px' }}>
      <div className="card">
        <img
          src={src ? src : image}
          className="card-img-top w-100 h-auto"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0, 50)}</h5>
          <p className="card-text">
            {description
              ? description.slice(0, 90)
              : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem id ipsa eligendi. Veritatis aspernatur numquam impedit, doloremque reiciendis dolores. Delectus, animi repellat. Quas perspiciatis quis, explicabo suscipit nulla tempora quia aliquid consequatur ad quidem esse perferendis adipisci commodi fugiat repudiandae voluptate? Odio eaque minus et corrupti dolor sint blanditiis eum inventore sequi modi debitis harum quidem sed animi earum nihil repudiandae iusto porro hic, accusantium, voluptatibus nobis voluptas distinctio tempore! Quam laboriosam eveniet minus laudantium repellat consequuntur! Rerum, enim deserunt optio unde, quo quis obcaecati fugit doloremque reprehenderit temporibus excepturi."}
          </p>
          <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
