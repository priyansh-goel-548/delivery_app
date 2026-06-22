import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useLayoutEffect, useState } from 'react';
import '../../global.css'
import { CompositeNavigationProp, RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@/navigator/RootNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabStackParamList } from '@/navigator/TabNavigator';
import "../../global.css"
import useOrders from '@/hooks/useOrders';
import { Image } from '@rneui/themed';
import { Button } from '@react-navigation/elements';
import OrderCard from '@/components/OrderCard';

export type OrdersScreenNavigationProp = CompositeNavigationProp<BottomTabNavigationProp<TabStackParamList, 'Orders'>, NativeStackNavigationProp <RootStackParamList>>;
const OrdersScreen = () => {
  const navigation = useNavigation<OrdersScreenNavigationProp>();
  const { loading, error, orders } = useOrders();
  const [ascending, setAscending] = useState<boolean>(false);

  useLayoutEffect(()=> {
    navigation.setOptions({
      headerShown: false, 
      tabBarLabel: ({focused, color}) => (
        <Text style={{color: focused ? '#EB6A7C' : color, fontSize: 10}}>Orders</Text>
      )
  })
}, []);

  return (
    <SafeAreaView>
      <ScrollView className = "bg-[#EB6A7C]">
        <Image source={{uri: 'https://links.papareact.com/m51'}} style={{ width: '100%', height: 300 }}
        PlaceholderContent = {<ActivityIndicator/>} 
      />

      <View>
        <Button color = "pink" 
        // titleStyle={{ color: 'gray', fontWeight: '400'}} 
        className = "py-2 px-5"
          onPress={() => setAscending(!ascending)}>
          {ascending ? 'Showing: Oldest First' : 'Showing: Most Recent First'}
        </Button>

        {orders?.sort((a, b) => {
          if (ascending) {
            return new Date(a.created_at) > new Date(b.created_at) ? 1 : -1;}
          else {
            return new Date(a.created_at) < new Date(b.created_at) ? 1 : -1;
          }
        }).map((order) => (
          <OrderCard key = {order.trackingId} item = {order} />
        ))}
      </View>

      </ScrollView>
    </SafeAreaView>
  );
}

export default OrdersScreen;
