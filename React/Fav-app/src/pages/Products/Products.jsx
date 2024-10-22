import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
import './Products.css'

export const Products = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function loadProducts() {
      await api
        .get(`products/${id}`)
        .then((response) => {
          setProduct(response.data);
        })
        .catch((error) => {
          alert("erro na aplicaçao", error);
          navigate("/", { replace: true });
          return;
        });
    }
    loadProducts();
  }, [id]);

  function salvarProduto() {
    const minhaLista = localStorage.getItem('@produtos')
    let produtosSalvos = JSON.parse(minhaLista) || []
    const hasProduct = produtosSalvos.some((produto) => {
        produto.id === product.id
    })
    if(hasProduct){
        console.log('este produto ja foi salvo')
        return
    }
    produtosSalvos.push(product)
    localStorage.setItem('@produtos', JSON.stringify(produtosSalvos))
    alert('produto salvo !')
  }

  return (
    <>
        <div className="produto-info">
            <h1>{product.title}</h1>
            <img src={product.thumbnail} alt={product.brand}/>
            <p>{product.description}</p>
            <div className="area-buttons">
                <button onClick={salvarProduto} >Salvar</button>
                <button>
                    <a target="blank" href={`http://google.com/search?q=${product.title}`}>
                    Mais na internet
                    </a>
                </button>
            </div>
        </div>
    </>
  );
};
