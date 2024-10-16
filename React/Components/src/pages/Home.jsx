import { Footer } from ".././components/footer";
import { Form } from ".././components/form";
import { Headear } from ".././components/headear";
import { LabelInput } from ".././components/labelInput";
import { Main } from ".././components/main";
import { Nav } from ".././components/nav";
import { SectionInformacoes } from ".././components/sectionInformacoes";

export default function Home() {
  return (
    <>
      <Headear>
        <Nav />
      </Headear>
      <Main>
        <SectionInformacoes titulo={'Sobre'} />
        <SectionInformacoes titulo={'Por que usar?'} />
        <Form>
          <LabelInput label={'Nome:'} htmlFor={'nome'} id={'nome'} />
          <LabelInput label={'Email:'} htmlFor={'email'} id={'email'} />
        </Form>
      </Main>
      <Footer />
    </>
  )
}