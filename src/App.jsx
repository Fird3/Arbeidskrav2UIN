import { useState } from 'react'
import './App.css'
import Addform from './components/Addform'
import ShoppingList from './components/ShoppingList'

function App() {

  const handlelisteVare = [
    {
      id: 0,
      title: "Melk",
      number: 2,
      checked: true
    },
    {
      id: 1,
      title: "Egg",
      number: 1,
      checked: false
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

// Har brukt todo oppgaven fra forelesning til hjelp med deler av oppgaven, 
// mest med funksjonene inne i Addform.jsx filen,
// men også til selve oppsette til filen.
// 
// Jeg har også jobbet sammen med/sammerbeidet litt med Jesper Østli Simensen i starten av oppgaven
// med shopping list og litt av det inne på Addform.
// 
// Fikk også hjelp i en studass time av Anders og litt utenfor studass time av Kjell-Magne og Marius R 
// til å finne en skrivefeil jeg hadde på setVarer hvor noen plasser hadde det liten v og andre plasser en stor V.
// 
// Ser du på mine tidligere commits kan du se mine forsøk på checkbox i filen Checkbox.jsx