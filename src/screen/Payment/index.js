import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Footer from '../../components/Footer';
import styles from './styles';
import axios from '../../utils/axios';
import {useSelector, useDispatch} from 'react-redux';

function Payment(props) {
  const dispatch = useDispatch();
  const dataPayment = JSON.parse(props.route.params);
  const user = useSelector(state => state.user.data);
  const [isError, setIsError] = useState(false);
  const [form, setForm] = useState({
    firstName: user.firstName,
    email: dataPayment.email,
    noTelp: user.noTelp,
  });
  const handleChangeForm = (text, name) => {
    setForm({...form, [name]: text});
  };
  const handlePayment = async () => {
    try {
      const data = {
        userId: dataPayment.userId,
        scheduleId: dataPayment.scheduleId,
        dateBooking: dataPayment.dateBooking,
        timeBooking: dataPayment.timeBooking,
        paymentMethod: 'Midtrans',
        totalPayment: dataPayment.totalPayment,
        seat: dataPayment.seat,
      };
      if (form.firstName === '' || form.email === '' || form.noTelp === '') {
        setIsError(true);
      } else {
        const result = await axios.post('booking', data);
        const midtrans = result.data.data.redirectUrl;
        props.navigation.navigate('HomeNavigator', {
          screen: 'Midtrans',
          params: midtrans,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView>
      <View style={styles.layoutMenuPayment}>
        <View>
          <Text style={styles.textType2}>Total Payment</Text>
        </View>
        <View>
          <Text style={styles.textType1}>
            {'Rp ' + dataPayment.totalPayment}
          </Text>
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
        <Text style={styles.textType3}>First Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Write your name"
          value={form.firstName}
          onChangeText={text => handleChangeForm(text, 'firstName')}
        />
        <Text style={styles.textType3}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Write your email"
          value={form.email}
          onChangeText={text => handleChangeForm(text, 'email')}
        />
        <Text style={styles.textType3}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Write your phone number"
          value={form.noTelp}
          onChangeText={text => handleChangeForm(text, 'noTelp')}
        />
        {isError ? (
          <View style={styles.warning}>
            <Text style={styles.textWarning}>Fill your data correctly</Text>
          </View>
        ) : null}
      </View>
      <TouchableOpacity style={styles.button} onPress={handlePayment}>
        <Text style={styles.textButton}>Pay your order</Text>
      </TouchableOpacity>
      <Footer />
    </ScrollView>
  );
}
export default Payment;
