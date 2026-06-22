import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Card, Icon } from '@rneui/themed';
import { CompositeNavigationProp, RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@/navigator/RootNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabStackParamList } from '@/navigator/TabNavigator';
import "../../global.css"

export type OrdersScreenNavigationProp = CompositeNavigationProp<BottomTabNavigationProp<TabStackParamList, 'Orders'>, NativeStackNavigationProp <RootStackParamList>>;

type Props = {
    item: Order;

}

const OrderCard = ({item}: Props) => {
    const navigation = useNavigation<OrdersScreenNavigationProp>();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Order", { order: item})}>
      <Card containerStyle = {{ paddingHorizontal: 5, borderRadius: 8}}>
        <View className = "flex-row justify-between items-center ">
            <View>
                <Icon name = "truckidelivery"
            color = {"#EB6A7C"}
            type = "material-community"/>
            <Text style= {{ fontSize: 10}}>
                {new Date(item.createdAt).toDateString()}
            </Text>
            </View>

            <View>
                <Text className='text-gray-400 font-light'>{item.carrier} - {item.trackingId}</Text>
                <Text className='text-gray-400 text-xl'>{item.trackingItems.customers.name}</Text>
            </View>

            <View className='flex-row items-center'>
                <Text className='text-sm' style = {{color: "#EB6A7C"}} >{item.trackingItems.item.length}</Text>
                <Text></Text>
            </View>
        </View>
      </Card>
    </TouchableOpacity>
  )
}

export default OrderCard