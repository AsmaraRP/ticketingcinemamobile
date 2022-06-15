import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  ViewPropTypes,
} from 'react-native';
import Footer from '../../components/Footer';
import styles from './styles';

function Payment(props) {
  return (
    <ScrollView>
      <View style={styles.layoutMenuPayment}>
        <View>
          <Text style={styles.textType2}>Total Payment</Text>
        </View>
        <View>
          <Text style={styles.textType1}>$30.00</Text>
        </View>
      </View>
      <Text style={styles.textHeader}>Payment Method</Text>
      <View style={styles.cardPayment}>
        <View style={styles.paymentMethod}>
          <View style={styles.paymentContent}>
            <Image
              style={styles.paymentImage}
              source={require('../../assets/bca.png')}
            />
          </View>
          <View style={styles.paymentContent}>
            <Image
              style={styles.paymentImage}
              source={require('../../assets/dana.png')}
            />
          </View>
          <View style={styles.paymentContent}>
            <Image
              style={styles.paymentImage}
              source={require('../../assets/gopay.png')}
            />
          </View>
        </View>
        <View style={styles.paymentMethod}>
          <View style={styles.paymentContent}>
            <Image
              style={styles.paymentImage}
              source={require('../../assets/ovo.png')}
            />
          </View>
          <View style={styles.paymentContent}>
            <Image
              style={styles.paymentImage}
              source={require('../../assets/gpay.png')}
            />
          </View>
          <View style={styles.paymentContent}>
            <Image
              style={styles.paymentImage}
              source={require('../../assets/visa.png')}
            />
          </View>
        </View>
        <View style={styles.textSet}>
          <Text style={styles.textOption}>Pay via cash? </Text>
          <TouchableOpacity style={styles.directText}>
            <Text style={styles.textButtonDirect}>See how it work</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.textHeader}>Personal Info</Text>
      <View style={styles.cardPersonal}>
        <Text style={styles.textType3}>Full Name</Text>
        <TextInput style={styles.input} placeholder="James Elre" />
        <Text style={styles.textType3}>Email</Text>
        <TextInput style={styles.input} placeholder="James@gmail.com" />
        <Text style={styles.textType3}>Phone Number</Text>
        <TextInput style={styles.input} placeholder="+628542580" />
        <View style={styles.warning}>
          <Text style={styles.textWarning}>Fill your data correctly</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Pay your order</Text>
      </TouchableOpacity>
      <Footer />
    </ScrollView>
  );
}
export default Payment;
