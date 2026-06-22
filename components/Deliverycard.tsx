import { View, Text } from 'react-native'
import React from 'react'
import { Card, Divider, Icon } from '@rneui/base';
import "../../global.css"
import MapView, {Marker} from 'react-native-maps';

type Props = {
    order: Order;
    fullWidth?: boolean;
};

const Deliverycard = ({ order, fullWidth }: Props) => {
  return (
    <Card
  containerStyle={{
    borderRadius: fullWidth ? 0 : 8,
    margin: fullWidth ? 0 : 10,
    marginVertical: 2,
    padding: 0,
    paddingTop: 16,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: fullWidth? "#EB6A7C" :"#59C1CC",
  }}
>
        <View style={fullWidth && {height: "100%"}}>
             <Icon name="box" type="entypo" size={50} color= "white"/>
             <View className='item-start pb-5 mt-3'>
                <View className='mx-auto'>
                    <Text className = "text-xs text-center uppercase text-white font-bold">
                    {order.carrier} - {order.trackingId}
                </Text>
                <Text className = "text-white text-center text-lg font-bold">
                    Expected Delivery: {new Date(order.createdAt).toLocaleDateString()}
                </Text>
                <Divider color = "white" />
                </View>
             
             <View className = "mx-auto pb-5">
                <Text className = "text-white text-base text-center font-bold mt-5">Address</Text>
                <Text className = "text-sm text-white text-center">{order.address}, {order.city}</Text>
                <Text className = "text-white text-center italic text-sm">Shipping Cost: ${order.shippingCost}</Text>
             </View>
        </View>
        <Divider color = "white" />


        <View className = "p-5"> 
       {order.trackingItems.items.map((item) => (
            <View key= {item.item_id}className = "flex-row justify-between items-center">
                <Text className = "text-white text-sm italic">{item.name}</Text>
                <Text className = "text-white text-xl">{item.quantity}</Text>
            </View>
       ))}
       </View>

       <MapView initialRegion = {{
        latitude: order.lat,
        longitude: order.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
       }}
       style = {{ width: '100%',  flexGrow: 1, height: 200}}> 
       {order.lat && order.lng && (
        <Marker coordinate = {{latitude: order.lat, longitude: order.lng}} title = "Delivery Location" description = {order.address} identifier = "destination" />
       )}

       </MapView>
       </View>
    </Card>

  )
}

export default Deliverycard