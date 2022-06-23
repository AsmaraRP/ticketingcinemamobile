import React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import Footer from '../../components/Footer';
import styles from './styles';
import {useState} from 'react';
import {useSelector} from 'react-redux';

function History(props) {
  const ticket = useSelector(state => state.ticket.data);
  console.log(ticket);
  const [data, setData] = useState(ticket);
  const handleTicket = item => {
    // setSend(item);
    const myJSON = JSON.stringify(item);
    props.navigation.navigate('ProfileNavigator', {
      screen: 'Ticket',
      params: myJSON,
    });
  };
  const handleProfile = () => {
    props.navigation.navigate('ProfileNavigator', {
      screen: 'Profile',
    });
  };
  const ListHeader = () => {
    return (
      <View>
        <View style={styles.layoutMenuHistory}>
          <TouchableOpacity onPress={handleProfile}>
            <Text style={styles.textType2}>Detail Account</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textType1}>Order History</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        ListHeaderComponent={ListHeader}
        renderItem={({item}) => (
          <View style={styles.cardHistory}>
            <Image
              style={styles.photo}
              source={
                item.premiere === 'ebv.id'
                  ? require('../../assets/sponsor1.png')
                  : item.premiere === 'cineone21'
                  ? require('../../assets/sponsor2.png')
                  : require('../../assets/sponsor3.png')
              }
            />
            <Text style={styles.textType3}>
              {item.dateBooking.split('T')[0] + ' - ' + item.timeBooking}
            </Text>
            <Text style={styles.textType4}>{item.name}</Text>
            <TouchableOpacity
              style={
                item.statusUsed === 'used' ? styles.buttonUsed : styles.button
              }
              disabled={item.statusUsed === 'used' ? true : false}
              onPress={() =>
                handleTicket({
                  name: item.name,
                  category: item.category,
                  date: item.dateBooking,
                  time: item.timeBooking,
                  seat: item.seat,
                  total: item.totalPayment,
                  id: item.bookingId,
                })
              }
              //   // dateBooking: item.dateBooking,
              //   // timeBooking: item.timeBooking,
              //   // statusUsed: item.statusUsed,
              //   // name: item.name,
              //   // category: item.category,
              //   // seat: item.seat,
              //   // totalPayment: item.totalPayment,
            >
              <Text style={styles.textButton}>
                {item.statusUsed !== 'used'
                  ? 'Ticket in Active'
                  : 'Ticket is Already Used'}
              </Text>
            </TouchableOpacity>
          </View>
        )}
        ListFooterComponent={() => (
          <View>
            <Footer />
          </View>
        )}
      />
    </View>
  );
}
export default History;
