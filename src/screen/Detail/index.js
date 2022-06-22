import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Footer from '../../components/Footer';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-date-picker';
import styles from './styles';
import axios from '../..//utils/axios';
import {useSelector} from 'react-redux';

function Detail(props) {
  const movie = useSelector(state => state.movie.data);
  const data = movie[0];
  const [totalPage, setTotalPage] = useState(5);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);
  const [last, setLast] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [limit, setLimit] = useState(2);
  const [location, setLocation] = useState('');
  const [schedule, setSchedule] = useState([]);
  const getdataSchedule = async () => {
    try {
      setRefresh(false);
      setLoading(false);
      setLoadMore(false);
      setLocation(location === null ? '' : location);
      const resultSchedule = await axios.get(
        `schedule?limit=${limit}&searchLocation=${location}`,
      );
      setSchedule(resultSchedule.data.data);
      console.log(schedule);
      setTotalPage(resultSchedule.data.pagination.totalPage);
      if (totalPage === 1) {
        setLast(true);
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    getdataSchedule();
  }, [limit]);
  useEffect(() => {
    getdataSchedule();
  }, [location]);
  const [openCity, setOpenCity] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [date, setDate] = useState(new Date());
  const [title, setTitle] = useState('Set a date');
  const [items, setItems] = useState([
    {label: 'Banyuwangi', value: 'Banyuwangi'},
    {label: 'Jember', value: 'Jember'},
    {label: 'Surabaya', value: 'Surabaya'},
  ]);
  const [dataOrder, setDataOrder] = useState({
    movieId: data.id,
    dateBooking: date.toISOString().split('T')[0],
  });
  const changeDataBooking = order => {
    setDataOrder({...dataOrder, ...order});
  };
  const handleRefresh = () => {
    console.log('REFRESH SCREEN');
    setLast(false);
    setLimit(2);
    setLocation('');
    getdataSchedule();
  };
  const handleLoadMore = () => {
    console.log('LOAD MORE DATA');
    if (!loadMore) {
      setLoadMore(true);
      if (totalPage >= 2) {
        setLoading(true);
        setLimit(limit + 2);
      } else {
        setLoading(false);
        setLast(true);
      }
    }
  };
  const handleBook = async () => {
    try {
      const myJSON = JSON.stringify(dataOrder);
      props.navigation.navigate('HomeNavigator', {
        screen: 'Order',
        params: myJSON,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const ListHeader = () => {
    return (
      <>
        <View style={styles.menu1}>
          <View style={styles.cardMain}>
            <View style={styles.cardMovie}>
              <Image
                style={styles.movieImage}
                source={{
                  uri: `https://res.cloudinary.com/djanbjfvx/image/upload/v1650922804/${data.image}`,
                }}
              />
            </View>
          </View>
          <View style={styles.form}>
            <Text style={styles.textHeader}>{data.name}</Text>
            <Text style={styles.textType2}>{data.category}</Text>
            <View style={styles.layoutMenu}>
              <View>
                <Text style={styles.textType2}>Release date</Text>
                <Text style={styles.textType1}>
                  {data.releaseDate.split('T')[0]}
                </Text>
              </View>
              <View>
                <Text style={styles.textType2}>Directed by</Text>
                <Text style={styles.textType1}>
                  {data.director.length >= 10
                    ? data.director.substring(0, 10) + '...'
                    : data.director}
                </Text>
              </View>
            </View>
            <View style={styles.layoutMenu}>
              <View>
                <Text style={styles.textType2}>Duration</Text>
                <Text style={styles.textType1}>{data.duration}</Text>
              </View>
              <View>
                <Text style={styles.textType2}>Cast</Text>
                <Text style={styles.textType1}>
                  {data.cast.length >= 10
                    ? data.cast.substring(0, 10) + '...'
                    : data.cast}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.synopsis}>
            <Text style={styles.textType1}>Synopsis</Text>
            <Text style={styles.textType2}>{data.synopsis}</Text>
          </View>
        </View>
        <View style={styles.menu2}>
          <Text style={styles.textHeader}>Showtimes and Ticket</Text>
          <View>
            <TouchableOpacity
              onPress={() => setOpen(true)}
              style={styles.setdate}>
              <Text style={styles.setdatetext}>{title}</Text>
            </TouchableOpacity>
            <DatePicker
              modal
              open={open}
              date={date}
              mode="date"
              onConfirm={time => {
                setOpen(false);
                setDate(time);
                setDataOrder({
                  ...dataOrder,
                  dateBooking: time.toISOString().split('T')[0],
                });
                const dd = String(time.getDate()).padStart(2, '0');
                const mm = String(time.getMonth() + 1).padStart(2, '0');
                const yyyy = time.getFullYear();
                const today = mm + '/' + dd + '/' + yyyy;
                setTitle(today);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </View>
          <View style={styles.sort}>
            <DropDownPicker
              style={styles.sortDrop}
              open={openCity}
              value={value}
              items={items}
              setOpen={setOpenCity}
              setValue={setValue}
              setItems={setItems}
              placeholder="Set a city"
              onPress={() => {
                setLocation(value);
                console.log(location);
              }}
            />
          </View>
        </View>
      </>
    );
  };
  return (
    <View style={styles.mainSchedule}>
      <FlatList
        data={schedule}
        keyExtractor={item => item.id}
        ListHeaderComponent={ListHeader}
        renderItem={({item}) => (
          <View style={styles.scheduleCard} key={item.id}>
            <Image
              style={styles.sponsor}
              source={
                item.premiere === 'ebv.id'
                  ? require('../../assets/sponsor1.png')
                  : item.premiere === 'cineone21'
                  ? require('../../assets/sponsor2.png')
                  : require('../../assets/sponsor3.png')
              }
            />
            <Text style={styles.scheduleText}>{item.location}</Text>
            <View style={styles.scheduleTime}>
              <TouchableOpacity
                style={styles.scheduleTimeContent}
                disabled={
                  item.time.split(',').indexOf('08:00') < 0 ? true : false
                }
                onPress={() =>
                  changeDataBooking({
                    price: item.price,
                    timeBooking: '08:00',
                    scheduleId: item.id,
                  })
                }>
                <Text
                  style={
                    item.time.split(',').indexOf('08:00') < 0
                      ? styles.timenonactive
                      : dataOrder.timeBooking === '08:00' &&
                        dataOrder.scheduleId === item.id
                      ? styles.timechosed
                      : styles.timeactive
                  }>
                  08:00
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.scheduleTimeContent}
                disabled={
                  item.time.split(',').indexOf('10:00') < 0 ? true : false
                }
                onPress={() =>
                  changeDataBooking({
                    price: item.price,
                    timeBooking: '10:00',
                    scheduleId: item.id,
                  })
                }>
                <Text
                  style={
                    item.time.split(',').indexOf('10:00') < 0
                      ? styles.timenonactive
                      : dataOrder.timeBooking === '10:00' &&
                        dataOrder.scheduleId === item.id
                      ? styles.timechosed
                      : styles.timeactive
                  }>
                  10:00
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.scheduleTimeContent}
                disabled={
                  item.time.split(',').indexOf('12:00') < 0 ? true : false
                }
                onPress={() =>
                  changeDataBooking({
                    price: item.price,
                    timeBooking: '12:00',
                    scheduleId: item.id,
                  })
                }>
                <Text
                  style={
                    item.time.split(',').indexOf('12:00') < 0
                      ? styles.timenonactive
                      : dataOrder.timeBooking === '12:00' &&
                        dataOrder.scheduleId === item.id
                      ? styles.timechosed
                      : styles.timeactive
                  }>
                  12:00
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.scheduleTimeContent}
                disabled={
                  item.time.split(',').indexOf('14:00') < 0 ? true : false
                }
                onPress={() =>
                  changeDataBooking({
                    price: item.price,
                    timeBooking: '14:00',
                    scheduleId: item.id,
                  })
                }>
                <Text
                  style={
                    item.time.split(',').indexOf('14:00') < 0
                      ? styles.timenonactive
                      : dataOrder.timeBooking === '14:00' &&
                        dataOrder.scheduleId === item.id
                      ? styles.timechosed
                      : styles.timeactive
                  }>
                  14:00
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.scheduleTime}>
              <TouchableOpacity
                style={styles.scheduleTimeContent}
                disabled={
                  item.time.split(',').indexOf('16:00') < 0 ? true : false
                }
                onPress={() =>
                  changeDataBooking({
                    price: item.price,
                    timeBooking: '16:00',
                    scheduleId: item.id,
                  })
                }>
                <Text
                  style={
                    item.time.split(',').indexOf('16:00') < 0
                      ? styles.timenonactive
                      : dataOrder.timeBooking === '16:00' &&
                        dataOrder.scheduleId === item.id
                      ? styles.timechosed
                      : styles.timeactive
                  }>
                  16:00
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.scheduleTimeContent}
                disabled={
                  item.time.split(',').indexOf('18:00') < 0 ? true : false
                }
                onPress={() =>
                  changeDataBooking({
                    price: item.price,
                    timeBooking: '18:00',
                    scheduleId: item.id,
                  })
                }>
                <Text
                  style={
                    item.time.split(',').indexOf('18:00') < 0
                      ? styles.timenonactive
                      : dataOrder.timeBooking === '18:00' &&
                        dataOrder.scheduleId === item.id
                      ? styles.timechosed
                      : styles.timeactive
                  }>
                  18:00
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.scheduleTimeContent}
                disabled={
                  item.time.split(',').indexOf('20:00') < 0 ? true : false
                }
                onPress={() =>
                  changeDataBooking({
                    price: item.price,
                    timeBooking: '20:00',
                    scheduleId: item.id,
                  })
                }>
                <Text
                  style={
                    item.time.split(',').indexOf('20:00') < 0
                      ? styles.timenonactive
                      : dataOrder.timeBooking === '20:00' &&
                        dataOrder.scheduleId === item.id
                      ? styles.timechosed
                      : styles.timeactive
                  }>
                  20:00
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.scheduleTimeContent}
                disabled={
                  item.time.split(',').indexOf('22:00') < 0 ? true : false
                }
                onPress={() =>
                  changeDataBooking({
                    price: item.price,
                    timeBooking: '22:00',
                    scheduleId: item.id,
                  })
                }>
                <Text
                  style={
                    item.time.split(',').indexOf('22:00') < 0
                      ? styles.timenonactive
                      : dataOrder.timeBooking === '22:00' &&
                        dataOrder.scheduleId === item.id
                      ? styles.timechosed
                      : styles.timeactive
                  }>
                  22:00
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.priceContent}>
              <View>
                <Text style={styles.priceText}>Price</Text>
              </View>
              <View>
                <Text style={styles.priceText2}>
                  {'Rp ' + item.price + '/seat'}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.buttonCard}
              disabled={item.id === dataOrder.scheduleId ? false : true}
              onPress={handleBook}>
              <Text style={styles.buttonText}>Book Now</Text>
            </TouchableOpacity>
          </View>
        )}
        onRefresh={handleRefresh}
        refreshing={refresh}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={() =>
          last ? (
            <View>
              <Text style={styles.nomore}>-- No more data --</Text>
              <Footer />
            </View>
          ) : loading ? (
            <ActivityIndicator size="large" color="blue" />
          ) : null
        }
      />
    </View>
  );
}
export default Detail;
