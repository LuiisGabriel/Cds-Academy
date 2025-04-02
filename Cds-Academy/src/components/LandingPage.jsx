import React from 'react';
import { useUser } from '../lib/customHooks';
import { LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import { APP_ROUTES } from '../utils/constants';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import FrenteDeLoja from '../assets/FrenteDeLoja.jpg';
import Retaguarda from '../assets/Retaguarda.jpg';
import Otica from '../assets/Ótica.jpg';
import Fabrica from '../assets/Fabrica.jpg';
import PetShop from '../assets/PetShop.jpg';
import Nfe from '../assets/MóduloNfe.jpg';
import Light from '../assets/Light.jpg';
import CdsDesktop from '../assets/CDSDESKTOP.png';
import VisitNavbar from './VisitNavBar';

const LandingPage = () => {

  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 15 ? setnavColor("#1e2939") : setnavColor("transparent");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <>
      <div className='bg-gray-800 h-auto h-screen'>
        <nav className="sticky top-0 z-50 bg-gray-800"
          style={{
            backgroundColor: navColor,
            transition: "all 0.5s"
          }}><VisitNavbar /></nav>

        <div className='flex items-center justify-center h-auto h-screen'>
          <div className=" h-auto h-screen py-32  px-16 items-center justify-center">
            <div className="fixed text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
                Bem vindo ao CDS academy .
              </h2>
              <p className="mt-6 text-lg/8 text-pretty text-gray-300">
                teste teste teste teste teste teste teste teste teste teste teste teste.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href={APP_ROUTES.SIGN_IN}
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Comece
                </a>
                <a href={APP_ROUTES.ABOUT} className="text-sm/6 font-semibold text-white">
                  Sobre nós <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-center z-40 pt-128">
            <img
              alt="App screenshot"
              src={Nfe}
              className="w-[57rem] rounded-md bg-white/5"
            />
          </div>
        </div>
        
        
      </div>














    </>
  );
}
export default LandingPage;