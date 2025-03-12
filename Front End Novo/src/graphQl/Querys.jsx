import { gql } from "@apollo/client";

export const getVideos = gql`
query getVideos {
  videos(first:10) {
    titulo
    modulo
    subModulo
    videoId
  }
}
`;




