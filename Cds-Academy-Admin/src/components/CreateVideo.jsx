import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { API_ROUTES } from '../utils/constants';
import Navbar from './Navbar';
import { useQuery } from '@apollo/client';
import { getModulos, getSubModulos } from '../graphQl/Querys';

const CreateVideo = () => {
  const [titulo, setTitulo] = useState('');
  const [modulo, setModulo] = useState('');
  const [videoId, setVideoId] = useState('');
  const [subModulo, setSubModulo] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const modulos = useQuery(getModulos);
  const subModulos = useQuery(getSubModulos);

  const createVideo = async () => {
    try {
      setIsLoading(true);
      const response = await axios({
        method: 'POST',
        url: API_ROUTES.CREATE_VIDEO,
        data: {
          titulo,
          modulo,
          videoId,
          subModulo
        }
      });
      if (!response?.data) {
        console.log('Algo deu errado durante o cadstro: ', response);
        return;
      }
    }
    catch (err) {
      console.log('Ocorreu algum erro no cadastro: ', err);
    }
    finally {
      setIsLoading(false);
      alert('Video cadastrado com sucesso');
    }
  };

  return (
    <>
    <nav className="sticky top-0 z-50"><Navbar /></nav>
    <div className="w-full h-screen flex justify-center items-center bg-gray-800">
      <div className="w-1/2 h-3/4 shadow-lg rounded-md bg-white p-8 flex flex-col">
        <h2 className="text-center font-medium text-2xl mb-4">
          Cadastre um vídeo
        </h2>
        <div className="flex flex-1 flex-col justify-evenly">
          <input
            className="border-2 outline-none p-2 rounded-md"
            type="email"
            placeholder="titulo"
            value={titulo}
            required
            onChange={(e) => { setTitulo(e.target.value); }}
          />
              <select
                type="text"
                onChange={(e) => { setModulo(e.target.value); }}
                value={modulo}
                className="border-2 outline-none p-2 rounded-md"
              >
                <option disabled={true} value="">Escolha um módulo</option>
                {modulos.data?.modulos?.map((modulo) => (
                  <option
                    value={modulo.nome}
                  >
                    {modulo.nome}
                  </option>
                ))}
              </select>
              <select
                type="text"
                onChange={(e) => { setSubModulo(e.target.value); }}
                value={subModulo}
                className="border-2 outline-none p-2 rounded-md"
              >
                <option disabled={true} value="">Escolha um sub-módulo</option>
                {subModulos.data?.subModulos?.map((subModulo) => (
                  <option
                    value={subModulo.nome}
                  >
                    {subModulo.nome}
                  </option>
                ))}
              </select>
          <input
            className="border-2 outline-none p-2 rounded-md"
            type="email"
            placeholder="Video id" value={videoId}
            required
            onChange={(e) => { setVideoId(e.target.value); }}
          />

          <button
            className="
             flex justify-center
             p-2 rounded-md w-1/2 self-center
             bg-gray-800  text-white 
             hover:bg-gray-700"
            onClick={createVideo}
          >
            {
              isLoading ?
                <div className="mr-2 w-5 h-5 border-l-2 rounded-full animate-spin" /> : null
            }
            <span>
              Cadastrar
            </span>
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default CreateVideo;