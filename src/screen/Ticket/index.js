import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import Footer from '../../components/Footer';
import styles from './styles';

function Ticket(props) {
  return (
    <ScrollView>
      <View style={styles.cardTicket}>
        <Image
          style={styles.photo}
          source={require('../../assets/barcode.png')}
        />
      </View>
      <View style={styles.cardDetail}>
        <View style={styles2.layoutMenuTicket}>
          <View>
            <Text style={styles.textType1}>Movie</Text>
            <Text style={styles.textType2}>Spider-Man</Text>
          </View>
          <View>
            <Text style={styles.textType1}>Category</Text>
            <Text style={styles.textType2}>Action</Text>
          </View>
        </View>
        <View style={styles2.layoutMenuTicket}>
          <View>
            <Text style={styles.textType1}>Date</Text>
            <Text style={styles.textType2}>07 Jul</Text>
          </View>
          <View>
            <Text style={styles.textType1}>Time</Text>
            <Text style={styles.textType2}>2:00pm</Text>
          </View>
        </View>
        <View style={styles2.layoutMenuTicket}>
          <View>
            <Text style={styles.textType1}>Count</Text>
            <Text style={styles.textType2}>3 pcs</Text>
          </View>
          <View>
            <Text style={styles.textType1}>Seat</Text>
            <Text style={styles.textType2}>C4, C5, C6</Text>
          </View>
        </View>
        <View style={styles2.layoutMenuTotal}>
          <View>
            <Text style={styles.textType3}>Total</Text>
          </View>
          <View>
            <Text style={styles.textType2}>$30.00</Text>
          </View>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}
const styles2 = StyleSheet.create({
  layoutMenuTicket: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  layoutMenuTotal: {
    borderWidth: 1,
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});
export default Ticket;
