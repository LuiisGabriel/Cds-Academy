import { useMutation } from "@apollo/client";
import { React, useState } from "react";
import Logo from "../../images/LOGO.png"
import createNewUsuario from "../../mutations/CreateNewUsuario";
import publishNewUsuario from "../../mutations/PublishUsuario";


const Cadastro = () => {

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
  });

  const [createUsuario] = useMutation(createNewUsuario);
  const [publishUsuario] = useMutation(publishNewUsuario);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { nome, email, senha } = formData;

    createUsuario({ variables: { nome, email, senha } })


      .then((response) => {
        publishUsuario({ variables: { email } })
        alert('Novo usuário cadastrado com sucesso!!!')
      })
      .catch((error) => {
        alert('Erro ao cadastrar novo usuário!')
      });
  };


  return (
    <>

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src={Logo}
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Cadastre-se
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">

            <div>

              <label htmlFor="nome" className="block text-sm/6 font-medium text-gray-900">
                Nome
              </label>
              <div className="mt-2">
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  value={formData.nome}
                  onChange={handleInputChange}
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="senha" className="block text-sm/6 font-medium text-gray-900">
                  Senha
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="senha"
                  name="senha"
                  type="text"
                  required
                  value={formData.senha}
                  onChange={handleInputChange}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-gray-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Cadastrar
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Já é cadastrado?
            <a href="/" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Faça o login
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default Cadastro