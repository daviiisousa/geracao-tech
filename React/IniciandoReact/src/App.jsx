import Container from './components/container/container'
import Hello from './components/hello/hello'
import { Nome } from './components/nome/nome'

function App() {
  return (
    <>
      <Container>
        <Hello />
        <Nome />
      </Container>
    </>
  )
}

export default App
