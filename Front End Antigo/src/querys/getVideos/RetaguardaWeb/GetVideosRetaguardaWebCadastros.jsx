import { gql } from "@apollo/client";

const getVideosRetaguardaWebCadastros = gql`
query getVideosRetaguardaWebCadastros {
  videos(where: {modulo: "Retaguarda Web", AND: {subModulo: "Cadastros"}}) {
    titulo
    modulo
    subModulo
    videoId
  }
}
`;




export default getVideosRetaguardaWebCadastros;