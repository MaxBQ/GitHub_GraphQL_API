import { gql } from "@apollo/client";

export const QUERY_REPOSITORIES = gql`
  query Query($query: String!, $type: SearchType!, $first: Int) {
    search(query: $query, type: $type, first: $first) {
      nodes {
        ... on Repository {
          id
          name
          stargazerCount
          updatedAt
          url
          resourcePath
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      repositoryCount
    }
  }
`;
