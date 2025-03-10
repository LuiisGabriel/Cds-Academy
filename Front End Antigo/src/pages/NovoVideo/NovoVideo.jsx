import Navbar from "../../components/Navbar/Navbar";
import { useMutation, useQuery, useLazyQuery } from "@apollo/client";
import { React, useState, useEffect } from "react";
import createNewVideo from "../../mutations/createNewVideo";
import publishNewVideo from "../../mutations/PublishVideo";
import getModulos from "../../querys/GetModulos"
import getSubModulos from "../../querys/GetSubModulos";

const NovoVideo = () => {

  const [formData, setFormData] = useState({
    titulo: '',
    modulo: '',
    subModulo: '',
    videoId: '',
  });

  useEffect(() => {
  }, [formData]);

  const [createVideo] = useMutation(createNewVideo);
  const [publishVideo] = useMutation(publishNewVideo);

  const modulos = useQuery(getModulos);
  const subModulos = useQuery(getSubModulos);

  const handleInputChange = async (e) => {

    const { name, value } = e.target;
    setFormData((FormData) => ({
      ...FormData,
      [name]: value,
    }));
  };

  const handleModuloChange = async (e) => {

    const { name, value } = e.target;
    setFormData((FormData) => ({
      ...FormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { titulo, modulo, subModulo, videoId } = formData;

    createVideo({ variables: { titulo, modulo, subModulo, videoId } })

      .then((response) => {
        publishVideo({ variables: { videoId } })
        alert('Novo vídeo cadastrado com sucesso!!!')
      })
      .catch((error) => {
        alert('Erro ao cadastrar novo vídeo!')
      });

    setFormData({
      titulo: '',
      modulo: '',
      subModulo: '',
      videoId: '',
    })

  };

  return (
    <>
      <nav className="sticky top-0 z-50"><Navbar /></nav>

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="titulo" className="block text-sm/6 font-medium text-gray-900">
                Título
              </label>
              <div className="mt-2">
                <input
                  id="titulo"
                  type="text"
                  name="titulo"
                  value={formData.titulo}
                  onChange={handleInputChange}
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-bg-gray-800 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label htmlFor="modulo" className="block text-sm/6 font-medium text-gray-900">
                Modulo
              </label>
            </div>
            <div className="mt-2">
              <select
                id="modulo"
                type="text"
                name="modulo"
                onChange={handleModuloChange}
                value={formData.modulo}
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-bg-gray-800 sm:text-sm/6"
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

            </div>

            <div className="flex items-center justify-between">
              <label htmlFor="submodulo" className="block text-sm/6 font-medium text-gray-900">
                sub-modulo
              </label>
            </div>
            <div className="mt-2">
              <select
                id="subModulo"
                type="text"
                name="subModulo"
                onChange={handleInputChange}
                value={formData.subModulo}
                placeholder="selecione"
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-bg-gray-800 sm:text-sm/6"
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
            </div>

            <div className="flex items-center justify-between">
              <label htmlFor="videoId" className="block text-sm/6 font-medium text-gray-900">
                VideoId
              </label>
            </div>
            <div className="mt-2">
              <input
                id="videoId"
                type="text"
                name="videoId"
                value={formData.videoId}
                onChange={handleInputChange}
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-bg-gray-800 sm:text-sm/6"
              />
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Cadastrar Video
              </button>
            </div>
          </form>
          <div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NovoVideo