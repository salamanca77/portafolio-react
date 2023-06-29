import { useState } from 'react'
import { Sidenav } from './components/Sidenav'
import { Inicio } from './components/Inicio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sidenav />      
      <Inicio /> 
    </>
  )
}

export default App
