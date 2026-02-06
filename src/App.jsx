import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Addform from './components/Addform'
import ShoppingList from './components/ShoppingList'


// Har brukt todo oppgaven til hjelp og har jobbet sammen med/sammerbeidet med Jesper

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
 
  return (
    <main>
      <h1>Handleliste</h1>
      <Addform />
      <ShoppingList />
      
    </main>
  )
}

export default App
