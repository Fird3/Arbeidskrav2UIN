import { useState } from 'react'
import './App.css'
import Addform from './components/Addform'
import ShoppingList from './components/ShoppingList'



// Har brukt todo oppgaven fra forelesning til hjelp og har jobbet sammen med/sammerbeidet med Jesper Østli Simensen


function App() {



  const HandlelisteVare = [
    {
      id: 0,
      title: "Melk",
      number: 2
      
    },
    {
      id: 1,
      title: "Egg",
      number: 1
    }
  ]

  const [Liste, setListe] = useState(HandlelisteVare)
  const [Varer, setVarer] = useState()
 
  return (
    <main>
      <h1>Handleliste</h1>
      <Addform Varer={Varer} setVarer={setVarer} setListe={setListe}/>
      <ShoppingList HandlelisteVare={Liste} setListe={setListe} />
      
    </main>
  )
}

export default App
