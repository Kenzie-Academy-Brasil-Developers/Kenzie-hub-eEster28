import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"
import { DeshboardPage } from "../pages/DeshboardPage"
import { useState } from "react"

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/deshboard" element={<DeshboardPage/>} />
        </Routes>
    )
}