import './App.css'
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'

function App() {
  return (
    <>
     <NavBar color='blue' label='NavBar'/>
     <ItemListContainer text="Cuando sepamos que vender, esto seria genial"/>
    </>
  )
}

export default App
