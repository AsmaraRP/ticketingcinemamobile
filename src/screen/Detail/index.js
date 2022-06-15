import React, {useState} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import Footer from '../../components/Footer';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-date-picker';
import styles from './styles';

function Detail(props) {
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
  return (
    <ScrollView>
      <View style={styles.menu1}>
        <View style={styles.cardMain}>
          <View style={styles.cardMovie}>
            <Image
              style={styles.movieImage}
              source={require('../../assets/movie1.png')}
            />
          </View>
        </View>
        <View style={styles.form}>
          <Text style={styles.textHeader}>JUDUL</Text>
          <Text style={styles.textType2}>ACTION dll</Text>
          <View style={styles.layoutMenu}>
            <View>
              <Text style={styles.textType2}>Release date</Text>
              <Text style={styles.textType1}>Juni 29, 2000</Text>
            </View>
            <View>
              <Text style={styles.textType2}>Directed by</Text>
              <Text style={styles.textType1}>Jon Wates</Text>
            </View>
          </View>
          <View style={styles.layoutMenu}>
            <View>
              <Text style={styles.textType2}>Duration</Text>
              <Text style={styles.textType1}>2 hr 13 min</Text>
            </View>
            <View>
              <Text style={styles.textType2}>Cast</Text>
              <Text style={styles.textType1}>Tom Holand</Text>
            </View>
          </View>
        </View>
        <View style={styles.synopsis}>
          <Text style={styles.textType1}>Synopsis</Text>
          <Text style={styles.textType2}>
            Thrilled by his experience with the Avengers, Peter returns home,
            where he lives with his Aunt May, under the watchful eye of his new
            mentor Tony Stark, Peter tries to fall back into his normal daily
            routine - distracted by thoughts of proving himself to be more than
            just your friendly neighborhood Spider-Man - but when the Vulture
            emerges as a new villain, everything that Peter holds most important
            will be threatened.
          </Text>
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
            onConfirm={date => {
              setOpen(false);
              setDate(date);
              const dd = String(date.getDate()).padStart(2, '0');
              const mm = String(date.getMonth() + 1).padStart(2, '0');
              const yyyy = date.getFullYear();
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
          <TouchableOpacity style={styles.buttonCard}>
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
          <TouchableOpacity style={styles.buttonCard}>
            <Text style={styles.buttonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}
export default Detail;
