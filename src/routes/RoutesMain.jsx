import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"
import { DeshboardPage } from "../pages/DeshboardPage"
import { useState } from "react"

export const RoutesMain = () => {
    const [user,setUser] = useState(null)

    return(
        <Routes>
            <Route path="/" element= { <LoginPage setUser={setUser} />}/>
            <Route path="/register" element= { <RegisterPage/>}/>
            <Route path="/deshboard" element={ <DeshboardPage user={user} setUser={setUser} />} />
        </Routes>
    )
}