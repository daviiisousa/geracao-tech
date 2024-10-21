import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Link } from "react-router-dom";

export const Home = () => {
    const [products, setProduct] = useState([])

    useEffect(() => {
        async function loadProducts() {
            const response = await api.get('products/')
            setProduct(response.data.products)
        }
        loadProducts()
    }, [])

    return ( 
            <div className="container">
                {products.map((product) => {
                    return(
                        <div key={product.id} className="product">
                            <img src={product.thumbnail} alt={product.brand} />
                            <h3>{product.title}</h3>
                            <Link to={`product/${product.id}`}>Acessar</Link>
                            <span>R$ {product.price}</span>
                        </div>
                    )
                })}

            </div>
     );
}