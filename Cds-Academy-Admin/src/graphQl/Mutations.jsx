import { gql } from "@apollo/client";

export const CreateAsset = gql`
mutation createAsset($uploadUrl: String! ) {
    createAsset(data: {uploadUrl: $uploadUrl})
    {
      id
      url
    }
  }
`;