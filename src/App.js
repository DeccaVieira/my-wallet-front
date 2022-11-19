import GlobalStyle from "./assets/styles/GlobalStyle.js"
import Login from "./Login"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Registration from "./Registration.js"
import BankingMovements from "./BankingMovements.js"
import { useState } from "react"
import Outflow from "./Outflow.js"

export default function App() {
  const [token, setToken] = useState("")
  const [name, setName] = useState("")
  return (<>
  <BrowserRouter>
      <GlobalStyle />
      <Routes>
          <Route path="/" element={<Login token={token} setToken={setToken}/>} />
          <Route path="/cadastrar" element={<Registration  name={name} setName={setName} />} />
          <Route path="/movimentos" element={<BankingMovements token={token} setToken={setToken}  name={name}/>}/>
          <Route path="/gastos" element={<Outflow/>}/> 
          <Route path="/ganhos" element={<Deposit/>}/> 
      </Routes>
  </BrowserRouter>
  </>
  )
}


