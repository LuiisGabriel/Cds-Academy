import { gql } from "@apollo/client";

export const getVideos = gql`
query getVideos($modulo: String) {
  videos(first: 999999, stage: DRAFT, where: {modulo: $modulo}) {
    titulo
    modulo
    subModulo
    videoId
  }
}
`;




