import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView,
    FlatList,
    Image,
    ImageBackground,
    Button,
  } from 'react-native';
  import React from 'react';
  import COLORS from '../components/color';
  import Productpage from './productpage';
  
  const HomeScreen = ({ navigation }) => {
    const categories = ['Top Pick', 'Indoor', 'Outdoor', 'Seeds', 'Plant'];
  
    const [categoryIndex, setCategoryIndex] = React.useState(0);
  
    const CategoryList = () => {
      return (
        <View style={styles.categoryContainer}>
          {categories.map((item, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              onPress={() => setCategoryIndex(index)}>
              <Text
                style={[
                  styles.categoryText,
                  categoryIndex == index && styles.categoryTextSelected,
                ]}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      );
    };
  
    return (
      <ScrollView>
        <SafeAreaView
          style={{flex: 1, paddingHorizontal: 10, backgroundColor: "#F5F5F5"}}>
          <View style={styles.header}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{width: 40, height: 30, marginRight: 10}}
                source={require('../assests/leaf.png')}
              />
              <TouchableOpacity >
              <Text
                style={{
                  fontSize: 25,
                  color: '#002140',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: "Philosopher-Regular",
                  lineHeight: 22,
                }}>
                {' '}
                PLANTIFY{' '}
              </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{width: 25, height: 25}}
                // source={require('../assests/bookmark.png')}
              />
              <TouchableOpacity onPress={()=> navigation.navigate("Oneproduct")}>
                
              <Image
                style={{
                    width: 25,
                    height: 25,
                    marginLeft: 20,
                    marginHorizontal: 10,
                }}
                source={require('../assests/menu.png')}
                />
                </TouchableOpacity>
            </View>
          </View>
          <View>
            <ImageBackground
              style={{width: 370, height: 195, marginTop: 10, borderRadius: 6}}
              source={require('../assests/hb.png')}>
              <View style={{top: 30, left: 20, }}>
                <Text style={{fontSize: 24, fontWeight: '500', color: '#001240', fontFamily: "Philosopher-Regular", textTransform: "uppercase"}}>
                  There's a Plant
                </Text>
                <Text style={{fontSize: 24, fontWeight: '500', color: '#001240', fontFamily: "Philosopher-Regular",}}>
                  for everyone
                </Text>
              </View>
              <View style={{left: 20, marginTop: 40}}>
                <Text style={{fontSize: 14, fontWeight: '700', color: '#001240'}}>
                  Get your 1st plant
                </Text>
                <Text style={{fontSize: 14, fontWeight: '700', color: '#001240'}}>
                  @ 40% off
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{marginTop: 30, flexDirection: 'row'}}>
            <View style={styles.searchContainer}>
              <Image
                style={{
                  marginLeft: 25,
                  marginRight: 20,
                  width: 25,
                  height: 25,
                  alignItems: 'center',
                }}
                source={require('../assests/search.png')}
              />
              <TextInput placeholder="Search" style={styles.input} />
            </View>
            <View style={{marginLeft: 10}}>
              <Image
                style={{width: 50, height: 50}}
                source={require('../assests/sortMenu.png')} 
              />
            </View>
          </View>
          <CategoryList />
  
          <View
            style={{
              backgroundColor: '#9CE5CB',
              width: 330,
              height: 145,
              borderRadius: 15,
              marginTop: 50,
            }}>
            <Text
              style={{
                width: 137,
                left: 20,
                marginTop: 10,
                color: '#001240',
                fontSize: 14,
                fontWeight: '600',
              }}>
              Air Purifier
            </Text>
            <Text
              style={{
                left: 20,
                fontSize: 32,
                fontWeight: '500',
                color: '#001240',
                width: 239,
                fontFamily: "Philosopher-Regular"
              }}>
              Peperomia
            </Text>
  
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                marginRight: 20,
              }}>
              <Text
                style={{
                  width: 137,
                  left: 20,
                  marginTop: 10,
                  color: '#001240',
                  fontSize: 18,
                  fontWeight: '600',
                }}>
                $400
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  width: 70,
                  height: 40,
                  borderRadius: 4,
                  marginTop: 10,
                  marginLeft: 20,
                  alignItems: 'center',
                }}>
                {/* <Image source={require('../assests/heart.png')} /> */}
                <Image
                  style={{marginLeft: 27, position: 'absolute'}}
                  source={require('../assests/circle.png')}
                />
                <Image
                  style={{marginLeft: 38}}
                  source={require('../assests/circleLine.png')}
                />
                <TouchableOpacity onPress={()=> navigation.navigate("Productpage")}>
                <Image 
                  style={{width: 150, height: 150, marginTop: -150, marginLeft: -15,}} 
                  source={require('../assests/p4.png')}   
                  />
                  </TouchableOpacity>
              </View>
            </View>
          </View>
  
          <View
            style={{
              backgroundColor: '#FFE899',
              width: 330,
              height: 145,
              borderRadius: 15,
              marginTop: 50,
            }}>
            <Text
              style={{
                width: 137,
                left: 20,
                marginTop: 10,
                color: '#001240',
                fontSize: 14,
                fontWeight: '600',
              }}>
              Air Purifier
            </Text>
            <Text
              style={{
                left: 20,
                fontSize: 32,
                fontWeight: '500',
                color: '#001240',
                width: 239,
                fontFamily: "Philosopher-Regular"
              }}>
              Watermelon
            </Text>
  
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                marginRight: 20,
              }}>
              <Text
                style={{
                  width: 137,
                  left: 20,
                  marginTop: 10,
                  color: '#001240',
                  fontSize: 18,
                  fontWeight: '600',
                }}>
                $400
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  width: 70,
                  height: 40,
                  borderRadius: 4,
                  marginTop: 10,
                  marginLeft: 20,
                  alignItems: 'center',
                }}>
                {/* <Image source={require('../assests/bookmark.png')} /> */}
                <Image
                  style={{marginLeft: 30, position: 'absolute'}}
                  source={require('../assests/circle.png')}
                />
                <Image
                  style={{marginLeft: 38}}
                  source={require('../assests/circleLine.png')}
                />
                <Image
                  style={{width: 150, height: 150, marginTop: -150}}
                  source={require('../assests/p3.png')}
                />
              </View>
            </View>
          </View>
  
          <View
            style={{
              backgroundColor: '#8CEC8A',
              marginTop: 30,
              width: 360,
              height: 145,
              borderRadius: 15,
            }}>
            <Text
              style={{
                marginTop: 20,
                left: 20,
                fontSize: 24,
                fontWeight: '500',
                color: '#001240',
                width: 239,
                fontFamily: "Philosopher-Regular"
              }}>
              Invite a Friend and earn Plantify rewards
            </Text>
  
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                marginRight: 20,
              }}>
              <Text
                style={{
                  width: 137,
                  left: 20,
                  marginTop: 10,
                  color: '#0D986A',
                  fontSize: 13,
                  fontWeight: '600',
                }}>
                Redeem them to get instant discount
              </Text>
              <View
                style={{
                  width: 70,
                  height: 40,
                  borderRadius: 4,
                  marginTop: 10,
                  marginLeft: 20,
                  alignItems: 'center',
                }}>
                <Button
                  title="invite"
                  color="#0D986A"
                  fontSize="15"
                  borderRadius="20"
                />
              </View>
            </View>
          </View>
  
          <View
            style={{
              backgroundColor: '#56D1A7',
              width: 330,
              height: 145,
              borderRadius: 15,
              marginTop: 50,
            }}>
            <Text
              style={{
                width: 137,
                left: 20,
                marginTop: 10,
                color: '#001240',
                fontSize: 14,
                fontWeight: '600',
              }}>
              Air Purifier
            </Text>
            <Text
              style={{
                left: 20,
                fontSize: 32,
                fontWeight: '500',
                color: '#001240',
                width: 239,
                fontFamily: "Philosopher-Regular"
              }}>
              Croton Petra
            </Text>
  
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                marginRight: 20,
              }}>
              <Text
                style={{
                  width: 137,
                  left: 20,
                  marginTop: 10,
                  color: '#001240',
                  fontSize: 18,
                  fontWeight: '600',
                }}>
                $200
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  width: 70,
                  height: 40,
                  borderRadius: 4,
                  marginTop: 10,
                  marginLeft: 20,
                  alignItems: 'center',
                }}>
                {/* <Image source={require('../assests/bookmark.png')} /> */}
                <Image
                  style={{marginLeft: 30, position: 'absolute'}}
                  source={require('../assests/circle.png')}
                />
                <Image
                  style={{marginLeft: 38}}
                  source={require('../assests/circleLine.png')}
                />
                <Image
                  style={{width: 150, height: 150, marginTop: -130}}
                  source={require('../assests/p1.png')}
                />
              </View>
            </View>
          </View>
  
          <View
            style={{
              backgroundColor: '#B2E28D',
              width: 330,
              height: 145,
              borderRadius: 15,
              marginTop: 50,
            }}>
            <Text
              style={{
                width: 137,
                left: 20,
                marginTop: 10,
                color: '#001240',
                fontSize: 14,
                fontWeight: '600',
              }}>
              Air Purifier
            </Text>
            <Text
              style={{
                left: 20,
                fontSize: 32,
                fontWeight: '500',
                color: '#001240',
                width: 239,
                fontFamily: "Philosopher-Regular"
              }}>
              Bird's Nest Fern
            </Text>
  
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                marginRight: 20,
              }}>
              <Text
                style={{
                  width: 137,
                  left: 20,
                  marginTop: 10,
                  color: '#001240',
                  fontSize: 18,
                  fontWeight: '600',
                }}>
                $160
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  width: 70,
                  height: 40,
                  borderRadius: 4,
                  marginTop: 10,
                  marginLeft: 20,
                  alignItems: 'center',
                }}>
                {/* <Image source={require('../assests/bookmark.png')} /> */}
                <Image
                  style={{marginLeft: 30, position: 'absolute'}}
                  source={require('../assests/circle.png')}
                />
                <Image
                  style={{marginLeft: 38}}
                  source={require('../assests/circleLine.png')}
                />
                <Image
                  style={{width: 150, height: 150, marginTop: -150}}
                  source={require('../assests/p2.png')}
                />
              </View>
            </View>
          </View>
  
          <View
            style={{
              backgroundColor: '#DEEC8A',
              width: 330,
              height: 145,
              borderRadius: 15,
              marginTop: 50,
            }}>
            <Text
              style={{
                width: 137,
                left: 20,
                marginTop: 10,
                color: '#001240',
                fontSize: 14,
                fontWeight: '600',
              }}>
              Air Purifier
            </Text>
            <Text
              style={{
                left: 20,
                fontSize: 32,
                fontWeight: '500',
                color: '#001240',
                width: 239,
                fontFamily: "Philosopher-Regular"
              }}>
              Cactus
            </Text>
  
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                marginRight: 20,
              }}>
              <Text
                style={{
                  width: 137,
                  left: 20,
                  marginTop: 10,
                  color: '#001240',
                  fontSize: 18,
                  fontWeight: '600',
                }}>
                $260
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  width: 70,
                  height: 40,
                  borderRadius: 4,
                  marginTop: 10,
                  marginLeft: 20,
                  alignItems: 'center',
                }}>
                {/* <Image source={require('../assests/bookmark.png')} /> */}
                <Image
                  style={{marginLeft: 30, position: 'absolute'}}
                  source={require('../assests/circle.png')}
                />
                <Image
                  style={{marginLeft: 38}}
                  source={require('../assests/circleLine.png')}
                />
                <Image
                  style={{width: 150, height: 150, marginTop: -150}}
                  source={require('../assests/p4.png')}
                />
              </View>
            </View>
          </View>
  
          <View
            style={{
              backgroundColor: '#F5EDA8',
              width: 330,
              height: 145,
              borderRadius: 15,
              marginTop: 50,
            }}>
            <Text
              style={{
                width: 137,
                left: 20,
                marginTop: 10,
                color: '#001240',
                fontSize: 14,
                fontWeight: '600',
              }}>
              Air Purifier
            </Text>
            <Text
              style={{
                left: 20,
                fontSize: 32,
                fontWeight: '500',
                color: '#001240',
                width: 239,
                fontFamily: "Philosopher-Regular"
              }}>
              Aloe Vera
            </Text>
  
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                marginRight: 20,
              }}>
              <Text
                style={{
                  width: 137,
                  left: 20,
                  marginTop: 10,
                  color: '#001240',
                  fontSize: 18,
                  fontWeight: '600',
                }}>
                $210
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  width: 70,
                  height: 40,
                  borderRadius: 4,
                  marginTop: 10,
                  marginLeft: 20,
                  alignItems: 'center',
                }}>
                {/* <Image source={require('../assests/bookmark.png')} /> */}
                <Image
                  style={{marginLeft: 30, position: 'absolute'}}
                  source={require('../assests/circle.png')}
                />
                <Image
                  style={{marginLeft: 38}}
                  source={require('../assests/circleLine.png')}
                />
                <Image
                  style={{width: 150, height: 150, marginTop: -130}}
                  source={require('../assests/p6.png')}
                />
              </View>
            </View>
          </View>
  
          <View
            style={{
              width: 40,
              height: 3,
              color: '#001240',
              borderBottomWidth: 3,
              marginTop: 30,
            }}></View>
  
          <View style={{marginTop: 20, marginBottom: 50}}>
            <Text
              style={{
                width: 226,
                fontSize: 36,
                fontWeight: '700',
                color: '#001240',
              }}>
              Plant a life
            </Text>
            <Text
              style={{
                width: 289,
                fontSize: 26,
                fontWeight: '700',
                opacity: 0.8,
                color: '#001240',
              }}>
              live amongst living
            </Text>
            <Text
              style={{
                width: 228,
                fontSize: 24,
                fontWeight: '700',
                opacity: 0.5,
                color: '#001240',
              }}>
              Spread the joy
            </Text>
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    header: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    searchContainer: {
      height: 50,
      backgroundColor: '#f1f2f6',
      borderRadius: 10,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      fontSize: 18,
      fontWeight: '500',
      color: 'black',
      flex: 1,
    },
    categoryContainer: {
      flexDirection: 'row',
      marginTop: 20,
      marginBottom: 20,
      justifyContent: 'space-between',
    },
    categoryText: {
      fontSize: 14,
      color: '#001240',
      fontWeight: '500',
    },
    categoryTextSelected: {
      color: COLORS.green,
      paddingBottom: 5,
      borderBottomWidth: 2,
      borderColor: COLORS.green,
    },
  });
  
  export default HomeScreen;