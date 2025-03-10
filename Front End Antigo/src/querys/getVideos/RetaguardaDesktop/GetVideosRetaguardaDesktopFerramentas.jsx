import { gql } from "@apollo/client";

const getVideosRetaguardaDesktopFerramentas = gql`
query getVideosRetaguardaDesktopFerramentas {
  videos(where: {modulo: "Retaguarda Desktop", AND: {subModulo: "Ferramentas"}}) {
    titulo
    modulo
    subModulo
    videoId
  }
}
`;




export default getVideosRetaguardaDesktopFerramentas;