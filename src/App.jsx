import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './Global.css'
import { Home } from "./pgs/Home"
import { Topo } from './components/Topo'
import { Menu } from './components/Menu'
import { CardInfo } from './components/CardInfo'
import { Anuncio } from './components/Anuncio'
import { Caes } from './pgs/Caes'
import { Rodape } from './pgs/Rodape'
import { Gatos } from './pgs/Gatos'
import { Desconto } from './pgs/Desconto'
import { Marca } from './pgs/Marcas'


function App() {

  return (
   <Router>
      <Topo 
        img='https://catdogpimpao.com.br/LOGO_CATDOG_PIMPAO.png'
        cep='Informe o CEP'
        type='text'
        nome='O que Procura ?'
        search='search' 
        compras='shopping-bag'
        name='Compras Recorrentes'
        gift='gift'
        pedidos='Meus Pedidos'
        cart='cart'
        logIn='Entrar/Cadastrar'
        arrow='chevron-down'
        // logOut='Sair'
        />
      
      <Menu/>
      <CardInfo/>
      <Anuncio/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/dog' element={<Caes />}/>
        <Route path='/cat' element={<Gatos />}/>
        <Route path='/cbdesc' element={<Desconto />}/>
        <Route path='/logos' element={<Marca />}/>
      </Routes>
      <Rodape />
   </Router>
  )
}

export default App



