import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { APP_ROUTES } from './utils/constants';
import LandingPage from './components/LandingPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import About from './components/About';
import Trainments from './components/trainments';
import CdsWeb from './components/CdsWeb';
import CdsDesktop from './components/CdsDesktop';
import RetaguardaWeb from './components/RetaguardaWeb';
import FrenteDeLojaWeb from './components/FrenteDeLojaWeb';
import FrenteDeLojaDesktop from './components/FrenteDeLojaDesktop';
import RetaguardaDesktop from './components/RetaguardaDesktop';
import Valuations from './components/Valuations';
import RetaguardaWebCadastros from './components/RetaguardaWebCadastros';
import RetaguardaWebOperacoes from './components/RetaguardaWebOperacoes';
import RetaguardaWebFinanceiro from './components/RetaguardaWebFinanceiro';
import RetaguardaDesktopCadastros from './components/RetaguardaDesktopCadastros';
import RetaguardaDesktopFerramentas from './components/RetaguardaDesktopFerramentas';
import RetaguardaDesktopOperacoes from './components/RetaguardaDesktopOperacoes';
import RetaguardaDesktopFinanceiro from './components/RetaguardaDesktopFinanceiro';
import FrenteDeLojaWebCadastros from './components/FrenteDeLojaWebCadastros';
import FrenteDeLojaWebOperacoes from './components/FrenteDeLojaWebOperacoes';
import FrenteDeLojaDesktopFerramentas from './components/FrenteDeLojaDesktopFerramentas';
import FrenteDeLojaDesktopCadastros from './components/FrenteDeLojaDesktopCadastros';
import FrenteDeLojaDesktopOperacoes from './components/FrenteDeLojaDesktopOperacoes';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Navigate to={APP_ROUTES.LANDINGPAGE} />} />
        <Route path={APP_ROUTES.SIGN_UP} exact element={<SignUp />} />
        <Route path={APP_ROUTES.SIGN_IN} element={<SignIn />} />
        <Route path={APP_ROUTES.LANDINGPAGE} element={<LandingPage />} />
        <Route path={APP_ROUTES.PROFILE} element={<Profile />} />
        <Route path={APP_ROUTES.ABOUT} element={<About />} />
        <Route path={APP_ROUTES.TRAINMENTS} element={<Trainments />} />
        <Route path={APP_ROUTES.CDSWEB} element={<CdsWeb />} />
        <Route path={APP_ROUTES.CDSDESKTOP} element={<CdsDesktop />} />
        <Route path={APP_ROUTES.WEB_RETAGUARDA} element={<RetaguardaWeb />} />
        <Route path={APP_ROUTES.WEB_RETAGUARDA_CADASTROS} element={<RetaguardaWebCadastros />} />
        <Route path={APP_ROUTES.WEB_RETAGUARDA_OPERACOES} element={<RetaguardaWebOperacoes />} />
        <Route path={APP_ROUTES.WEB_RETAGUARDA_FINANCEIRO} element={<RetaguardaWebFinanceiro />} />
        <Route path={APP_ROUTES.WEB_FRENTEDELOJA} element={<FrenteDeLojaWeb />} />
        <Route path={APP_ROUTES.WEB_FRENTEDELOJA_CADASTROS} element={<FrenteDeLojaWebCadastros />} />
        <Route path={APP_ROUTES.WEB_FRENTEDELOJA_OPERACOES} element={<FrenteDeLojaWebOperacoes />} />
        <Route path={APP_ROUTES.DESKTOP_RETAGUARDA} element={<RetaguardaDesktop />} />
        <Route path={APP_ROUTES.DESKTOP_RETAGUARDA_CADASTROS} element={<RetaguardaDesktopCadastros />} />
        <Route path={APP_ROUTES.DESKTOP_RETAGUARDA_FERRAMENTAS} element={<RetaguardaDesktopFerramentas />} />
        <Route path={APP_ROUTES.DESKTOP_RETAGUARDA_OPERACOES} element={<RetaguardaDesktopOperacoes />} />
        <Route path={APP_ROUTES.DESKTOP_RETAGUARDA_FINANCEIRO} element={<RetaguardaDesktopFinanceiro />} />
        <Route path={APP_ROUTES.DESKTOP_FRENTEDELOJA} element={<FrenteDeLojaDesktop />} />
        <Route path={APP_ROUTES.DESKTOP_FRENTEDELOJA_CADASTROS} element={<FrenteDeLojaDesktopCadastros />} />
        <Route path={APP_ROUTES.DESKTOP_FRENTEDELOJA_OPERACOES} element={<FrenteDeLojaDesktopOperacoes/>} />
        <Route path={APP_ROUTES.DESKTOP_FRENTEDELOJA_FERRAMENTAS} element={<FrenteDeLojaDesktopFerramentas />} />
        <Route path={APP_ROUTES.VALUATIONS} element={<Valuations />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;