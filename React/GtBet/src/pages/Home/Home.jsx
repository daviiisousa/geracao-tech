import { Container } from "../../components/Container/Container"
import { Contato } from "../../components/Contato/Contato"
import { Footer } from "../../components/Footer/Footer"
import { Nav } from "../../components/Nav/Nav"
import { SectionCard } from "../../components/SectionCard/SectionCard"
import { Sobre } from "../../components/Sobre/Sobre"
import './Home.css'

export const Home = () => {
    return(
        <>
            <body>
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
                    <footer>
                        <Footer />
                    </footer>
            </body>
        </>
    )
}