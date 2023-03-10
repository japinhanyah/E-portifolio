import './App.css'
import Menu from './componentes/menu/menu.jsx'
import Banner from './componentes/banner/banner.jsx'
import Sobre from './componentes/sobre/sobre.jsx'
import Servicos from './componentes/servicos/servicos.jsx'
import Portifolio from './componentes/portifolio/portifolio.jsx'
import Contato from './componentes/contato/contato.jsx'
import Rodape from './componentes/rodape/rodape.jsx'

export default function App() {
  return (
    <div className="app">
      <Menu />
      <Banner />
      <Sobre />
      <Servicos />
      <Portifolio />
      <Contato />
      <Rodape/>
    </div>

  )
}
