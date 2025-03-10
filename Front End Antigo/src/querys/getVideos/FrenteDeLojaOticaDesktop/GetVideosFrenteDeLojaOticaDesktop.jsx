import { gql } from "@apollo/client";

const getVideosFrenteDeLojaOticaDesktop = gql`
query getVideosFrenteDeLojaOticaDesktop {
  videos(where: {modulo: "Frente De Loja Desktop", AND: {subModulo: "Otica"}}) {
    titulo
    modulo
    subModulo
    videoId
  }
}
`;




export default getVideosFrenteDeLojaOticaDesktop;