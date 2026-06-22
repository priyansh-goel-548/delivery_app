import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base/dist/Icon/Icon'
import { useNavigation } from '@/.expo/types/router';
import { CompositeNavigationProp, RouteProp, useRoute } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabStackParamList } from '@/navigator/TabNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/navigator/RootNavigator';
import useCustomersOrders from '@/hooks/useCustomersOrders';
import { FlatList } from 'react-native-reanimated/lib/typescript/Animated';
import Deliverycard from '@/components/Deliverycard';
import '../../global.css'

type ModalScreenNavigationProps = CompositeNavigationProp<BottomTabNavigationProp<TabStackParamList>, NativeStackNavigationProp<RootStackParamList, "MyModal">>

type ModalScreenRouteProp = RouteProp<RootStackParamList, "MyModal">

const ModalScreen = () => {
    const navigation = useNavigation<ModalScreenNavigationProps>();
    const {params: {name, userId}} = useRoute<ModalScreenRouteProp>();
    const {loading, error, orders} = useCustomersOrders(userId);

  return (
    <View>
      <TouchableOpacity  onPress= {navigation.goBack} style = {{ position: 'absolute', top: 50, right: 50, bottom: 50}}>
        <Icon name="closecircle" type='Antdesign'/>
      </TouchableOpacity>

      <View style = {{ marginTop: 10}}>
        <View style = {{ borderWidth: 1, paddingVertical: 5, borderColor: '#59C1CC'}}>
            <Text className="text-lg font-bold text-center">{name}</Text>
            <Text className = "text-center italic text-sm">deliveries</Text>
        </View>
      </View>
      <FlatList
        contentContainerStyle={{ paddingBottom: 200}}
        data={orders}
        keyExtractor={(order) => order.trackingId}
        renderItem={({ item: order }) => <Deliverycard order={order} />}
      />
    </View>
  )
}

export default ModalScreen