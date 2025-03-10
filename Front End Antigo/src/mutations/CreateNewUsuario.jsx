import { gql } from "@apollo/client";

const createNewUsuario = gql`

mutation createUsuario($nome:String!, $email:String!, $senha:String!){
  createUsuario(data: {nome: $nome, email: $email, senha: $senha}){
    nome
    email
    senha
  }
}
`;


export default createNewUsuario;