import { useState } from 'react'
import './App.css'
import Addform from './components/Addform'
import ShoppingList from './components/ShoppingList'




// Har brukt todo oppgaven fra forelesning til hjelp og har jobbet sammen med/sammerbeidet med Jesper Østli Simensen


function App() {

  const handlelisteVare = [
    {
      id: 0,
      title: "Melk",
      number: 2,
      checkboksen: true


    },
    {
      id: 1,
      title: "Egg",
      number: 1
    }
  ]

  const [liste, setListe] = useState(handlelisteVare)
  const [varer, setVarer] = useState()

  console.log(liste)
 
  return (
    <main>
      <h1>Handleliste</h1>
      <Addform varer={varer} setVarer={setVarer} setListe={setListe}/>
      <ShoppingList handlelisteVare={liste} setListe={setListe} />
      
    </main>
  )
}

export default App
