import { gql } from 'graphql-request';

export const CreateNextUserMutation = gql`
    mutation CreateNextUser($userData: NextUserCreateInput!) {
      createNextUser(data: $userData) {
      id
      email
    }
  }
`;

export const GetUserByEmailQuery = gql`
    query getUserByEmailQuery($email: String!) {
      nextUser(where: { email: $email }, stage: DRAFT) {
      id
      email
      firstname
      lastname
      password
    }
  }
`;

export const CreateNextAdminUserMutation = gql`
    mutation CreateNextAdminUser($adminUserData: NextAdminUserCreateInput!) {
      createNextAdminUser(data: $adminUserData) {
      id
      email
    }
  }
`;

export const CreateVideoMutation = gql`
    mutation CreateVideo($videoData: VideoCreateInput!) {
      createVideo(data: $videoData) {
      id
      titulo
    }
  } 
 `;

export const GetAdminUserByEmailQuery = gql`
    query getAdminUserByEmailQuery($email: String!) {
      nextAdminUser(where: { email: $email }, stage: DRAFT) {
      id
      email
      firstname
      lastname
      password
    }
  }
`;



