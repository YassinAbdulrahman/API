import Product from "./Product";
import { useEffect, useState } from "react";
function ProductsList() {
  const [product, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const api_url = "https://fakestoreapi.com/products";

   const getProducts = () =>{
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
   }
   const getcategory = () =>{
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
   }
   const getCategoryByName = (catname) =>{
    fetch(`${api_url}/category/${catname}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
   }
  useEffect(() => {
    getProducts();
    getcategory();
  }, []);
  return (
    <div>
      <h2 className="text-center p-3"> Our Products </h2>
      <div className="container">
        {categories.map((category) => {
          return(
            <button style={{cursor:'pointer'}} key={category} onClick={() => getCategoryByName(category)}>{category}</button>
          )
        })}
        <div className="row">
          {product.map((product) => {
            return (
              <div className="col-3" key={product.id}>
                <Product product={product}/>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
