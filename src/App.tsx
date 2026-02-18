
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './componentes/home/home'
import { Criptos } from './componentes/criptos/criptos'
import { Noticias } from './componentes/noticias/noticias'
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}/>
          <Route path='/criptos' element={<Criptos></Criptos>}/>
          <Route path="/noticias" element={<Noticias></Noticias>}/>
        </Routes>
      </BrowserRouter>
    </>
  )   
}

export default App
