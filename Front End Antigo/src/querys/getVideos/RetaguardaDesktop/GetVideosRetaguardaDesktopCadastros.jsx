import { gql } from "@apollo/client";

const getVideosRetaguardaDesktopCadastros = gql`
query getVideosRetaguardaDesktopCadastros {
  videos(where: {modulo: "Retaguarda Desktop", AND: {subModulo: "Cadastros"}}) {
    titulo
    modulo
    subModulo
    videoId
  }
}
`;




export default getVideosRetaguardaDesktopCadastros;