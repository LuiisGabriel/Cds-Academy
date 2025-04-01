import { gql } from "@apollo/client";

export const getVideos = gql`
query getVideos($modulo: String, $subModulo: String, $ambiente: String) {
  videos(
    first: 999999
    stage: DRAFT
    where: {modulo: $modulo, AND: {subModulo: $subModulo, AND: {ambiente: $ambiente}}}
  ) {
    id
    titulo
    modulo
    subModulo
    url
  }
}
`;




