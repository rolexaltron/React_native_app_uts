import React, { useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, Animated, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const HeaderMarquee = () => {
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const startAnimation = () => {
      translateX.setValue(SCREEN_WIDTH); // Reset to right
      Animated.timing(translateX, {
        toValue: -SCREEN_WIDTH,          // Move to left off-screen
        duration: 7000,
        useNativeDriver: true,
      }).start(() => startAnimation()); // Loop by recursion
    };

    startAnimation(); // Start on mount
  }, [translateX]);

  return (
    <View style={styles.header}>
      <Image source={require('./assets/cris.png')} style={styles.logo} />
      <View style={styles.marqueeContainer}>
        <Animated.Text style={[styles.marqueeText, { transform: [{ translateX }] }]}>
          Unreserved Ticketing
        </Animated.Text>
      </View>
      <Image source={require('./assets/red2.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginBottom: 8,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  marqueeContainer: {
    flex: 1,
    overflow: 'hidden',
    marginHorizontal: 10,
    height: 30,
    justifyContent: 'center',
  },
  marqueeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003366',
  },
});

export default HeaderMarquee;
