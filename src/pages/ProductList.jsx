import React, { useEffect, useState } from "react";
import Product from "../components/products";
import Category from "../components/Category";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const getProduct = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products/");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const getCategory = async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const displayProduct = () => {
    let filteredProducts = products;

    if (searchInput) {
      filteredProducts = filteredProducts.filter((product) => {
        return (
          product.title.toLowerCase().includes(searchInput.toLowerCase()) ||
          product.id.toString().includes(searchInput) ||
          product.description.toLowerCase().includes(searchInput.toLowerCase())
        );
      });
    }

    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    return filteredProducts.length > 0 ? (
      filteredProducts.map((product, key) => (
        <Product product={product} key={key} />
      ))
    ) : (
      <tr key="">
        <td colSpan="4">No products found</td>
      </tr>
    );
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const inputSearch = document.querySelector("#search").value;
    setSearchInput(inputSearch);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const displayCategory = () => {
    return categories.map((category, key) => (
      <Category category={category} key={key} onClick={handleCategoryClick} />
    ));
  };

  useEffect(() => {
    getProduct();
    getCategory();
  }, []);
  //button reset
  const handleReset = () => {
    setSearchInput("");
    setSelectedCategory("");
    getProduct();
    getCategory();
  };
  return (
    <div className="container m-auto mt-5">
      <form>
        <div className="input-group">
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            id="search"
          />
          <button
            type="submit"
            className="btn btn-outline-primary"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </form>
      <h1 className="text-center">Category List</h1>
      <div className="container d-flex flex-wrap justify-content-center m-3">
        {displayCategory()}
      </div>
      <br />
      <hr />
      <h1>Product List</h1>
      {/* button reset */}
      <button className="btn btn-primary m-2" onClick={handleReset}>
        reset
      </button>
      <table className="table table-light table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            <th>id</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Image</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>{displayProduct()}</tbody>
      </table>
    </div>
  );
}
