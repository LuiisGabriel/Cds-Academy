import { gql } from "@apollo/client";

const getSubModulos = gql`
query getSubModulos {
  subModulos(first: 999999) {
    nome
  }
}
`;

export default getSubModulos;