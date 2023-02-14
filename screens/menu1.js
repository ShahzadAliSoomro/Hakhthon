import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import AntDesignIcon from 'react-native-vector-icons/dist/AntDesign';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const menu1 = () => {
 const [email, setEmail] = useState("");

  return (

    <View style={styles.container}>
      <View style={styles.hero}>
        <MaterialIconsIcon name="cancel" color="#FFFFFF" size={35} style={styles.tooop} />
        <View style={styles.iccon}>
          <EntypoIcon name="shop" color={"#004A61"} size={28} style={styles.icoon} />
          <AntDesignIcon name="downcircleo" color={"#004A61"} size={28} style={styles.icoon} />
          <MaterialCommunityIconsIcon name="account-multiple-outline" color={"#004A61"} size={28} style={styles.icoon} />
          <MaterialCommunityIconsIcon name="account-outline" color={"#004A61"} size={28} style={styles.icoon} />
          <MaterialCommunityIconsIcon name="truck-fast" color={"#004A61"} size={28} style={styles.icoon} />

        

        </View>

        <Text style={styles.shop}>Shop


        </Text>

        <Text style={styles.shop}>Plant Care

        </Text>

        <Text style={styles.shop}>Community

        </Text>
        <Text style={styles.shop}>My Account

        </Text>
        <Text style={styles.shop}>Track Order
        </Text>
        
         <Text style={styles.txttt}>Get the dirt.</Text>

         <TextInput 
           value={email}
           style={styles.input}
           placeholder="Enter Your Email"
           onChangeText={text => setUsername(text)}
           secureTextEntry={true}
           placeholderTextColor="#FFFFFF"
           />

           <Text style={styles.ragain}>FAQ</Text>
           <Text style={styles.ragain}>ABOUT US</Text>
           <Text style={styles.ragain}>CONTACT US</Text>
      
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B845C",
  },
  hero: {
    padding: 40,
    left: 80,
    top: -80,
  },
  iccon: {
    padding: 40,
    left: -90,
  },
  shop: {
    fontSize: 28,
    fontWeight: 600,
    color: "#FFFFFF",
    margin: 15,
    top: -385,
  },
  icoon: {
    margin: 20,
    color: "white"
  },
  txttt: {
    fontSize: 12,
    color: "red",
    padding: 20,
    top: -390,
    fontWeight: 700,
    fontSize: 20,
    color: "#FFFFFF",
    left: -20,
  },
  input: {
    width: 270,
    height: 50,
    left: -80,
    top: -400,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'black',
    paddingLeft: 75,
    // backgroundColor: "#FFFFFF",
    borderColor: "#FFFFFF",
    placeholder: "#FFFFFF"
  },
  ragain: {
    margin: 12,
    top: -400,
    width: 209,
    height: 17,
    fontWeight: 600,
    fontSize: 16,
    color: "#FFFFFF"
  },
  tooop: {
    margin: 3,
    top: 50,
    left: 180,
  }

})

export default menu1


