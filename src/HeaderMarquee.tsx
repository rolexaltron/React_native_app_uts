import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Animated,
  Dimensions,
  SafeAreaView,
} from 'react-native';


const SCREEN_WIDTH = Dimensions.get('window').width;

const HeaderMarquee = () => {
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const startAnimation = () => {
      translateX.setValue(SCREEN_WIDTH); // Reset to right
      Animated.timing(translateX, {
        toValue: -SCREEN_WIDTH, // Move to left off-screen
        duration: 7000,
        useNativeDriver: true,
      }).start(() => startAnimation()); // Loop by recursion
    };

    startAnimation(); // Start on mount
  }, [translateX]);

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Image source={require('./assets/cris.png')} style={styles.logo1} />
        <View style={styles.marqueeContainer}>
          <Animated.Text
            style={[styles.marqueeText, {transform: [{translateX}]}]}>
            IR Unreserved Ticketing
          </Animated.Text>
      
        </View>
        <Image source={require('./assets/red2.png')} style={styles.logo} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 7,
    paddingHorizontal: 10,
    marginBottom: 5,
    //elevation: 4,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginRight: 15,
  },
  logo1: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginLeft: 15,
  },
  marqueeContainer: {
    flex: 1,
    overflow: 'hidden',
    marginHorizontal: 10,
    height: 30,
    justifyContent: 'center',
  },
  marqueeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#003366',
    marginTop: -2,
    //position: 'relative',
  },
});

export default HeaderMarquee;
