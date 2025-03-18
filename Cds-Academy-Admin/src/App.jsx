import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { APP_ROUTES } from './utils/constants';
import LandingPage from './components/LandingPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import CreateVideo from './components/CreateVideo';
import Registers from './components/Registers';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Navigate to={APP_ROUTES.LANDINGPAGE} />} />
        <Route path={APP_ROUTES.SIGN_UP} exact element={<SignUp />} />
        <Route path={APP_ROUTES.SIGN_IN} element={<SignIn />} />
        <Route path={APP_ROUTES.LANDINGPAGE} element={<LandingPage />} />
        <Route path={APP_ROUTES.PROFILE} element={<Profile />} />
        <Route path={APP_ROUTES.CREATEVIDEO} element={<CreateVideo />} />
        <Route path={APP_ROUTES.REGISTERS} element={<Registers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;