import { gql } from "@apollo/client";

const getVideos = gql`
query getVideos {
  videos(first:999999) {
    titulo
    modulo
    subModulo
    videoId
  }
}
`;




export default getVideos;