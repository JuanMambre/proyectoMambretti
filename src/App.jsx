import './App.css'
import NavBar from './components/NavBar/navbar'
import ItemListContainer from './components/Card/ItemListContainer'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './components/About/AboutUs'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import ItemDetail from './components/Detail/ItemDetail'



function App() {


  return (
    <div>
      <NavBar/>
      
      <Routes>

        <Route 
          path='/'
          element={<Home/>}
        />

        <Route 
          path='/shop'
          element={<ItemListContainer/>}
        />
        
        <Route 
          path='/about'
          element={<AboutUs/>}
        />

        <Route 
          path='/contact'
          element={<Contact/>}
        />

        <Route
          path='/detail/:id'
          element={<ItemDetail />}
        />

      </Routes>
    </div>
  )
}


export default App
