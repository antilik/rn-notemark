import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import getEnvVars from '../config';
import Screens from './screens';

const { API_URI } = getEnvVars();

const client = new ApolloClient({
  uri: API_URI,
  cache: new InMemoryCache(),
  defaultOptions: { watchQuery: { fetchPolicy: 'cache-and-network' } },
});

export default function Main() {
  return (
    <ApolloProvider client={client}>
      <Screens />
    </ApolloProvider>
  );
}
