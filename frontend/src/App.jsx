import { BrowserRouter, Route, Routes } from "react-router-dom"
import EditOverlays from "./pages/EditOverlays.jsx"
import Placar from "./pages/Placar.jsx"
import { useState } from "react"

function App() {
  const [primaryTeam, setPrimaryTeam] = useState(localStorage.getItem('primaryTeam'));
  const [secondTeam, setSecondTeam] = useState(localStorage.getItem('secondTeam'));
  const [scorePrimaryTeam, setScorePrimaryTeam] = useState(0);
  const [scoreSecondTeam, setScoreSecondTeam] = useState(0);
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<EditOverlays />}  />
         
        <Route path="/placar" element={<Placar primaryTeam={primaryTeam} secondTeam={secondTeam} scorePrimaryTeam={scorePrimaryTeam} 
        scoreSecondTeam={scoreSecondTeam} />}  />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
