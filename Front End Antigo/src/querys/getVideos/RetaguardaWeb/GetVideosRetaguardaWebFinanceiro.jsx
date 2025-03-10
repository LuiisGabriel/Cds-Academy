import { gql } from "@apollo/client";

const getVideosRetaguardaWebFinanceiro = gql`
query getVideosRetaguardaWebFinanceiro {
  videos(first:999999, where: {modulo: "Retaguarda Web", AND: {subModulo: "Financeiro"}}) {
    titulo
    modulo
    subModulo
    videoId
  }
}
`;




export default getVideosRetaguardaWebFinanceiro;