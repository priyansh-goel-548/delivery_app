import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import "../../global.css"
import { CompositeNavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabStackParamList } from '@/navigator/TabNavigator';
import { RootStackParamList } from '@/navigator/RootNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Deliverycard from '@/components/Deliverycard';

type OrderScreenRouteProp = RouteProp<RootStackParamList,"Order">;

export type OrdersScreenNavigationProp = CompositeNavigationProp<BottomTabNavigationProp<TabStackParamList, "Orders">,  NativeStackNavigationProp<RootStackParamList>>;


const OrderScreen = () => {
    const navigation = useNavigation<OrdersScreenNavigationProp>();
    const {params: {order}, } = useRoute<OrderScreenRouteProp>();

    useLayoutEffect(() =>{
        navigation.setOptions({
            headerTitle: order.trackingItems.customer.name,
            headerTintColor: "#EB6A7C",
            headerTitleStyle: { color: "black"},
            headerBackTitle: "Deliveries",
        });
    }, [order])
  return (
    <View className='mt-2'>
      <Deliverycard order={order} fullWidth/>
    </View>
  )
}

export default OrderScreen