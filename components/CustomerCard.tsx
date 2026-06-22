import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import useCustomersOrders from '@/hooks/useCustomersOrders';
import '../../global.css'
import { CustomerScreenNavigationProp } from '@/app/(tabs)/CustomersScreen';
import { useNavigation } from '@/.expo/types/router';
import Card from '@rneui/themed/dist/Card';
import { Icon } from '@rneui/base/dist/Icon/Icon';

type Props = {
    userId: string;
    name: string;
    email: string;
}

const CustomerCard = ({ userId, name, email }: Props) => {
    const {loading, error, orders} = useCustomersOrders(userId);
    const navigation = useNavigation<CustomerScreenNavigationProp>();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('MyModal', { userId: userId, name: name })}>
      <Card containerStyle={{ margin: 10, padding : 5 , borderRadius: 10}}>
        <View>
            <View  style = {{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{name}</Text>
                <Text style = {{ fontSize: 16 }}>ID: {userId}</Text>
                </View>
            

            <View style = {{ flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Text style = {{ color: '#59C1CC' }}>{loading ? 'Loading...' : `Orders: ${orders.length}`}</Text>
                <Icon
                    containerStyle={{ marginBottom: 10, marginLeft: 2 }}
                    name="box"
                    type="entypo"
                    color="#59C1CC"
                    size={50}
                />
            </View>
            </View>
        </View>
        <Card.Divider />
        <Text>{email}</Text>
      </Card>
    </TouchableOpacity>
  )
}

export default CustomerCard

function useQuery(GET_ORDERS_BY_CUSTOMER_ID: any, arg1: boolean): { loading: any; error: any; data: any; } {
    throw new Error('Function not implemented.');
}
