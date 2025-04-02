import React from 'react';
import { useUser } from '../lib/customHooks';
import { APP_ROUTES } from '../utils/constants';
import Navbar from './Navbar';
import Otica from '../assets/Ótica.jpg';
import Fabrica from '../assets/Fabrica.jpg';


const funcoes = [

    {
        id: 1,
        name: 'Cadastrar usuário',
        href: APP_ROUTES.CREATE_USER,
        imageSrc: Fabrica,
        imageAlt: 'Cadastrar usuário',

    },

    {
        id: 2,
        name: 'Cadastrar novo vídeo',
        href: APP_ROUTES.CREATEVIDEO,
        imageSrc: Otica,
        imageAlt: 'Cadastrar novo vídeo',

    },
]

const AdminHomePage = () => {
  const { user, authenticated } = useUser();

  if (!user || !authenticated || user.role !== 'ADMIN') {
    return <div className="p-16 bg-gray-300 h-screen flex justify-center items-center">
      <div className="ml-2 w-8 h-8 border-l-2 rounded-full animate-spin border-white" />
    </div>;
  }

  return (
    <>
      <nav className="sticky top-0 z-50"><Navbar /></nav>
      <div className="w-full h-auto min-h-screen flex justify-center p-16 bg-gray-300">
        <div className="flex flex-col items-center">
          <div className=" sm:text-5xl pb-10">
            <h1 className="text-5xl text-center font-bold tracking-tight text-gray-900">
            Bem-vindo ao painel de controle CDS academy!
            </h1>
          </div>
          <div className=" sm:text-4xl pb-4 w-2/3 text-center pb-16">
          <h1 className="text-3xl font-normal tracking-tight text-gray-700">
            Aqui você pode gerenciar o cadastro de vídeos, usuários, administradores, etc.
          </h1>
          </div>

          <div className="flex flex-col shadow-lg rounded-md bg-white p-8 w-3/3">
          <div className="pb-8">
          <h1 className="text-2xl font-normal tracking-tight">
          acesso rápido:
          </h1>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 items-center">
            {funcoes.map((funcao) => (
              <a key={funcao.id} href={funcao.href} className="group">
                <img className="aspect-video w-full rounded-lg bg-red-600 group-hover:scale-102 group-hover:opacity-75 xl:aspect-video" src={funcao.imageSrc}/>
                <h3 className="text-center mt-4 text-sm text-gray-700">{funcao.name}</h3>
              </a>
            ))}
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AdminHomePage;