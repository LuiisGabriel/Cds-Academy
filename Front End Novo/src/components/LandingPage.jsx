import React from 'react';
import { useUser } from '../lib/customHooks';
import { LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import{APP_ROUTES} from '../utils/constants';
import Navbar from './Navbar';
import Imagem1 from '../assets/perfil.jpg';
import conteudo from '../assets/LOGO.png';

const LandingPage = () => {
      const { user, authenticated } = useUser();
      if (!user || !authenticated) {
        return <div className="p-16 bg-gray-800 h-screen flex justify-center items-center">
          <div className="ml-2 w-8 h-8 border-l-2 rounded-full animate-spin border-white" />
        </div>;
      }
  return (
    <>
    
      <nav className="sticky top-0 z-50"><Navbar /></nav>
      <div className="bg-gray-300">
        <div className="relative overflow-hidden ">
          <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-5 lg:pb-70 ">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <div className="sm:max-w-lg">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Aqui você vai encontrar tudo oque precisa saber sobre a CDS!
                </h1>
                <p className="mt-4 text-xl text-gray-500">
                  Servir nossos clientes é nossa meta diária e os posicionamos no centro de tudo que fazemos. Nosso objetivo é exceder suas expectativas oferecendo agilidade e precisão nas suas solicitações. Acompanhar a eficiência de nossos atendimentos faz parte de nossa rotina através de pesquisas que avaliam o nível de satisfação de nossos usuários.
                </p>
              </div>
              <div>
                <div className="mt-10">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                  >
                    <div className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                      <div className="flex items-center space-x-6 lg:space-x-8">
                        <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                            <img
                              alt=""
                              src={Imagem1}
                              className="size-full object-cover"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              alt=""
                              src={Imagem1}
                              className="size-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              alt=""
                              src={Imagem1}
                              className="size-full object-cover"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              alt=""
                              src={Imagem1}
                              className="size-full object-cover"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              alt=""
                              src={Imagem1}
                              className="size-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              alt=""
                              src={Imagem1}
                              className="size-full object-cover"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              alt=""
                              src={Imagem1}
                              className="size-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    href={APP_ROUTES.TRAINMENTS}
                    className="inline-block rounded-md border border-transparent bg-gray-800 px-8 py-3 text-center font-medium text-white hover:bg-gray-600"
                  >
                    Começe
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <svg
              aria-hidden="true"
              className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            >
              <defs>
                <pattern
                  x="50%"
                  y={-1}
                  id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                  width={200}
                  height={200}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M100 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                <path
                  d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                  strokeWidth={0}
                />
              </svg>
              <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
            </svg>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="lg:max-w-lg">
                  <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                    Quem somos?
                  </h1>
                  <p className="mt-6 text-xl/8 text-gray-700">
                    A CDS – Consultoria e Desenvolvimento de Sistemas – é uma empresa especializada na área de Tecnologia da Informação. Fundada em 2000 em Recife-Pernambuco, o empreendimento surgiu devido à necessidade de um dos sócios que atuava no segmento comercial em automatizar seu próprio negócio.
                  </p>
                </div>
              </div>
            </div>
            <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                alt=""
                src={conteudo}
                className="w-[48rem] max-w-none rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem]"
              />
            </div>
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
                  <p>
                    Em um mundo competitivo, quem tem informação tem diferenciação.
                    A CDS lhe oferece a ferramenta para obter o controle e organização das informações do seu negócio.

                    O primeiro produto lançando no mercado foi o Software “CDS Comercial”, uma ferramenta completa de automação comercial (compras, estoque, vendas, financeiro e recursos humanos).
                  </p>
                  <ul role="list" className="mt-8 space-y-8 text-gray-600">
                    <li className="flex gap-x-3">
                      <LockClosedIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                      <span>
                        <strong className="font-semibold text-gray-900">Confiabilidade.</strong> Um bom treinamento nunca tem fim. A capacitação constante de nossos colaboradores é o alicerce para garantirmos precisão no atendimento e alto grau de qualificação técnica.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <ServerIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                      <span>
                        <strong className="font-semibold text-gray-900">Técnologia.</strong> Seguindo as principais tendências tecnológicas, a CDS está incessantemente na busca permanente por novas ideias e inovações mercadológicas.
                      </span>
                    </li>
                  </ul>
                  <p className="mt-8">
                    Estamos a 19 anos no mercado. Nossa carteira de clientes tem abrangência nacional (São Paulo, Rio de Janeiro, Minas Gerais, Fortaleza, Salvador, Maceió, Recife, João Pessoa, Natal, Fernando de Noronha entre outros).
                  </p>
                  <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Atendemos suas necessidades.</h2>
                  <p className="mt-6">
                    São mais de 2000 pontos instalados e distribuídos entre os mais variados segmentos de negócio. Nossas soluções integradas atendem a todos os processos de sua organização. Nossos softwares atendem diversos ramos de atuação distribuídos entre diversos setores. Seja qual for o seu segmento de atuação, você irá se identificar com uma de nossas soluções.

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
export default LandingPage;