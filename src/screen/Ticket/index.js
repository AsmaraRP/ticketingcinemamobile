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
        <View style={styles.layoutMenuTicket}>
          <View>
            <Text style={styles.textType1}>Movie</Text>
            <Text style={styles.textType2}>Spider-Man</Text>
          </View>
          <View style={styles.textSpace}>
            <Text> </Text>
          </View>
          <View>
            <Text style={styles.textType1}>Category</Text>
            <Text style={styles.textType2}>Action</Text>
          </View>
        </View>
        <View style={styles.layoutMenuTicket}>
          <View>
            <Text style={styles.textType1}>Date</Text>
            <Text style={styles.textType2}>07 Jul</Text>
          </View>
          <View style={styles.textSpace2}>
            <Text> </Text>
          </View>
          <View>
            <Text style={styles.textType1}>Time</Text>
            <Text style={styles.textType2}>2:00</Text>
          </View>
        </View>
        <View style={styles.layoutMenuTicket}>
          <View>
            <Text style={styles.textType1}>Count</Text>
            <Text style={styles.textType2}>3 pcs</Text>
          </View>
          <View style={styles.textSpace3}>
            <Text> </Text>
          </View>
          <View>
            <Text style={styles.textType1}>Seat</Text>
            <Text style={styles.textType2}>C4, C5, C6</Text>
          </View>
        </View>
        <View style={styles.layoutMenuTotal}>
          <View>
            <Text style={styles.textType3}>Total</Text>
          </View>
          <View style={styles.textSpace4}>
            <Text> </Text>
          </View>
          <View>
            <Text style={styles.textType4}>$30.00</Text>
          </View>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}

export default Ticket;
