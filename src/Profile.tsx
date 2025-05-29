import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import HeaderMarquee from './HeaderMarquee';

const Profile = () => {
  return (
    <SafeAreaView>

    
    <ScrollView contentContainerStyle={styles.container}>
      <HeaderMarquee/>
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
            <Text style={styles.date1}>29/09/2024</Text>
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
        <View style={styles.line1} />

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
              <Text style={styles.labelBottom}>
                CLASS: <Text style={styles.redText}>SECOND</Text>
              </Text>
              <Text style={styles.localRed}>द्वि श्रे</Text>
            </View>
            <View>
              <Text style={styles.localRed1}>सुपरफास्ट</Text>
              <Text style={styles.labelBottom}>
                TRAIN TYPE: <Text style={styles.redText}>SUPERFAST</Text>
              </Text>
              <Text style={styles.localRed1}>सुपरफास्ट</Text>
            </View>
          </View>
        </View>

        <View>
          <Text style={styles.infoRowTop}>
            SAC:<Text style={styles.blackText}>996411</Text> IR:
            <Text style={styles.blackText}>27AAAGM0289C2ZI</Text>
          </Text>

          <Text style={styles.infoRow}>
            Validity: FROM <Text style={styles.highlightDate}>30/09/2024</Text>{' '}
            TO <Text style={styles.highlightDate}>29/10/2024</Text>
          </Text>

          <View style={styles.middleRow}>
            <Text style={styles.bookingId}>R17527</Text>
            <Text style={styles.distance}>
              Distance: <Text style={styles.blackText}>79 km</Text>
            </Text>
          </View>

          <Text style={styles.bookingTime}>
            Booking Time: <Text style={styles.boldText}>29/09/2024 20:10</Text>
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
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>OPEN QR CODE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>NEXT TRAINS TO WARDHA JN..</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>OK</Text>
          </TouchableOpacity>
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
  container: {
    padding: 10,
    // backgroundColor: '#eee',
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
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
   justifyContent: 'space-between',
  },
  happy: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 6,
   //fontFamily: 'serif',
   
    
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
  buttonContainer: {
    marginTop: -8,
  },
  button: {
    backgroundColor: '#ff5733',
    padding: 10,
    marginVertical: 5,
    borderRadius: 20,
    width:'90%',
    marginLeft:18,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
   
  },
  footer: {
    marginTop: 20,
    textAlign: 'center',
    color: '#888',
  },
  buttonmon: {
    backgroundColor: '#6A1B9A',
    padding: 6,
    borderRadius: 1,
    alignItems: 'center',
    width: '54%', // Set desired width
    alignSelf: 'flex-start', // Align it to the left of the container
    marginLeft:20,
    
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
    marginVertical: 2,
  },
  label1: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 100,
  },
  date1: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  amount1: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  mobile1: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  info1: {
    fontSize: 15,
    marginVertical: -1.5,
    fontWeight: 'bold',
  },
  red1: {
    color: 'red',
  },
  bold1: {
    fontWeight: 'bold',
  },
  line1: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginVertical: 8, // optional spacing above and below the line
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
  },
  stationCode: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  stationLocal: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  localLang: {
    fontSize: 14,
    marginBottom: 1,
    marginLeft: 30,
    fontWeight: 'bold',
  },

  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  labelBottom: {
    fontWeight: 'bold',
  },
  redText: {
    color: 'red',
  },
  localRed: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 51,
    marginTop: -2,
  },
  localRed1: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 88,
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
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  infoRow: {
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 6,
    marginLeft: 35,
  },
  highlightDate: {
    color: 'red',
    fontWeight: 'bold',
  },
  middleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  bookingId: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
  distance: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#000',
  },
  bookingTime: {
    // backgroundColor: '#7BD540',
    // padding: 4,
    // borderRadius: 4,
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
  boldText: {
    fontWeight: 'bold',
    color: '#000',
  },
  blackText: {
    color: '#000',
  },
  noticeSection: {
    backgroundColor: '#eee',
    padding: 10,
    borderTopWidth: 2,
    borderTopColor: 'green',
  },
  noticeText: {
    fontSize: 10,
    color: '#333',
    // textAlign: 'center',
    marginTop: -10,
  },
  clickableText: {
    color: '#f90',
    fontSize: 15,
    fontWeight: 'bold',
    // textAlign: 'center',
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
  emergencyText: {
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 12,
    marginTop:-11,
  },
});
