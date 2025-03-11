import { gql } from "@apollo/client";

export const getVideos = gql`
query getVideos {
  videos(first:999999) {
    titulo
    modulo
    subModulo
    videoId
  }
}
`;




