import './App.css'
import { Card } from './components/Card/Card'

function App() {
  return (
    <>
      <div className='divCards'>
        <Card titulo={"lobos"} descricao={'um lobo foda te olhando'} button={'ir'} />
        <Card titulo={'lobo 2'} descricao={'lobo so que 2'} button={'salvar'} />
      </div>
    </>
  )
}

export default App
