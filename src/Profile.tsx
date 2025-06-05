import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
  Platform,
  StatusBar,
  GestureResponderEvent,
  useColorScheme,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import HeaderMarquee from './HeaderMarquee';

interface ButtonProps {
  label: string;
  onPress?: (event: GestureResponderEvent) => void;
}

const GradientButton: React.FC<ButtonProps> = ({label}) => (
  <TouchableOpacity style={styles.buttonWrapper} >
    <LinearGradient
      // colors={['#e84d27', '#ff6c4d']}
      //colors={['#DE4B2A', '#F3794C']}
      colors={['#e84d27', '#F3794C']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={styles.button}>
      <Text style={styles.buttonText}>{label}</Text>
    </LinearGradient>
  </TouchableOpacity>
);
const Profile = () => {
  const scheme = useColorScheme();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <HeaderMarquee />
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.ticket}>
          <View style={styles.header}>
            <Text style={styles.happy}>HAPPY JOURNEY</Text>

            <TouchableOpacity style={styles.buttonmon}>
              <Text style={styles.buttonTextmon}>MONTHLY</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.line1} />

          <View style={styles.adultvi1}>
            <View style={styles.row1}>
              <Text style={styles.label1}>ADULT SEASON</Text>
              <Text style={styles.date1}>29/05/2025</Text>
            </View>

            <View style={styles.row1}>
              <Text style={styles.amount1}>₹580.00/-</Text>
              <Text style={styles.mobile1}>9307509878</Text>
            </View>

            <View style={styles.row1}>
              <Text style={styles.info1}>UTS No: XYG2DS705F</Text>
              <Text style={[styles.red1, styles.bold1]}>MONTHLY</Text>
            </View>

            <Text style={styles.info1}>
              ID Card Number: <Text style={styles.red1}>326742432000</Text>
            </Text>

            <Text style={styles.info1}>
              Pass: <Text style={styles.red1}>Mr Aawaj Dhanvij</Text>
            </Text>

            <View style={styles.row1}>
              <Text style={styles.info1}>
                Age: <Text style={styles.red1}>26 years</Text>
              </Text>
              <Text style={[styles.red1, styles.bold1]}>Between</Text>
            </View>
          </View>
          <View style={styles.line2} />

          <View style={styles.section2}>
            {/* Origin Station */}
            <View style={styles.stationBlock}>
              <Text style={styles.localLang}>नागपुर</Text>
              <View style={styles.rowAlign}>
                <Text style={styles.stationCircle}>S</Text>
                <View style={{marginLeft: 5}}>
                  <Text style={styles.stationCode}>NAGPUR</Text>
                  <Text style={styles.stationLocal}>नागपुर ज.</Text>
                </View>
              </View>
            </View>

            {/* Destination Station */}
            <View style={styles.stationBlock}>
              <Text style={styles.localLang}>वर्धा ज</Text>
              <View style={styles.rowAlign}>
                <Text style={styles.stationCircle}>D</Text>
                <View style={{marginLeft: 5}}>
                  <Text style={styles.stationCode}>WARDHA JN.</Text>
                  <Text style={styles.stationLocal}>वर्धा ज.</Text>
                </View>
              </View>
            </View>

            {/* Class and Train Type Row */}
            <View style={styles.bottomRow}>
              <View>
                <Text style={styles.localRed}>द्वितीय</Text>
                <Text style={styles.labelBottom1}>
                  CLASS: <Text style={styles.labelBottom}>SECOND</Text>
                </Text>
                <Text style={styles.localRed}>द्वि श्रे</Text>
              </View>
              <View>
                <Text style={styles.localRed1}>सुपरफास्ट</Text>
                <Text style={styles.labelBottom1}>
                  TRAIN TYPE: <Text style={styles.labelBottom}>SUPERFAST</Text>
                </Text>
                <Text style={styles.localRed1}>सुपरफास्ट</Text>
              </View>
            </View>
          </View>

          <View>
            <Text style={styles.infoRowTop}>
              SAC:<Text style={styles.blackText}>996411</Text>   IR:
              <Text style={styles.blackText}>27AAAGM0289C2ZI</Text>
            </Text>
            <View style={styles.line3} />

            <Text style={styles.infoRow}>
              Validity: FROM{' '}
              <Text style={styles.highlightDate}>30/05/2025</Text> TO{' '}
              <Text style={styles.highlightDate}>29/06/2025</Text>
            </Text>

            <View style={styles.middleRow}>
              <Text style={styles.bookingId}>R17527</Text>
              <Text style={styles.distance}>
                Distance: <Text style={styles.blackText}>79 km</Text>
              </Text>
            </View>

            <Text style={styles.bookingTime}>
              Booking Time:{' '}
              <Text style={styles.boldText}>29/05/2025 20:10</Text>
            </Text>
          </View>
        </View>

        <View>
          <View style={styles.noticeSection}>
            <Text style={styles.noticeText}>
              It is recommended not to perform factory reset or change your
              handset whenever you are valid ticket in the mobile
            </Text>

            <Text style={styles.clickableText}>
              Click for Changing Handset with Valid Ticket
            </Text>

            <Text style={styles.emergencyText}>
              For MEDICAL EMERGENCY | FIRST AID CONTACT TICKET{'\n'}
              CHECKING STAFF | GUARD OR DIAL 139
            </Text>
            {/* <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>OPEN QR CODE</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                  NEXT TRAINS TO WARDHA JN..
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>OK</Text>
              </TouchableOpacity>
            </View> */}
            <View style={styles.buttonContainer}>
              <GradientButton label="OPEN QR CODE" />
              <GradientButton label="NEXT TRAINS TO WARDHA JN.." />
              <GradientButton label="OK" />
            </View>
          </View>
        </View>
        <Text style={styles.footer}>
          Centre for Railway Information Systems (CRIS)
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
      backgroundColor: '#fff', // optional
    //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  headerContainer: {
    zIndex: 1,
    elevation: 3,
    backgroundColor: '#fff', // same as header background to avoid transparency
  },
  container: {
    padding: 14,
    // backgroundColor: '#eee',
    paddingBottom: 100,
    marginTop: -8,
    
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#7acc00',
    marginBottom: 10,
  },
  ticket: {
    backgroundColor: '#c2ff66',
    padding: 12,
    borderRadius: 15,
  },
  header: {
    flexDirection: 'row',
    //justifyContent: 'center',
    alignItems: 'center',
    //berfor space between
  },
  happy: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 1,
    fontFamily: 'serif',
  },
  monthly: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'purple',
  },
  label: {
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 14,
  },
  info: {
    fontSize: 13,
    marginTop: 2,
  },
  highlight: {
    color: 'red',
  },
  bold: {
    fontWeight: 'bold',
  },
  stations: {
    marginTop: 10,
  },
  stationLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 4,
  },
  // buttonContainer: {
  //   marginTop: 3,
  // },
  // button: {
  //   backgroundColor: '#ff5733',
  //   padding: wp('2.6%'),
  //   //7
  //   marginVertical: 4,
  //   borderRadius: 20,
  //   width: '98%',
  //   marginLeft: 3,
  //   elevation: 5,
  // },
  // buttonText: {
  //   color: '#fff',
  //   textAlign: 'center',
  //   fontWeight: 'bold',
  // },
  buttonContainer: {
   // alignItems: 'center',
    marginTop: 3,
  },
  buttonWrapper: {
    width: '98%',
    marginVertical: 4,
    borderRadius: 20,
    overflow: 'hidden', // needed for rounded gradient corners
    elevation: 6,
  },
  button: {
   padding: wp('2%'),
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 6,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '500',
    fontSize: 15,
  },

  //
  footer: {
    marginTop: 2,
    textAlign: 'center',
    color: 'black',
  },
  buttonmon: {
    backgroundColor: '#6A1B9A',
    padding: 6,
    borderRadius: 1,
    alignItems: 'center',
    width: '53%', // Set desired width
    alignSelf: 'flex-start', // Align it to the left of the container
    marginTop: -3,
    marginLeft: 15,
  },
  buttonTextmon: {
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'serif',
    fontSize: 17,
  },

  adultvi1: {
    //backgroundColor: '#99cc66',
    //   padding: 10,

    //margin: 8,
    marginTop: -8,
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //marginVertical: 1,
    marginTop: 2,
    marginBottom: -2,
  },
  label1: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 100,
    fontFamily: 'serif',
  },
  date1: {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
  amount1: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
  mobile1: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
  info1: {
    fontSize: 14,
    marginVertical: -1.5,
    fontWeight: 'bold',
    fontFamily: 'serif',
    //marginTop:-2,
    //marginBottom:-1,
  },
  red1: {
    color: 'red',
  },
  bold1: {
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
  line1: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    //marginVertical: 7, // optional spacing above and below the line
    marginTop: 8,
    marginBottom: 3,
  },
  line2: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    // marginVertical: 4, // optional spacing above and below the line
    marginTop: 2,
    marginBottom: 8,
  },
  line3: {
    borderBottomColor: 'rgb(169, 169, 169)',
    borderBottomWidth: 1,
    // marginVertical: 4, // optional spacing above and below the line
    marginTop: -5,
    marginBottom: 7,
  },
  section2: {
    //backgroundColor: '#8EDB5A', // green background
    padding: 0,
    borderBottomWidth: 1,
    borderColor: 'black',
    marginTop: -4,
  },
  rowAlign: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stationBlock: {
    marginBottom: 10,
  },
  stationCircle: {
    backgroundColor: '#6A1B9A',
    color: '#fff',
    borderRadius: 20,
    width: 24,
    height: 24,
    textAlign: 'center',
    lineHeight: 24,
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
  stationCode: {
    fontWeight: 'bold',
    fontSize: 14,
    fontFamily: 'serif',
  },
  stationLocal: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
  localLang: {
    fontSize: 14,
    marginBottom: 1,
    marginLeft: 30,
    fontWeight: 'bold',
    fontFamily: 'serif',
  },

  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  labelBottom: {
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: 'red',
  },
  labelBottom1: {
    //fontWeight: 'bold',
    fontFamily: 'serif',
  },
  redText: {
    color: 'red',
    fontFamily: 'serif',
  },
  localRed: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 30,
    marginTop: -2,
  },
  localRed1: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 92,
    marginTop: -2,
  },
  validitySection: {
    backgroundColor: '#8EDB5A',
    padding: 10,
    marginVertical: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#999',
  },
  infoRowTop: {
    //fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
    fontFamily: 'serif',
  },
  infoRow: {
    // fontWeight: 'bold',
    color: '#000',
    marginBottom: 6,
    marginLeft: 25,
    fontFamily: 'serif',
    marginTop: -4,
  },
  highlightDate: {
    color: 'red',
    fontWeight: 'bold',
  },
  middleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
    marginTop: -8,
  },
  bookingId: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#000',
    fontFamily: 'serif',
  },
  distance: {
    // fontWeight: 'bold',
    fontSize: 14,
    color: '#000',
    fontFamily: 'serif',
  },
  bookingTime: {
    // backgroundColor: '#7BD540',
    // padding: 4,
    // borderRadius: 4,
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'serif',
    marginTop: -4,
    marginBottom: -4,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'serif',
  },
  blackText: {
    color: '#000',
    fontFamily: 'serif',
  },
  noticeSection: {
    backgroundColor: 'white',
    padding: 7,
    //borderTopWidth: 2,
    //borderTopColor: 'green',
    borderRadius: 5,
    elevation: 4,
  },
  noticeText: {
    fontSize: 11,
    color: '#333',
    // textAlign: 'center',
    marginTop: -10,
    fontFamily: 'serif',
  },
  clickableText: {
    color: '#f90',
    fontSize: 14,
    //fontWeight: 'bold',
    // textAlign: 'center',
    textDecorationLine: 'underline',
    marginBottom: 10,
    marginTop: -1.5,
    fontFamily: 'serif',
  },
  emergencyText: {
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 11.5,
    marginTop: -11,
  },
});
