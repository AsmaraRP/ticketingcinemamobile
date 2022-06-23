import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import Seat from '../../components/Seat';
import Footer from '../../components/Footer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import {useSelector} from 'react-redux';
import Notification from '../../utils/notif';

function Order(props) {
  const listSeat = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [reservedSeat, setReservedSeat] = useState(['A1', 'C7']);
  const dataOrder = JSON.parse(props.route.params);
  const movie = useSelector(state => state.movie.data[0]);
  const handleSelectedSeat = data => {
    if (selectedSeat.includes(data)) {
      const deleteSeat = selectedSeat.filter(el => {
        return el !== data;
      });
      setSelectedSeat(deleteSeat);
    } else {
      setSelectedSeat([...selectedSeat, data]);
    }
  };
  // useEffect(() => {
  //   const dataOrder = props.route.params;
  // }, []);
  const handlePayment = async () => {
    try {
      const email = await AsyncStorage.getItem('email');
      const id = await AsyncStorage.getItem('id');
      const dataPayment = {
        dateBooking: dataOrder.dateBooking,
        timeBooking: dataOrder.timeBooking,
        totalPayment: dataOrder.price * selectedSeat.length,
        seat: selectedSeat,
        scheduleId: dataOrder.scheduleId,
        email: email,
        userId: id,
      };
      Notification.reminderProductNotification();
      const myJSON = JSON.stringify(dataPayment);
      props.navigation.navigate('HomeNavigator', {
        screen: 'Payment',
        params: myJSON,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const ListHeader = () => {
    return (
      <>
        <Text style={styles.textHeader}>Choose Your Seat</Text>
      </>
    );
  };
  return (
    <View>
      <FlatList
        data={listSeat}
        keyExtractor={item => item}
        ListHeaderComponent={ListHeader}
        ListFooterComponent={() => (
          <>
            <View style={styles.backoption}>
              <Text style={styles2.textSeat}>Setting key</Text>
              <View style={styles2.layseat}>
                <View style={styles2.kindSeat1}>
                  <Text />
                </View>
                <View>
                  <Text style={styles2.textKind}>Available</Text>
                </View>
              </View>
              <View style={styles2.layseat}>
                <View style={styles2.kindSeat2}>
                  <Text />
                </View>
                <View>
                  <Text style={styles2.textKind}>Sold</Text>
                </View>
              </View>
              <View style={styles2.layseat}>
                <View style={styles2.kindSeat3}>
                  <Text />
                </View>
                <View>
                  <Text style={styles2.textKind}>Selected</Text>
                </View>
              </View>
            </View>
            <Text style={styles.textHeader}>Order Info</Text>
            <View style={styles.infoCard}>
              <Image
                style={styles.infoImage}
                source={require('../../assets/sponsor2.png')}
              />
              <Text style={styles.infoText}>CineOne21 Cinema</Text>
              <Text style={styles.infoTitle}>{movie.name}</Text>
              <View style={styles.layoutMenuInfo}>
                <View style={styles.left}>
                  <Text style={styles.textMenu}>{dataOrder.dateBooking}</Text>
                </View>
                <View style={styles.right}>
                  <Text style={styles.textMenu2}>{dataOrder.timeBooking}</Text>
                </View>
              </View>
              <View style={styles.layoutMenuInfo}>
                <View style={styles.left}>
                  <Text style={styles.textMenu}>One ticket price</Text>
                </View>
                <View style={styles.right}>
                  <Text style={styles.textMenu2}>
                    {'Rp ' + dataOrder.price}
                  </Text>
                </View>
              </View>
              <View style={styles.layoutMenuInfo}>
                <View style={styles.left}>
                  <Text style={styles.textMenu}>Seat choosed</Text>
                </View>
                <View style={styles.right}>
                  <Text style={styles.textMenu2}>{selectedSeat + ' '}</Text>
                </View>
              </View>
              <View style={styles.layoutMenuInfo}>
                <View style={styles.left}>
                  <Text style={styles.textMenu3}>Total Payment</Text>
                </View>
                <View style={styles.right}>
                  <Text style={styles.textMenu4}>
                    {dataOrder.price * selectedSeat.length}
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={handlePayment}>
              <Text style={styles.textButton}>Checkout now</Text>
            </TouchableOpacity>
            <Footer />
          </>
        )}
        renderItem={({item}) => (
          <View style={styles.backseat}>
            <Seat
              seatAlphabhet={item}
              reserved={reservedSeat}
              selected={selectedSeat}
              selectSeat={handleSelectedSeat}
            />
          </View>
        )}
      />
    </View>
  );
}
const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  containerSeat: {
    backgroundColor: 'white',
    borderRadius: 8,
  },
  textSeat: {
    color: 'black',
    marginLeft: 20,
    marginTop: 20,
    fontFamily: 'Mulish-Regular',
  },
  layseat: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 20,
    marginLeft: 20,
  },
  kindSeat1: {
    width: 20,
    backgroundColor: '#D6D8E7',
    marginRight: 20,
    borderRadius: 4,
  },
  kindSeat2: {
    width: 20,
    backgroundColor: '#6E7191',
    marginRight: 20,
    borderRadius: 4,
  },
  kindSeat3: {
    width: 20,
    backgroundColor: '#5F2EEA',
    marginRight: 20,
    borderRadius: 4,
  },
});
export default Order;
