import React, {useState, useEffect} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import Footer from '../../components/Footer';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-date-picker';
import styles from './styles';
import axios from '../..//utils/axios';
import {useSelector} from 'react-redux';

function Detail(props) {
  const movie = useSelector(state => state.movie.data);
  const data = movie[0];
  console.log(data);
  const [openCity, setOpenCity] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [date, setDate] = useState(new Date());
  const [title, setTitle] = useState('Set a date');
  const [items, setItems] = useState([
    {label: 'Banyuwangi', value: 'Banyuwangi'},
    {label: 'Jember', value: 'Jember'},
    {label: 'Jakarta', value: 'Jakarta'},
    {label: 'Bandung', value: 'Bandung'},
  ]);
  const handleBook = () => {
    props.navigation.navigate('HomeNavigator', {
      screen: 'Order',
    });
  };

  return (
    <ScrollView>
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
          />
        </View>
        <View style={styles.scheduleCard}>
          <Image
            style={styles.sponsor}
            source={require('../../assets/sponsor1.png')}
          />
          <Text style={styles.scheduleText}>
            Whatever street No.12, South Purwokerto
          </Text>
          <View style={styles.scheduleTime}>
            <Text style={styles.scheduleTimeContent}>08:30</Text>
            <Text style={styles.scheduleTimeContent}>08:30</Text>
            <Text style={styles.scheduleTimeContent}>08:30</Text>
            <Text style={styles.scheduleTimeContent}>08:30</Text>
          </View>
          <View style={styles.scheduleTime}>
            <Text style={styles.scheduleTimeContent}>08:30</Text>
            <Text style={styles.scheduleTimeContent}>08:30</Text>
            <Text style={styles.scheduleTimeContent}>08:30</Text>
            <Text style={styles.scheduleTimeContent}>08:30</Text>
          </View>
          <View style={styles.priceContent}>
            <View>
              <Text style={styles.priceText}>Price</Text>
            </View>
            <View>
              <Text style={styles.priceText2}>Rp. 50.000/seat</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.buttonCard} onPress={handleBook}>
            <Text style={styles.buttonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.scheduleCard}>
          <Image
            style={styles.sponsor}
            source={require('../../assets/sponsor1.png')}
          />
          <Text style={styles.scheduleText}>
            Whatever street No.12, South Purwokerto
          </Text>
          <View style={styles.scheduleTime}>
            <Text style={styles.scheduleTimeContent}>08:30</Text>
            <Text style={styles.scheduleTimeContent}>08:30</Text>
            <Text style={styles.scheduleTimeContent}>08:30</Text>
            <Text style={styles.scheduleTimeContent}>08:30</Text>
          </View>
          <View style={styles.scheduleTime}>
            <Text style={styles.scheduleTimeContent}>08:30</Text>
            <Text style={styles.scheduleTimeContent}>08:30</Text>
            <Text style={styles.scheduleTimeContent}>08:30</Text>
            <Text style={styles.scheduleTimeContent}>08:30</Text>
          </View>
          <View style={styles.priceContent}>
            <View>
              <Text style={styles.priceText}>Price</Text>
            </View>
            <View>
              <Text style={styles.priceText2}>Rp. 50.000/seat</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.buttonCard} onPress={handleBook}>
            <Text style={styles.buttonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}
export default Detail;
