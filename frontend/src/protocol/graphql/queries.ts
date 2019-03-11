import gql from "graphql-tag";

export const GET_DOGS = gql`
  {
    dogs {
      id
      breed
    }
  }`;