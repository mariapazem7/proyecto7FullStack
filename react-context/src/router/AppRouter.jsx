import { Route, Routes } from "react-router-dom"
import { Navbar } from "../shared/components/Navbar/Navbar"
import { HomePage } from "../shared/pages/HomePage"
import { AboutPage } from "../shared/pages/AboutPage"
import { LoginPage } from "../modules/auth/pages/Login/Login"
import { LibrosPage } from "../modules/libros/pages/LibrosPage"
import { MercadoPagoStatus } from "../modules/payments/components/MecadoPagoStatus"
import { Footer } from "../shared/components/Footer/Footer"
import { RegisterPage } from "../modules/auth/pages/Register/Register"



export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/about" element={<AboutPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/libros" element={<LibrosPage />} />
                <Route path="/mercadopago/status" element={<MercadoPagoStatus />} />
            </Routes>
            <Footer/>
        </>
    )
}