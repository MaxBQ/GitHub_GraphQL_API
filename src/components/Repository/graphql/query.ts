import { gql } from "@apollo/client";

export const QUERY_REPOSITORY = gql`
  query Query($first: Int, $owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      name
      stargazerCount
      updatedAt
      owner {
        avatarUrl
        url
      }
      description
      languages(first: $first) {
        totalCount
        nodes {
          name
        }
      }
    }
  }
`;
