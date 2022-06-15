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
import DropDownPicker from 'react-native-dropdown-picker';

function Viewall(props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'A~Z', value: 'ASC'},
    {label: 'Z~A', value: 'DESC'},
  ]);
  const handleDetail = () => {
    props.navigation.navigate('HomeNavigator', {
      screen: 'Detail',
    });
  };
  return (
    <ScrollView>
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
          />
        </View>
        <TextInput
          placeholder="Seacrh Movie Name"
          style={styles.menuViewSearch}
        />
      </View>
      <ScrollView style={styles.monthList} horizontal={true}>
        <TouchableOpacity style={styles.buttonMonth}>
          <Text style={styles.buttonTextMonth}>January</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonMonthActive}>
          <Text style={styles.buttonTextMonthActive}>February</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonMonth}>
          <Text style={styles.buttonTextMonth}>March</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonMonth}>
          <Text style={styles.buttonTextMonth}>April</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonMonth}>
          <Text style={styles.buttonTextMonth}>June</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.movieList} horizontal={true}>
        <View style={styles.cardMovie}>
          <Image
            style={styles.movieImage}
            source={require('../../assets/movie1.png')}
          />
          <Text style={styles.textCard}>Spider-Man : Home Coming</Text>
          <Text style={styles.textCard2}>Action, Sci-Fi</Text>
          <TouchableOpacity style={styles.buttonCard} onPress={handleDetail}>
            <Text>Detail</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardMovie}>
          <Image
            style={styles.movieImage}
            source={require('../../assets/movie1.png')}
          />
          <Text style={styles.textCard}>Spider-Man : Home Coming</Text>
          <Text style={styles.textCard2}>Action, Sci-Fi</Text>
          <TouchableOpacity style={styles.buttonCard} onPress={handleDetail}>
            <Text>Detail</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.movieList} horizontal={true}>
        <View style={styles.cardMovie}>
          <Image
            style={styles.movieImage}
            source={require('../../assets/movie1.png')}
          />
          <Text style={styles.textCard}>Spider-Man : Home Coming</Text>
          <Text style={styles.textCard2}>Action, Sci-Fi</Text>
          <TouchableOpacity style={styles.buttonCard}>
            <Text>Detail</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardMovie}>
          <Image
            style={styles.movieImage}
            source={require('../../assets/movie1.png')}
          />
          <Text style={styles.textCard}>Spider-Man : Home Coming</Text>
          <Text style={styles.textCard2}>Action, Sci-Fi</Text>
          <TouchableOpacity style={styles.buttonCard}>
            <Text>Detail</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}
export default Viewall;
