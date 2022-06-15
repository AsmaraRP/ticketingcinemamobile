import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import Footer from '../../components/Footer';
import styles from './styles';

function History(props) {
  return (
    <ScrollView>
      <View style={styles.layoutMenuHistory}>
        <TouchableOpacity>
          <Text style={styles.textType2}>Detail Account</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.textType1}>Order History</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardHistory}>
        <Image
          style={styles.photo}
          source={require('../../assets/sponsor1.png')}
        />
        <Text style={styles.textType3}>Tuesday, 07 July 2020 - 04:30pm</Text>
        <Text style={styles.textType4}>Spider-Man : Homecoming</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Ticket in Active</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardHistory}>
        <Image
          style={styles.photo}
          source={require('../../assets/sponsor1.png')}
        />
        <Text style={styles.textType3}>Tuesday, 07 July 2020 - 04:30pm</Text>
        <Text style={styles.textType4}>Avenger: End Game</Text>
        <TouchableOpacity style={styles.buttonUsed}>
          <Text style={styles.textButton}>Ticket used</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </ScrollView>
  );
}
export default History;
