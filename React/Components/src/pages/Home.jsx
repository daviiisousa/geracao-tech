import { Footer } from ".././components/footer";
import { Form } from ".././components/form";
import { Headear } from ".././components/headear";
import { LabelInput } from ".././components/labelInput";
import { Main } from ".././components/main";
import { Nav } from ".././components/nav";
import { SectionInformacoes } from ".././components/sectionInformacoes";
import { Container } from "../components/container";

export default function Home() {
  return (
    <>
      <Headear>
        <Nav />
      </Headear>
      <Main>
        <Container>
          <SectionInformacoes
            titulo={"Sobre"}
            sobre={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, facere molestias commodi doloribus quasi cumque omnis officiis reprehenderit ut nobis minus ullam ab ipsum quidem et modi consequatur. Molestias, est?"
            }
          />
          <SectionInformacoes
            titulo={"Por que usar?"}
            sobre={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, facere molestias commodi doloribus quasi cumque omnis officiis reprehenderit ut nobis minus ullam ab ipsum quidem et modi consequatur. Molestias, est?"
            }
          />
          <Form>
            <LabelInput label={"Nome:"} htmlFor={"nome"} id={"nome"} />
            <LabelInput label={"Email:"} htmlFor={"email"} id={"email"} />
          </Form>
        </Container>
        <Footer />
      </Main>
    </>
  );
}
