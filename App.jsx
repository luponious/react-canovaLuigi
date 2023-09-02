import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"

export const App = () => {

  const greeting = "Bienvenido a mi tienda de remeras."


  return (
    <>
    <NavBar />
    <ItemListContainer greeting={greeting}/>
    
    
    
    </>
  )
}


export default App
