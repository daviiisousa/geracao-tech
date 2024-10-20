import { Container } from "../../components/Container/Container"
import { Contato } from "../../components/Contato/Contato"
import { Nav } from "../../components/Nav/Nav"
import { SectionCard } from "../../components/SectionCard/SectionCard"
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
            </main>
        </>
    )
}