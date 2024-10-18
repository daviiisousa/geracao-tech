import { Container } from "../../components/Container/Container"
import { Nav } from "../../components/Nav/Nav"
import { SectionCard } from "../../components/SectionCard/SectionCard"


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
            </main>
        </>
    )
}