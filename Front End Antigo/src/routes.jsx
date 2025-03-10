import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Treinamentos from "./pages/Treinamentos/Treinamentos"
import Avaliacoes from "./pages/Avaliacoes/Avaliacoes";
import SobreNos from "./pages/SobreNos/SobreNos";
import Perfil from "./pages/Perfil/Perfil";
import FrenteDeLojaDesktop from "./pages/Treinamentos/modulos/FrenteDeLojaDesktop";
import FrenteDeLojaWeb from "./pages/Treinamentos/modulos/FrenteDeLojaWeb";
import RetaguardaDesktop from "./pages/Treinamentos/modulos/RetaguardaDesktop";
import RetaguardaWeb from "./pages/Treinamentos/modulos/RetaguardaWeb";
import NovoVideo from "./pages/NovoVideo/NovoVideo";
import Teste from "./pages/teste";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro"
import RetaguardaWebCadastros from "./pages/Treinamentos/subModulos/RetaguardaWeb/RetaguardaWebCadastros";
import RetaguardaWebFinanceiro from "./pages/Treinamentos/subModulos/RetaguardaWeb/RetaguardaWebFinanceiro";
import RetaguardaWebOperacoes from "./pages/Treinamentos/subModulos/RetaguardaWeb/RetaguardaWebOperacoes";
import RetaguardaDesktopCadastros from "./pages/Treinamentos/subModulos/RetaguardaDesktop/RetaguardaDesktopCadastros";
import RetaguardaDesktopOperacoes from "./pages/Treinamentos/subModulos/RetaguardaDesktop/RetaguardaDesktopOperacoes";
import RetaguardaDesktopFinanceiro from "./pages/Treinamentos/subModulos/RetaguardaDesktop/RetaguardaDesktopFinanceiro";
import RetaguardaDesktopFerramentas from "./pages/Treinamentos/subModulos/RetaguardaDesktop/RetaguardaDesktopFerramentas";
import FrenteDeLojaWebOperacoes from "./pages/Treinamentos/subModulos/FrenteDeLojaWeb/FrenteDeLojaWebOperacoes";
import FrenteDeLojaWebRelatorios from "./pages/Treinamentos/subModulos/FrenteDeLojaWeb/FrenteDeLojaWebRelatorios";
import FrenteDeLojaDesktopFerramentas from "./pages/Treinamentos/subModulos/FrenteDeLojaDesktop/FrenteDeLojaDesktopFerramentas";
import FrenteDeLojaDesktopRelatorios from "./pages/Treinamentos/subModulos/FrenteDeLojaDesktop/FrenteDeLojaDesktopRelatorios";
import FrenteDeLojaDesktopOperacoes from "./pages/Treinamentos/subModulos/FrenteDeLojaDesktop/FrenteDeLojaDesktopOperacoes";


const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/Cadastro' element={<Cadastro />} />
            <Route path='/LandingPage' element={<LandingPage />} />
            <Route path='/Treinamentos' element={<Treinamentos />} />
            <Route path='/Avaliacoes' element={<Avaliacoes />} />
            <Route path='/SobreNos' element={<SobreNos />} />
            <Route path='/Perfil' element={<Perfil />} />
            <Route path='/FrenteDeLojaDesktop' element={<FrenteDeLojaDesktop />} />
            <Route path='/FrenteDeLojaWeb' element={<FrenteDeLojaWeb />} />
            <Route path='/RetaguardaDesktop' element={<RetaguardaDesktop />} />
            <Route path='/RetaguardaWeb' element={<RetaguardaWeb />} />
            <Route path='/NovoVideo' element={<NovoVideo />} />
            <Route path='/Teste' element={<Teste />} />
            <Route path='/RetaguardaWeb/Cadastros' element={<RetaguardaWebCadastros />} />
            <Route path='/RetaguardaWeb/Financeiro' element={<RetaguardaWebFinanceiro />} />
            <Route path='/RetaguardaWeb/Operacoes' element={<RetaguardaWebOperacoes />} />
            <Route path='/RetaguardaDesktop/Cadastros' element={<RetaguardaDesktopCadastros />} />
            <Route path='/RetaguardaDesktop/Operacoes' element={<RetaguardaDesktopOperacoes />} />
            <Route path='/RetaguardaDesktop/Financeiro' element={<RetaguardaDesktopFinanceiro />} />
            <Route path='/RetaguardaDesktop/Ferramentas' element={<RetaguardaDesktopFerramentas />} />
            <Route path='/FrenteDeLojaWeb/Operacoes' element={<FrenteDeLojaWebOperacoes />} />
            <Route path='/FrenteDeLojaWeb/Relatorios' element={<FrenteDeLojaWebRelatorios />} />
            <Route path='/FrenteDeLojaDesktop/Ferramentas' element={<FrenteDeLojaDesktopFerramentas />} />
            <Route path='/FrenteDeLojaDesktop/Relatorios' element={<FrenteDeLojaDesktopRelatorios />} />
            <Route path='/FrenteDeLojaDesktop/Operacoes' element={<FrenteDeLojaDesktopOperacoes />} />
        </Routes>

    )
}

export default AppRoutes