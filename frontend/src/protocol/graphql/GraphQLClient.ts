import {ApolloProvider, useApolloClient, useQuery} from "react-apollo-hooks";
import {ApolloLink} from "apollo-link";
import {ApolloClient} from "apollo-client";
import {InMemoryCache} from "apollo-cache-inmemory";
import {HttpLink} from "apollo-link-http";
import {onError} from "apollo-link-error";

const MyApolloClient = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    new HttpLink({
      uri: 'http://localhost:9090/graphql',
      fetchOptions: {
        mode: 'no-cors',
      }
    })
  ]),
  cache: new InMemoryCache()
});

export {
  MyApolloClient as GraphQLClient,
  ApolloProvider as GraphQLProvider,
  useApolloClient as useGraphQLClient,
};