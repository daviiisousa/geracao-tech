import { Nav } from "../components/nav";
import { Headear } from "../components/headear";
import { Main } from "../components/main";
import { Container } from "../components/container";
import { SectionInformacoes } from "../components/sectionInformacoes";
import { Footer } from "../components/footer";

export function Sobre(){
    return(
        <>
            <Headear>
                <Nav />
            </Headear>
            <Main>
                <Container>
                    <SectionInformacoes titulo={'React'} sobre={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, facere molestias commodi doloribus quasi cumque omnis officiis reprehenderit ut nobis minus ullam ab ipsum quidem et modi consequatur. Molestias, est?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, facere molestias commodi doloribus quasi cumque omnis officiis reprehenderit ut nobis minus ullam ab ipsum quidem et modi consequatur. Molestias, est?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, facere molestias commodi doloribus quasi cumque omnis officiis reprehenderit ut nobis minus ullam ab ipsum quidem et modi consequatur. Molestias, est?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, facere molestias commodi doloribus quasi cumque omnis officiis reprehenderit ut nobis minus ullam ab ipsum quidem et modi consequatur. Molestias, est?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, facere molestias commodi doloribus quasi cumque omnis officiis reprehenderit ut nobis minus ullam ab ipsum quidem et modi consequatur. Molestias, est?"} />

                    <SectionInformacoes titulo={'Porque React?'} sobre={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, facere molestias commodi doloribus quasi cumque omnis officiis reprehenderit ut nobis minus ullam ab ipsum quidem et modi consequatur. Molestias, est?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, facere molestias commodi doloribus quasi cumque omnis officiis reprehenderit ut nobis minus ullam ab ipsum quidem et modi consequatur. Molestias, est?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, facere molestias commodi doloribus quasi cumque omnis officiis reprehenderit ut nobis minus ullam ab ipsum quidem et modi consequatur. Molestias, est?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, facere molestias commodi doloribus quasi cumque omnis officiis reprehenderit ut nobis minus ullam ab ipsum quidem et modi consequatur. Molestias, est?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, facere molestias commodi doloribus quasi cumque omnis officiis reprehenderit ut nobis minus ullam ab ipsum quidem et modi consequatur. Molestias, est?"} />
                </Container>
                <Footer />
            </Main>
        </>
    )
}