
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './componentes/home/home'
import { Criptos } from './componentes/criptos/criptos'
import { CryptoProvider } from './componentes/context/contextCryptos'
import CryptoDetails from './componentes/criptos/cryptoDetails'
import { ExchangeGrid } from './componentes/exchanges/exchangesGrid'


function App() {
  return (
    <>
      <CryptoProvider>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}/>
          <Route path='/cryptos' element={<Criptos></Criptos>}/>
          <Route path="/exchanges" element={<ExchangeGrid></ExchangeGrid>}/>
          <Route path='/crypto/:id' element={<CryptoDetails></CryptoDetails>}/>
        </Routes>
        </BrowserRouter>
      </CryptoProvider>
    </>
  )   
}

export default App
