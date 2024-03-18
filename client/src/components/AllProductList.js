import { useEffect, useState } from "react";
import { Card } from "./Card";
import { CardShimmer } from "./CardShimmer";

export const AllProductList = ({ ProductList }) => {
  const [topRatedProducts, setTopRatedProducts] = useState([]);

  useEffect(() => {
    if (ProductList?.length > 0) setTopRatedProducts(ProductList);
  }, [ProductList]);

  return (
    <div className="filter-card-list-container">
     
      <div className="card-list-container">
        {ProductList?.length ? (
          topRatedProducts.map((cardData) => (
            <Card key={cardData?.id} cardData={cardData} />
          ))
        ) : (
          <>
            <CardShimmer />
            <CardShimmer />
            <CardShimmer />
            <CardShimmer />
          </>
        )}
      </div>
    </div>
  );
};
