import {View, Text, Image, ScrollView, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const ProductPage = ({ navigation }) => {

  return (
    <ScrollView>
      <SafeAreaView
        style={{flex: 1, paddingHorizontal: -5, backgroundColor: 'white'}}>
        <View>
        
          <Image
            source={require('../assests/Rectangle95.png')}
            style={{width: '105%'}}
          />
          
          <Image
          
            source={require('../assests/Logo1.png')}
            style={{
              position: 'relative',
              top: 22,
              height: 30,
              width: 190,
              marginLeft: 20,
              marginTop: -75,
            }}
            
          />
          
          <Image
            source={require('../assests/Rectangle28.png')}
            style={{
              // resizeMode: 'cover',
              left: 23,
              top: 35,
              width: '102%',
              height: 450,
              marginLeft: -25,
            
            }}
          />
          <Image
            source={require('../assests/MaskGroup.png')}
            style={{top: 15, marginTop: -13, position: 'absolute'}}
          />
          <Image
            source={require('../assests/Vector.png')}
            style={{top: 14, marginTop: -15, position: 'absolute'}}
          />
          <Image
            source={require('../assests/sage.png')}
            style={{width: 300, height: 300, marginTop: -300, marginLeft: 120}}
          />
          <Text
            style={{
              top: 86,
              height: 21,
              width: 89,
              left: 34,
              marginTop: -490,
              fontFamily: 'Poppins',
              fontWeight: '900',
            }}>
            Air Purifier
          </Text>
          <Image
            source={require('../assests/Group66.png')}
            style={{width: 25, height: 23, top: 65, left: 118}}
          />
          <Image
            source={require('../assests/Rectangle63.png')}
            style={{
              width: 55,
              height: 20,
              top: 45,
              left: 260,
              borderRadius: 12,
            }}
          />
          <Image
            source={require('../assests/Star1.png')}
            style={{top: 28, left: 265}}
          />
          <Text style={{top: 12, left: 290, color: '#0D986A', fontWeight: 600}}>4.8</Text>
          <TouchableOpacity onPress={()=> navigation.navigate("CheckoutScreen")}>
          <Text
            style={{
              top: 30,
              left: 26,
              fontFamily: 'Philosopher',
              fontSize: 46,
              fontWeight: 600,
              color: 'black',
              fontFamily: "Philosopher-Regular"
            }}>
            Watermelon Pepomria
          </Text>
</TouchableOpacity>
          <Text
            style={{
              top: 70,
              left: 46,
              fontFamily: 'Poppins',
              width: 43,
              height: 23,
              fontWeight: 900,
            }}>
            PRICE
          </Text>
          <Text
            style={{
              top: 70,
              left: 46,
              fontFamily: 'Poppins',
              width: 43,
              height: 23,
              fontWeight: 700,
              fontSize: 20,
              color: "#002140"
            }}>
            $350
          </Text>
          <Text
            style={{
              top: 100,
              left: 46,
              fontFamily: 'Poppins',
              width: 43,
              height: 23,
              fontWeight: 900,
            }}>
            Size
          </Text>
          <Text
            style={{
              top: 100,
              left: 46,
              fontFamily: 'Poppins',
              width: 43,
              height: 23,
              fontWeight: 700,
              fontSize: 20,
              color: "#002140"
            }}>
            5" h
          </Text>
          <Image
            source={require('../assests/Rectangle39.png')}
            style={{
              width: 72,
              height: 76,
              top: 480,
              left: 35,
              position: 'absolute',
              
            }}
          />
          <Image
            source={require('../assests/Group52.png')}
            style={{position: 'absolute', top: 508, marginLeft: 58}}
          />
          <Image
            source={require('../assests/Rectangle38.png')}
            style={{
              width: 72,
              height: 76,
              top: 480,
              left: 115,
              position: 'absolute',
            }}
          />
          <Image
            source={require('../assests/Vector1.png')}
            style={{position: 'absolute', top: 506, marginLeft: 138}}
          />
          <Image
            source={require('../assests/Group99.png')}
            style={{top: 280, left: 15}}
          />
          <Text style={{top: 280, left: 15, fontWeight: '800'}}>Plant Bio</Text>
          <Text style={{top: 280, left: 15}}>
            No green thumb required to keep our artificial watermelon peperomia
            plant looking lively and lush anywhere you place it.
          </Text>
          <View style={{display: 'flex', flexDirection: 'row', marginTop: 290}}>
            <Image
              source={require('../assests/image30.png')}
              style={{height: 90, width: 120}}
            />
            <Image
              source={require('../assests/image27.png')}
              style={{height: 90, width: 120}}
            />
            <Image
              source={require('../assests/image29.png')}
              style={{marginLeft: 20, height: 90, width: 120}}
            />
            <AntDesignIcon name="search1" color={"#004A61"} size={25} style={{ top: -690, marginLeft: 270, position: "absolute"}} />
            <AntDesignIcon name="menu-fold" color={"#004A61"} size={25} style={{ top: -690, marginLeft: 310, position: "absolute"}} />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ProductPage;