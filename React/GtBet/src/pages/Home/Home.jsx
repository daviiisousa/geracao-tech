import { Container } from "../../components/Container/Container"
import { Contato } from "../../components/Contato/Contato"
import { Nav } from "../../components/Nav/Nav"
import { SectionCard } from "../../components/SectionCard/SectionCard"
import { Sobre } from "../../components/Sobre/Sobre"
import './Home.css'

export const Home = () => {
    return(
        <>
            <header>
                <Nav />
            </header>
            <main>
                <Container>
                    <SectionCard />
                </Container>
                <Contato />
                <Container>
                    <Sobre />
                </Container>
            </main>
        </>
    )
}