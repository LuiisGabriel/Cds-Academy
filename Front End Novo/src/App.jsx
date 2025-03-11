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
        <Route path={APP_ROUTES.RETAGUARDAWEB} element={<RetaguardaWeb />} />
        <Route path={APP_ROUTES.FRENTEDELOJAWEB} element={<FrenteDeLojaWeb />} />
        <Route path={APP_ROUTES.RETAGUARDADESKTOP} element={<RetaguardaDesktop />} />
        <Route path={APP_ROUTES.FRENTEDELOJADESKTOP} element={<FrenteDeLojaDesktop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;