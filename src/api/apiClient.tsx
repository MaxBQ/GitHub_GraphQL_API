import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
});
const authLink = setContext((_, { headers }) => {
  const token =
    "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";
  return {
    headers: {
      ...headers,
      authorization: token ? `bearer ${token}` : "",
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
