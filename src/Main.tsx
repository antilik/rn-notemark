import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';

import getEnvVars from '../config';
import Screens from './screens';

// @ts-ignore
const { API_URI } = getEnvVars;

const uri = API_URI;
const cache = new InMemoryCache();

const client = new ApolloClient({ uri, cache });

export default function Main() {
  return (
    <ApolloProvider client={client}>
      <Screens />
    </ApolloProvider>
  );
}
