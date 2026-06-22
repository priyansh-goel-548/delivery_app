import "./global.css"
import React from 'react';
import { ApolloProvider } from "@apollo/client/react";
import client from './lib/apollo';
import { NavigationContainer } from '@react-navigation/native'; 
import RootNavigator from "./navigator/RootNavigator";
export default function App() {
  return (
    <>
    <ApolloProvider client={client}>
    <NavigationContainer>
        <RootNavigator />
    </NavigationContainer>
    </ApolloProvider>
    </>
  );
}