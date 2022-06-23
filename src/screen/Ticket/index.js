import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Footer from '../../components/Footer';
import styles from './styles';
import BarcodeCreatorViewManager, {
  BarcodeFormat,
} from 'react-native-barcode-creator';

function Ticket(props) {
  const dataTicket = JSON.parse(props.route.params);
  console.log(dataTicket);
  return (
    <ScrollView>
      <View style={styles.cardTicket}>
        <BarcodeCreatorViewManager
          value={dataTicket.id}
          background={'#FFFFFF'}
          foregroundColor={'#000000'}
          format={BarcodeFormat.QR}
          style={styles.box}
        />
      </View>
      <View style={styles.cardDetail}>
        <View style={styles.layoutMenuTicket}>
          <View style={styles.right}>
            <Text style={styles.textType1}>Movie</Text>
            <Text style={styles.textType2}>
              {dataTicket.name.length >= 10
                ? dataTicket.name.substring(0, 10) + '...'
                : dataTicket.name}
            </Text>
          </View>
          <View style={styles.left}>
            <Text style={styles.textType1}>Category</Text>
            <Text style={styles.textType2}>{dataTicket.category}</Text>
          </View>
        </View>
        <View style={styles.layoutMenuTicket}>
          <View style={styles.right}>
            <Text style={styles.textType1}>Date</Text>
            <Text style={styles.textType2}>
              {dataTicket.date.split('T')[0]}
            </Text>
          </View>
          <View style={styles.left}>
            <Text style={styles.textType1}>Time</Text>
            <Text style={styles.textType2}>
              {dataTicket.time.substring(0, 5)}
            </Text>
          </View>
        </View>
        <View style={styles.layoutMenuTicket}>
          <View style={styles.right}>
            <Text style={styles.textType1}>Count</Text>
            <Text style={styles.textType2}>{1 + ' pcs'}</Text>
          </View>
          <View style={styles.left}>
            <Text style={styles.textType1}>Seat</Text>
            <Text style={styles.textType2}>{dataTicket.seat}</Text>
          </View>
        </View>
        <View style={styles.layoutMenuTotal}>
          <View style={styles.right}>
            <Text style={styles.textType3}>Total</Text>
          </View>
          <View style={styles.left}>
            <Text style={styles.textType4}>{'Rp ' + dataTicket.total}</Text>
          </View>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}

export default Ticket;
