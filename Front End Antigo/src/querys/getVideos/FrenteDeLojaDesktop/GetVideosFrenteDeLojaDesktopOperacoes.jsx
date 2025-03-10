import { gql } from "@apollo/client";

const getVideosFrenteDeLojaDesktopOperacoes = gql`
query getVideosFrenteDeLojaDesktopOperacoes {
  videos(where: {modulo: "Frente De Loja Desktop", AND: {subModulo: "Operações"}}) {
    titulo
    modulo
    subModulo
    videoId
  }
}
`;




export default getVideosFrenteDeLojaDesktopOperacoes;