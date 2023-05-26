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

export const QUERY_REPOSITORIES_MY = gql`
  query getRepositories($isFork: Boolean, $first: Int) {
    viewer {
      repositories(isFork: $isFork, first: $first) {
        nodes {
          id
          name
          stargazerCount
          updatedAt
          url
          resourcePath
        }
      }
    }
  }
`;
