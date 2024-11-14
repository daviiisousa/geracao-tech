import { Card } from "../../components/Card/Crad";
import { Header } from "../../components/Header/Header";
import { Separador } from "../../components/Separador/Separador";
import "./Home.css";

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
  return (
    <body>
      <header>
        <Header />
      </header>
      <main>
        <section className="sectionProdutos">
          <div>
            <h1 className="tituloProdutos">Produtos</h1>
          </div>
          <div className="secaoHortifruti">
            <h1 className="hortifrutiTitulo">hortifruti</h1>
            <div className="containerSeparador">
              <Separador  />
            </div>
            <div className="produtosCards">
              {hortifruti.map((produto) => (
                <Card
                  key={produto.id}
                  imgProduto={produto.img}
                  tituloProduto={produto.titulo}
                  descricaoProduto={produto.descricao}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </body>
  );
};
