import React, { useLayoutEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomerScreen from '@/app/(tabs)/CustomersScreen';
import OrdersScreen from '@/app/(tabs)/OrdersScreen';
import { useNavigation } from '@/.expo/types/router';

export type TabStackParamList = {
  Customers: undefined;
  Orders: undefined;
}

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = () => {
  const navigation = useNavigation();
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <Tab.Navigator>
      <Tab.Screen name="Customers" component={CustomerScreen} />
      <Tab.Screen name = "Orders" component={OrdersScreen} />
    </Tab.Navigator>
  )
}

export default TabNavigator