import { View, Text, ScrollView, Image, ActivityIndicator } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import '../../global.css'
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TabStackParamList } from '../../navigator/TabNavigator';
import { RootStackParamList } from '../../navigator/RootNavigator';
import { Input } from '@rneui/themed';

export type CustomerScreenNavigationProp = CompositeNavigationProp<BottomTabNavigationProp<TabStackParamList, 'Customers'>, NativeStackNavigationProp <RootStackParamList>
>

const CustomerScreen = () => {
  const navigation = useNavigation <CustomerScreenNavigationProp> ();
  const [input, setInput] = React.useState<string>('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  })

  return (
    <ScrollView style = {{ backgroundColor: '#59C1CC'}}>
      <Image source={{uri: 'https://links.papareact.com/3jc'}} style={{ width: '100%', height: 300 }}
      //PlaceholderContent = {<ActivityIndicator/>} 
      />

      <Input placeholder  = "Search customers..." value = {input} onChangeText = {setInput} 
      style = {{ backgroundColor: 'white', paddingTop: 5, paddingBottom: 0, marginBottom: 10, paddingHorizontal: 20}}
       />
    </ScrollView>
);
};

export default CustomerScreen; 