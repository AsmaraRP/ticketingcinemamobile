import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import Footer from '../../components/Footer';
import styles from './styles';
import DropDownPicker from 'react-native-dropdown-picker';
import axios from '../..//utils/axios';
import {useDispatch} from 'react-redux';
import {getDataMovieId} from '../../stores/actions/movie';

function Viewall(props) {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    sort: '',
    searchRelease: '',
    searchName: '',
    page: 1,
    limit: 8,
  });
  const [totalPage, setTotalPage] = useState(5);
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);
  const [last, setLast] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const getdataMovie = async () => {
    try {
      setRefresh(false);
      setLoading(false);
      setLoadMore(false);
      const resultMovie = await axios.get(
        `movie?page=1&limit=${form.limit}&searchName=${form.searchName}&sort=name ${form.sort}&searchRelease=${form.searchRelease}`,
      );
      setData(resultMovie.data.data);
      console.log(resultMovie.data);
      setTotalPage(resultMovie.data.pagination.totalPage);
      if (totalPage === 1) {
        setLast(true);
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    getdataMovie();
    console.log(data);
    console.log(form);
  }, [form]);
  useEffect(() => {
    getdataMovie();
    console.log(data);
  }, []);
  const handleChangeForm = text => {
    setForm({...form, searchName: text});
  };
  const handleChangeFormMonth = name => {
    setForm({...form, searchRelease: name});
  };
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'A~Z', value: 'ASC'},
    {label: 'Z~A', value: 'DESC'},
  ]);
  const handleDetail = async id => {
    try {
      await dispatch(getDataMovieId(id));
      props.navigation.navigate('HomeNavigator', {
        screen: 'Detail',
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleRefresh = () => {
    console.log('REFRESH SCREEN');
    setLast(false);
    setForm({
      sort: '',
      searchRelease: '',
      searchName: '',
      page: 1,
      limit: 8,
    });
    getdataMovie();
  };
  const handleLoadMore = () => {
    console.log('LOAD MORE DATA');
    if (!loadMore) {
      setLoadMore(true);
      if (totalPage >= 2) {
        setLoading(true);
        setForm({...form, limit: form.limit + 4});
      } else {
        setLoading(false);
        setLast(true);
      }
    }
  };
  const ListHeader = () => {
    return (
      <View>
        <Text style={styles.textHeader}>List Movie</Text>
        <View style={styles.layoutMenu}>
          <View style={styles.sort}>
            <DropDownPicker
              style={styles.sortDrop}
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              placeholder="SORT"
              onPress={() =>
                setForm({...form, sort: value === null ? '' : value})
              }
            />
          </View>
          <TextInput
            placeholder={
              form.searchName === '' ? 'Seacrh Movie Name' : form.searchName
            }
            style={styles.menuViewSearch}
            onSubmitEditing={event => handleChangeForm(event.nativeEvent.text)}
          />
        </View>
        <ScrollView style={styles.monthList} horizontal={true}>
          <TouchableOpacity
            style={
              form.searchRelease === '2022-01'
                ? styles.buttonMonthActive
                : styles.buttonMonth
            }
            onPress={() => handleChangeFormMonth('2022-01')}>
            <Text
              style={
                form.searchRelease === '2022-01'
                  ? styles.buttonTextMonthActive
                  : styles.buttonTextMonth
              }>
              January
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              form.searchRelease === '2022-02'
                ? styles.buttonMonthActive
                : styles.buttonMonth
            }
            onPress={() => handleChangeFormMonth('2022-02')}>
            <Text
              style={
                form.searchRelease === '2022-02'
                  ? styles.buttonTextMonthActive
                  : styles.buttonTextMonth
              }>
              February
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              form.searchRelease === '2022-03'
                ? styles.buttonMonthActive
                : styles.buttonMonth
            }
            onPress={() => handleChangeFormMonth('2022-03')}>
            <Text
              style={
                form.searchRelease === '2022-03'
                  ? styles.buttonTextMonthActive
                  : styles.buttonTextMonth
              }>
              March
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              form.searchRelease === '2022-04'
                ? styles.buttonMonthActive
                : styles.buttonMonth
            }
            onPress={() => handleChangeFormMonth('2022-04')}>
            <Text
              style={
                form.searchRelease === '2022-04'
                  ? styles.buttonTextMonthActive
                  : styles.buttonTextMonth
              }>
              April
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              form.searchRelease === '2022-05'
                ? styles.buttonMonthActive
                : styles.buttonMonth
            }
            onPress={() => handleChangeFormMonth('2022-05')}>
            <Text
              style={
                form.searchRelease === '2022-05'
                  ? styles.buttonTextMonthActive
                  : styles.buttonTextMonth
              }>
              June
            </Text>
          </TouchableOpacity>
        </ScrollView>
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
          <View style={styles.movieList} key={item.id}>
            <View style={styles.cardMovie}>
              <Image
                style={styles.movieImage}
                source={{
                  uri: `https://res.cloudinary.com/djanbjfvx/image/upload/v1650922804/${item.image}`,
                }}
              />
              <Text style={styles.textCard}>
                {item.name.length >= 10
                  ? item.name.substring(0, 10) + '...'
                  : item.name}
              </Text>
              <Text style={styles.textCard2}>{item.category}</Text>
              <TouchableOpacity
                style={styles.buttonCard}
                onPress={() => handleDetail(item.id)}>
                <Text>Detail</Text>
              </TouchableOpacity>
            </View>
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
export default Viewall;
