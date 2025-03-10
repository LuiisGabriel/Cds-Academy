import { gql } from "@apollo/client";

const createNewVideo = gql`

mutation createVideo($titulo:String!, $modulo:String!, $subModulo: String!, $videoId:String!){
  createVideo(data: {titulo: $titulo, modulo: $modulo, subModulo: $subModulo, videoId: $videoId}){
    titulo
    modulo
    subModulo
    videoId
  }
}
`;


export default createNewVideo;