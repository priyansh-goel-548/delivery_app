import "./global.css"
import { Text, View } from "react-native";
import React from 'react';
import { ApolloProvider } from "@apollo/client/react";
import client from './lib/apollo';
import { NavigationContainer } from '@react-navigation/native'; 
import CustomerScreen from "./app/(tabs)/CustomersScreen";
import OrdersScreen from "./app/(tabs)/OrdersScreen";
import {StyleSheet} from 'react-native';
export default function App() {
  return (
    <>
    <ApolloProvider client={client}>
    <NavigationContainer>
        <CustomerScreen />
        <OrdersScreen />
    </NavigationContainer>
    </ApolloProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});