import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import '../../global.css'

const OrdersScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-pink-300
    ">
      <Text>Orders</Text>
    </SafeAreaView>
  );
}

export default OrdersScreen;
