

import { Link } from "react-router-dom";
// import { IMAGE_BASE_URL } from "../utils/constants";

export const Card = ({ cardData }) => {
 

  return (
    <article className="card">
  
        <div className="card-thumbnail-wrapper">
          {/* <img
            src={`${IMAGE_BASE_URL}${info?.cloudinaryImageId}`}
            alt={info?.image?.name}
            className="card-thumbnail"
          /> */}
        </div>
        <div className="card-content">
          <header className="card-header">
            <h2 className="card-title">{cardData?.name}</h2>
            <div className="card-featured">
              <div className="card-stats">{cardData.description}</div>
            </div>
          </header>
          <div className="card-body">

            <button className="card-action">Price : {cardData?.price}</button>
            <Link to={`/PlaceOrderForm/${cardData._id}`}>
            <button className="card-action">Add To Cart</button>  </Link>
          </div>
        </div>
    
    </article>
  );
};

