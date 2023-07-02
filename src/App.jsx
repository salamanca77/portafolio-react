import { useState } from 'react'
import { Sidenav } from './components/Sidenav'
import { Inicio } from './components/Inicio'
import { Trabajo } from './components/Trabajo'
import {Proyecto} from './components/Proyecto'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sidenav />      
      <Inicio />
      <Trabajo /> 
      <Proyecto /> 
    </>
  )
}

export default App
