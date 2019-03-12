import {ApolloProvider, useApolloClient, useQuery} from "react-apollo-hooks";
import ApolloClient from "apollo-boost";
import {resolvers, defaults} from "./resolvers";
import {typeDefs} from "./schema";

const MyApolloClient = new ApolloClient({
  uri: "http://localhost:9090/graphql",
  clientState: {
    defaults,
    resolvers,
    typeDefs
  }
});

export {
  MyApolloClient as GraphQLClient,
  ApolloProvider as GraphQLProvider,
  useApolloClient as useGraphQLClient,
  useQuery,
};