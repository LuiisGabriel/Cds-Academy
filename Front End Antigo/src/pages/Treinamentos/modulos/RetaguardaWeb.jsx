import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';

const treinamentos = [
  {
    id: 1,
    name: 'Cadastros',
    href: '/RetaguardaWeb/Cadastros',
    imageSrc: '',
    imageAlt: 'Cadastros',

  },
  {
    id: 2,
    name: 'Operações',
    href: '/RetaguardaWeb/Operacoes',
    imageSrc: '',
    imageAlt: 'Operações',

  },
  {
    id: 3,
    name: 'Financeiro',
    href: '/RetaguardaWeb/Financeiro',
    imageSrc: '',
    imageAlt: 'Financeiro',

  },

]


const RetaguardaWeb = () => {

  return (
    <>
      <nav className="sticky top-0 z-50"><Navbar /></nav>
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

export default RetaguardaWeb