import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import BemVindoTreinamentos from "../../components/BemVindoTreinamentos/BemVindoTreinamentos";


const treinamentos = [
  {
    id: 1,
    name: 'Retaguarda web',
    href: '/RetaguardaWeb',
    imageSrc: '',
    imageAlt: 'Retaguarda web',

  },
  {
    id: 2,
    name: 'Retaguarda desktop',
    href: '/RetaguardaDesktop',
    imageSrc: '',
    imageAlt: 'Retaguarda desktop',

  },
  {
    id: 3,
    name: 'Frente de loja Web',
    href: '/FrenteDeLojaWeb',
    imageSrc: '',
    imageAlt: 'Frente de loja Web',

  },
  {
    id: 4,
    name: 'Frente de loja desktop',
    href: '/FrenteDeLojaDesktop',
    imageSrc: '',
    imageAlt: 'Frente de loja desktop',

  },

]


const Treinamentos = () => {
  return (

    <>
      <nav className="sticky top-0 z-50"><Navbar /></nav>
      <div><BemVindoTreinamentos /></div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Treinamentos</h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
            {treinamentos.map((treinamento) => (
              <a key={treinamento.id} href={treinamento.href} className="group">
                <img
                  alt={treinamento.imageAlt}
                  src={treinamento.imageSrc}
                  className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:scale-102 group-hover:opacity-75 xl:aspect-7/8"
                />
                <h3 className="text-center mt-4 text-sm text-gray-700">{treinamento.name}</h3>
              </a>

            ))}
          </div>
        </div>
      </div>
    </>

  )
}

export default Treinamentos