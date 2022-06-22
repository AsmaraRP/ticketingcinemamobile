import React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import Footer from '../../components/Footer';
import styles from './styles';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {getDataBooking} from '../../stores/actions/ticket';
import AsyncStorage from '@react-native-async-storage/async-storage';
function History(props) {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const getHistory = async () => {
    try {
      const id = await AsyncStorage.getItem('id');
      const result = await dispatch(getDataBooking(id));
      console.log(result.data.data);
      // setData(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getHistory();
  }, []);
  const handleTicket = () => {
    props.navigation.navigate('ProfileNavigator', {
      screen: 'Ticket',
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
        numColumns="2"
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
              onPress={handleTicket}>
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
