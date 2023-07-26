import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function ProductDetails() {
    const params = useParams();
    const api_url = `https://fakestoreapi.com/products/${params.productId}`;
    const [product , setProduct] = useState([]);
    useEffect(() => {
      fetch(api_url)
      .then((res) => (res.json()))
      .then((data) => setProduct(data))
    }, [])
    
  return (
    <div>
        <img src={product.image} alt="new" />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
    </div>
  )
}

export default ProductDetails