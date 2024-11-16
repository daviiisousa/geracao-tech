import { Apple, Flower2, Truck } from "lucide-react";
import { Card } from "../../components/Card/Crad";
import { Carrosel } from "../../components/Carrosel/Carrosel";
import { Header } from "../../components/Header/Header";
import { Separador } from "../../components/Separador/Separador";
import "./Home.css";
import { Footer } from "../../components/Footer/Footer";

export const Home = () => {
  const hortifruti = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/760281/pexels-photo-760281.jpeg?auto=compress&cs=tinysrgb&w=600",
      titulo: "Uva",
      descricao:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis non laborum soluta necessitatibus facilis sequi ratione, accusantium reiciendis beatae velit assumenda? Possimus consequatur maxime saepe enim fuga sint, labore ab!",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&w=600",
      titulo: "Banana",
      descricao:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis non laborum soluta necessitatibus facilis sequi ratione, accusantium reiciendis beatae velit assumenda? Possimus consequatur maxime saepe enim fuga sint, labore ab!",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1153655/pexels-photo-1153655.jpeg?auto=compress&cs=tinysrgb&w=600",
      titulo: "Mertilo",
      descricao:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis non laborum soluta necessitatibus facilis sequi ratione, accusantium reiciendis beatae velit assumenda? Possimus consequatur maxime saepe enim fuga sint, labore ab!",
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/867349/pexels-photo-867349.jpeg?auto=compress&cs=tinysrgb&w=600",
      titulo: "kiwi",
      descricao:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis non laborum soluta necessitatibus facilis sequi ratione, accusantium reiciendis beatae velit assumenda? Possimus consequatur maxime saepe enim fuga sint, labore ab!",
    },
  ];

  const bebidas = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1028637/pexels-photo-1028637.jpeg?auto=compress&cs=tinysrgb&w=600",
      titulo: "Caipirinha",
      descricao:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis non laborum soluta necessitatibus facilis sequi ratione, accusantium reiciendis beatae velit assumenda? Possimus consequatur maxime saepe enim fuga sint, labore ab!",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1889571/pexels-photo-1889571.jpeg?auto=compress&cs=tinysrgb&w=600",
      titulo: "MilkShake",
      descricao:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis non laborum soluta necessitatibus facilis sequi ratione, accusantium reiciendis beatae velit assumenda? Possimus consequatur maxime saepe enim fuga sint, labore ab!",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/29392061/pexels-photo-29392061.jpeg?auto=compress&cs=tinysrgb&w=600",
      titulo: "Whisky",
      descricao:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis non laborum soluta necessitatibus facilis sequi ratione, accusantium reiciendis beatae velit assumenda? Possimus consequatur maxime saepe enim fuga sint, labore ab!",
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/1267684/pexels-photo-1267684.jpeg?auto=compress&cs=tinysrgb&w=600",
      titulo: "Cervejas",
      descricao:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis non laborum soluta necessitatibus facilis sequi ratione, accusantium reiciendis beatae velit assumenda? Possimus consequatur maxime saepe enim fuga sint, labore ab!",
    },
  ];

  return (
    <body>
      <header>
        <Header />
        <Separador style={{width: '100%'}} />
        <div className="navSeçao">
          <a className="linkNav" href="#hortifruti">Hortifruti</a>
          <a className="linkNav" href="#Bebidas">Bebidas</a>
        </div>
        <Carrosel />
      </header>
      <main>
        <section className="sectionDestaque">
          <div>
            <h1 className="tituloDestaque">Só na Lojinha</h1>
          </div>
          <div className="cardsDesatque">
            <Card
              style={{ background: "#30f561", color: "#00712D", alignItems: "start"}}
              icon={<Apple size={48} />}
              tituloProduto={"Produto de qualidade"}
              descricaoProduto={
                "temos uma variade de produtos com um bom preço e uma otima qualidade"
              }
              tituloBtn={'Ver mais'}
            />
            <Card
              style={{ background: "#30f561", color: "#00712D", alignItems: "start" }}
              icon={<Truck size={48} />}
              tituloProduto={"Entregas"}
              descricaoProduto={
                "Fazemos entregas rapidas e por toda Fortaleza"
              }
              tituloBtn={'Pedir'}
            />
            <Card
              style={{ background: "#30f561", color: "#00712D", alignItems: "start" }}
              icon={<Flower2 size={48} />}
              tituloProduto={"Planos"}
              descricaoProduto={
                "Temos varios planos para você"
              }
              tituloBtn={'Ver Mais'}
            />
          </div>
        </section>
        <section className="sectionProdutos">
          <section className="secaoTiposProdutos" id="hortifruti">
            <h1 className="secaoTitulo">Hortifruti</h1>
            <div className="containerSeparador" >
              <Separador />
            </div>
            <div className="produtosCards">
              {hortifruti.map((produto) => (
                <Card
                  key={produto.id}
                  imgProduto={produto.img}
                  tituloProduto={produto.titulo}
                  descricaoProduto={produto.descricao}
                  tituloBtn={'Comprar'}
                />
              ))}
            </div>
          </section>
          <section className="secaoTiposProdutos" id="Bebidas">
            <h1 className="secaoTitulo">Bebidas</h1>
            <div className="containerSeparador">
              <Separador />
            </div>
            <div className="produtosCards">
              {bebidas.map((produto) => (
                <Card
                  key={produto.id}
                  imgProduto={produto.img}
                  tituloProduto={produto.titulo}
                  descricaoProduto={produto.descricao}
                  tituloBtn={'Comprar'}
                />
              ))}
            </div>
          </section>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </body>
  );
};
