import { gql } from "@apollo/client";

export const getVideos = gql`
query getVideos {
  videos(first:999999, stage: DRAFT) {
    titulo
    modulo
    subModulo
    videoId
  }
}
`;

export const getModulos = gql`
query getModulos {
  modulos(first: 999999, stage: DRAFT) {
    nome
  }
}
`;

export const getSubModulos = gql`
query getSubModulos {
  subModulos(first: 999999, stage: DRAFT) {
    nome
  }
}
`;




