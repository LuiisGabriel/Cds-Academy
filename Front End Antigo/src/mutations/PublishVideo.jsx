import { gql } from "@apollo/client";

const publishNewVideo = gql`

mutation publishVideo($videoId: String!) {
  publishVideo(where: {videoId: $videoId}, to: PUBLISHED){
    videoId
  }
}
`;


export default publishNewVideo;