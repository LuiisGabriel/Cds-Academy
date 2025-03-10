import { gql } from "@apollo/client";

const getVideosFrenteDeLojaDesktopRelatorios = gql`
query getVideosFrenteDeLojaDesktopRelatorios {
  videos(where: {modulo: "Frente De Loja Desktop", AND: {subModulo: "Relatórios"}}) {
    titulo
    modulo
    subModulo
    videoId
  }
}
`;




export default getVideosFrenteDeLojaDesktopRelatorios;