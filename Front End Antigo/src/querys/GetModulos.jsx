import { gql } from "@apollo/client";

const getModulos = gql`
query getModulos {
  modulos(first: 999999) {
    nome
  }
}
`;

export default getModulos;
