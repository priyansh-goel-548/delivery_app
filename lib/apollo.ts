import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://ups-clone-de1a1-default-rtdb.firebaseio.com/', // replace this
  }),
  cache: new InMemoryCache(),
});

export default client;