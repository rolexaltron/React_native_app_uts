import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Profile = () => {
  return (
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

        <Text style={styles.info}>Validity: FROM 30/09/2024 TO 29/10/2024</Text>
        <Text style={styles.info}>Distance: 79 km</Text>
        <Text style={styles.info}>Booking Time: 29/09/2024 20:10</Text>

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
    color: '#ADFF2F',
    marginBottom: 10,
  },
  ticket: {
    backgroundColor: '#adff2f',
    padding: 15,
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
    marginTop: 15,
  },
  button: {
    backgroundColor: '#ff5733',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
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
    backgroundColor: '#4B0082',
    padding: 9,
    borderRadius: 5,
    alignItems: 'center',
    width: 180, // Set desired width
    alignSelf: 'flex-start', // Align it to the left of the container
  },
  buttonTextmon: {
    color: '#fff',
    fontWeight: 'bold',
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
    marginTop:-4
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
  },
  localLang: {
    fontSize: 14,
    marginBottom: 1,
    marginLeft:30
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
    marginLeft:51
    
  },
    localRed1: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft:88
    
  },
});
