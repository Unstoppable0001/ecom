import React, { useEffect, useState } from "react";
import { Search } from "./Search";
import { AllProductList } from "./AllProductList";
import { List_All_ITEMS } from "../utils/constants";

export const Body = () => {
  const [ProductList, setProductList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const fetchData = async () => {
    const apiResponse = await fetch(List_All_ITEMS);
    
    const allproductData = await apiResponse.json();
    console.log(allproductData)


    setProductList(allproductData);
    setFilteredList(allproductData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterProducts = (searchText) => {
    const filterList = ProductList.filter((product) => {
      return product.name
        ?.toLowerCase()
        ?.includes(searchText.toLowerCase());
    });
    setFilteredList(filterList);

    console.log(filterList);
  };

  return (
    <div className="container">
       <Search filterProducts={filterProducts} />
      <AllProductList ProductList={filteredList} /> 
    </div>
  );
};
