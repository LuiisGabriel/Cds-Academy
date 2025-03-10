import { gql } from "@apollo/client";

const getVideosFrenteDeLojaWebOperacoes = gql`
query getVideosFrenteDeLojaWebOperacoes {
  videos(where: {modulo: "Frente De Loja Web", AND: {subModulo: "Operações"}}) {
    titulo
    modulo
    subModulo
    videoId
  }
}
`;




export default getVideosFrenteDeLojaWebOperacoes;