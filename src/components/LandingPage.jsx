import React from 'react';
import { APP_ROUTES } from '../utils/constants';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import VisitNavbar from './VisitNavBar';
import { Carousel, Typography, Button } from '@material-tailwind/react';
import Logo from '../assets/LOGO.png'
import FrenteDeLoja from '../assets/FrenteDeLoja.jpg';
import Retaguarda from '../assets/Retaguarda.jpg';
import Otica from '../assets/Ótica.jpg';
import Fabrica from '../assets/Fabrica.jpg';
import PetShop from '../assets/PetShop.jpg';
import Nfe from '../assets/MóduloNfe.jpg';
import Light from '../assets/Light.jpg';
import LandingImage from '../assets/image.png';

const imagens = [
  {
    id: 1,
    Src: FrenteDeLoja,
    Alt: 'FrenteDeLoja',

  },
  {
    id: 2,
    Src: Retaguarda,
    Alt: 'Retaguarda',

  },
  {
    id: 3,
    Src: PetShop,
    Alt: 'PetShop',

  },
  {
    id: 4,
    Src: Light,
    Alt: 'Light',

  },
  {
    id: 5,
    Src: Otica,
    Alt: 'Otica',

  },
  {
    id: 6,
    Src: Fabrica,
    Alt: 'Fabrica',

  },
  {
    id: 7,
    Src: Nfe,
    Alt: 'Nfe',

  },

]

const LandingPage = () => {


  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#1e2939") : setnavColor("transparent");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-gray-800"
        style={{
          backgroundColor: navColor,
          transition: "all 1s"
        }}><VisitNavbar /></nav>

      <div className='flex items-center justify-center'>
        <div
          style={{ '--image-url': `url(${LandingImage})` }}
          className="fixed h-auto h-screen w-screen top-0 py-70 px-16 items-center justify-center bg-[image:var(--image-url)] bg-cover">
          <div className="text-center">
            <h2 className="text-6xl font-semibold tracking-tight text-balance text-white sm:text-6xl">
              Bem vindo ao CDS academy.
            </h2>
            <p className="mt-6 text-lg/8 text-pretty text-white">
              teste teste teste teste teste teste teste teste teste teste teste teste.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 ">
              <a
                href={APP_ROUTES.SIGN_UP}
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white "
              >
                Comece
              </a>
              <a href={APP_ROUTES.ABOUT} className="text-sm/6 font-bold text-white hover:scale-105 hover:text-gray-300">
                Sobre nós <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        <div className='z-1 w-full pt-50 pointer-events-none'>
          <div className="flex justify-center pt-128">
            <Carousel
              className="w-[57rem] rounded-t-3xl bg-white/5 pointer-events-auto"
              autoplay={true}
              loop={true}
            >
              <div className="relative h-full w-full">
                <img
                  src={Nfe}
                  alt="image 1"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                  <div className="w-3/4 text-center md:w-2/4">
                    <Typography
                      variant="h1"
                      color="white"
                      className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                    >
                      Módulo Retaguarda
                    </Typography>
                    <Typography
                      variant="lead"
                      color="white"
                      className="mb-12 opacity-80"
                    >
                      It is not so much for its beauty that the forest makes a claim
                      upon men&apos;s hearts, as for that subtle something, that quality
                      of air that emanation from old trees, that so wonderfully changes
                      and renews a weary spirit.
                    </Typography>
                    <div className="flex justify-center gap-2">
                      <Button size="lg" color="white" className='hover:bg-gray-300 hover:scale-105'>
                        Descubra
                      </Button>
                      <Button size="lg" color="white" variant="text" className='hover:scale-105'>
                        Sei lá
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>

          <div className='h-200 bg-gray-300 flex flex-col items-center text-black'>
            conteúdo

            <a href={APP_ROUTES.ABOUT} className="h-10 text-black pointer-events-auto py-30">
              index test
            </a>
          </div>

        </div>
      </div>
    </>
  );
}
export default LandingPage;