import { gql } from "@apollo/client";

const publishNewUsuario = gql`

mutation publishUsuario($email: String!) {
  publishUsuario(where: {email: $email}, to: PUBLISHED){
    email
  }
}
`;


export default publishNewUsuario;