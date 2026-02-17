import { useState } from 'react'
import './App.css'
import Addform from './components/Addform'
import ShoppingList from './components/ShoppingList'
import ShoppingItem from './components/ShoppingItem'




// Har brukt todo oppgaven fra forelesning til hjelp og har jobbet sammen med/sammerbeidet med Jesper Østli Simensen


function App() {

  const handlelisteVare = [
    {
      id: 0,
      title: "Melk",
      number: 2,
      check: true


    },
    {
      id: 1,
      title: "Egg",
      number: 1,
      check: false
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
