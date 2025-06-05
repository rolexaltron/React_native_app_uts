import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  Text,
} from 'react-native';
import AutoScroll from '@homielab/react-native-auto-scroll';

const SCREEN_WIDTH = Dimensions.get('window').width;

const HeaderMarquee = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <View style={styles.header}>
        <Image source={require('./assets/cris.png')} style={styles.logo1} />

        <AutoScroll
          style={styles.marqueeContainer}
          duration={4000}
          delay={1000}
        
        
        >
          <Text style={styles.marqueeText}>   IR Unreserved Ticketing   </Text>
        </AutoScroll>

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
    paddingTop: (StatusBar.currentHeight || 10) - 11,
    paddingBottom: 6,
    paddingHorizontal: 9,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginRight: 15,
     transform: [{translateY: -5}],
  },
  logo1: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginLeft: 17,
    transform: [{translateY: -5}],
  },
  marqueeContainer: {
    flex: 1,
    overflow: 'hidden',
    marginHorizontal: 10,
    height: 35,
    justifyContent: 'center',
    transform: [{translateY: -8}],

  },
  marqueeText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#004A84',
  },
});

export default HeaderMarquee;
