import { gql } from "@apollo/client";

const getUsuarioLogin = gql`

query getUsuarioLogin ($email: String!){
    usuario(where: {email: $email}) {
      email
      senha
    }
  }
`;

export default getUsuarioLogin;
