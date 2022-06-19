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
import styles from './styles';

function Order(props) {
  const listSeat = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [reservedSeat, setReservedSeat] = useState(['A1', 'C7']);

  useEffect(() => {
    console.log(props.route.params);
  }, []);
  const handlePayment = () => {
    props.navigation.navigate('HomeNavigator', {
      screen: 'Payment',
    });
  };
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
  return (
    <ScrollView>
      <Text style={styles.textHeader}>Choose Your Seat</Text>
      <View style={styles.seatCard}>
        <View style={styles2.containerSeat}>
          <FlatList
            data={listSeat}
            keyExtractor={item => item}
            renderItem={({item}) => (
              <Seat
                seatAlphabhet={item}
                reserved={reservedSeat}
                selected={selectedSeat}
                selectSeat={handleSelectedSeat}
              />
            )}
          />
        </View>
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
        <Text style={styles.infoTitle}>Spider-Man: Homecoming</Text>
        <View style={styles.layoutMenuInfo}>
          <View>
            <Text style={styles.textMenu}>Tuesday, 07 July 2020</Text>
          </View>
          <View style={styles.textSpace}>
            <Text> </Text>
          </View>
          <View>
            <Text style={styles.textMenu2}>02:00pm</Text>
          </View>
        </View>
        <View style={styles.layoutMenuInfo}>
          <View>
            <Text style={styles.textMenu}>One ticket price</Text>
          </View>
          <View style={styles.textSpace2}>
            <Text> </Text>
          </View>
          <View>
            <Text style={styles.textMenu2}>$10</Text>
          </View>
        </View>
        <View style={styles.layoutMenuInfo}>
          <View>
            <Text style={styles.textMenu}>Seat choosed</Text>
          </View>
          <View style={styles.textSpace3}>
            <Text> </Text>
          </View>
          <View>
            <Text style={styles.textMenu2}>C4 C5 C6</Text>
          </View>
        </View>
        <View style={styles.layoutMenuInfo}>
          <View>
            <Text style={styles.textMenu3}>Total Payment</Text>
          </View>
          <View style={styles.textSpace4}>
            <Text> </Text>
          </View>
          <View>
            <Text style={styles.textMenu4}>$30</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handlePayment}>
        <Text style={styles.textButton}>Checkout now</Text>
      </TouchableOpacity>
      <Footer />
    </ScrollView>
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
