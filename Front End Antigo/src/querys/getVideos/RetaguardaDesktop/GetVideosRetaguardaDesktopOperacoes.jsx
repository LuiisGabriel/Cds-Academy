import { gql } from "@apollo/client";

const getVideosRetaguardaDesktopOperacoes = gql`
query getVideosRetaguardaDesktopOperacoes {
  videos(where: {modulo: "Retaguarda Desktop", AND: {subModulo: "Operações"}}) {
    titulo
    modulo
    subModulo
    videoId
  }
}
`;




export default getVideosRetaguardaDesktopOperacoes;