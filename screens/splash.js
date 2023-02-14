import React from 'react';
import { ActivityIndicator, Image, Text, View, TouchableOpacity } from 'react-native';
import SinupScreen from '../screens/signup'
import AntDesignIcon from 'react-native-vector-icons/dist/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';


const SplashScreen = ({ navigation }) => {
  return (
    <>
      <View
        style={{
          // backgroundColor: '#000000',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../assests/Rectangle118.png')}
          style={{
            // position: 'absolute',
            height: 570,
            width: 390,
            borderRadius: 50,
          }}
        />
        <Image
          source={require('../assests/Vector.png')}
          style={{
            width: 351,
            height: 450,
            left: 1,
            top: -495,
            flexDirection: 'row',
            alignItems: 'flex-start',
            opacity: 30,
            Blend: 'Screen',
          }}
        />
      </View>
      <Image
        source={require('../assests/Ellipse25.png')}
        style={{
          width: 76,
          height: 76,
          top: -560,
          left: 40,
          position: 'relative',
        }}
      />
      <Image
        source={require('../assests/Vector4.png')}
        style={{
          position: 'absolute',
          width: 1,
          height: 25,
          top: 35,
          flexDirection: 'column',
          margin: 33,
          paddingTop: 210,
          left: 135,
        }}
      />
      <Image
        source={require('../assests/Vector3.png')}
        style={{
          position: 'absolute',
          width: 200,
          height: 174,
          top: -21,
          flexDirection: 'row',
          marginTop: 80,
          left: 70,
        }}
      />

      <ActivityIndicator size={55} color="#0D986A" />
      <Image
        source={require('../assests/Ellipse27.png')}
        style={{
          width: 76,
          height: 76,
          left: 130,
          top: 70,
          position: 'absolute',
        }}
      />
      <Image
        source={require('../assests/Ellipse26.png')}
        style={{
          width: 76,
          height: 76,
          left: 244,
          top: 115,
          position: 'absolute',
        }}
      />
      <Text
        style={{
          color: '#FFFFFF',
          fontSize: 60,
          left: 30,
          top: 300,
          position: 'absolute',
          fontFamily: "Philosopher-Regular", 
        }}>
        {' '}
        PLANTIFY
      </Text>
      <Image
        // source={require('../assests/Rectangle122.png')}
        style={{ top: 400, position: 'absolute' }}
      />
      <Text
        style={{
          top: 400,
          width: 227,
          height: 88,
          fontSize: 37,
          left: 24,
          color: '#0D986A',
          position: 'absolute',
          fontFamily: 'Philosopher-Regular',
        }}>
        GET READY BE HIGYENIC
      </Text>
      <Text
        style={{
          top: 510,
          width: 360,
          height: 82,
          fontSize: 16,
          left: 24,
          color: '#0D986A',
          position: 'absolute',
          fontWeight: 400,
        }}>
        Jelajahi AiLearn untuk menambah kemampuanmu dalam mengoperasikan Adobe
        Illustrator
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate("SignupScreen")}
        style={{
          position: "absolute",
          marginTop: 700,
          marginLeft: 30,
          backgroundColor: '#0D986A',
          width: 340,
          height: 48,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
          top: -130,
          left: -22,
          
        }}>
        <Text style={{ color: 'white', fontWeight: 700, fontSize: 18,  }}>
          MASUK
        </Text>
      </TouchableOpacity>

      {/* <View style={{
        position: "absolute",
        width: 340,
        display: 'flex',
        backgroundColor: "gray",
        height: 48,
        flexDirection: 'row',
        bottom: 10,
        paddingLeft: 60,
        paddingTop: 8,
        marginLeft: 10,
        borderRadius: 20,

      }}>
        <View style={{ width: 70,  }}>

          <AntDesignIcon name="home" color={"#002140"} size={30} />
        </View>
        <View style={{ width: 70 }}>
          <AntDesignIcon name="hearto" color={"#002140"} size={30} />
        </View>
        <View style={{ width: 70 }}>
          <FeatherIcon name="shopping-bag" color={"#002140"} size={30} />
        </View>
        <View style={{ width: 70 }}>
          <AntDesignIcon name="user" color={"#002140"} size={30} />
        </View>
      </View> */}
    </>

  );
};
export default SplashScreen;