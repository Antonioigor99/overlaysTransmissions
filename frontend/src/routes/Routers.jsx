import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useState } from "react"
import Placar from "../pages/Placar.jsx"
import Login from "../pages/Login.jsx"
import Register from "../pages/Register.jsx"
const Routers = () => {
    const [primaryTeam, setPrimaryTeam] = useState(localStorage.getItem('primaryTeam'));
    const [secondTeam, setSecondTeam] = useState(localStorage.getItem('secondTeam'));
    const [scorePrimaryTeam, setScorePrimaryTeam] = useState(0);
    const [scoreSecondTeam, setScoreSecondTeam] = useState(0);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login /> } />
                <Route path="/register" element={<Register />} />
                <Route path="/placar" element={<Placar primaryTeam={primaryTeam} secondTeam={secondTeam} scorePrimaryTeam={scorePrimaryTeam}
                    scoreSecondTeam={scoreSecondTeam} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers