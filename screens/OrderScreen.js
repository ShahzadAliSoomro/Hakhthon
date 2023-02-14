import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import COLORS from '../components/color';
import EntypoIcon from 'react-native-vector-icons/dist/Entypo';

const OrderScreen = () => {
  return (
    <ScrollView style={{backgroundColor: "#FFFFFF",}}>
      <View
      
        style={{
          flexDirection: 'row',
      
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        
        <Image
          style={{width: 162, height: 162, top: 20,}}
          source={require('../assests/orderCircle.png')}
        />
      </View>
      
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: '#0D986A', fontSize: 36, fontWeight: '800'}}>
          Order
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: '#0D986A', fontSize: 36, fontWeight: '800'}}>
          Received
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: '#002140', fontSize: 15, fontWeight: '500'}}>
          Order ID: #293092309
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{width: 162, height: 162, top: -70}}
          source={require('../assests/leaf.png')}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginTop: -70,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#0D986A',
            width: 340,
            height: 48,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
            KIRIM
          </Text>
        </TouchableOpacity>
        
      </View>
      <View>
      <EntypoIcon name="chevron-with-circle-left" color={"#004A61"} size={50} style={{marginTop: -530, marginLeft: 10,}}/>
      </View>
    </ScrollView>
  );
};

export default OrderScreen;