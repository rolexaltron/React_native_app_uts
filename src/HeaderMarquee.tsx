import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Animated,
  Dimensions,
  StatusBar,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const HeaderMarquee = () => {
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const startAnimation = () => {
      translateX.setValue(SCREEN_WIDTH);
      Animated.timing(translateX, {
        toValue: -SCREEN_WIDTH,
        duration: 7000,
        useNativeDriver: true,
      }).start(() => startAnimation());
    };

    startAnimation();
  }, [translateX]);

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <View style={styles.header}>
        <Image source={require('./assets/cris.png')} style={styles.logo1} />
        <View style={styles.marqueeContainer}>
          <Animated.Text
            style={[styles.marqueeText, { transform: [{ translateX }] }]}>
            IR Unreserved Ticketing
          </Animated.Text>
        </View>
        <Image source={require('./assets/red2.png')} style={styles.logo} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight || 10, // Push content below status bar
    paddingBottom: -1,
    paddingHorizontal: 9,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginRight: 15,
      transform: [{ translateY: -11 }], // push upward by 3 units

  },
  logo1: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginLeft: 15,
    transform: [{ translateY: -11 }], // push upward by 3 units

  },
  marqueeContainer: {
    flex: 1,
    overflow: 'hidden',
    marginHorizontal: 10,
    height: 30,
    justifyContent: 'center',
    transform: [{ translateY: -14 }],
  },
  marqueeText: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#003366',
    
  },
});

export default HeaderMarquee;
