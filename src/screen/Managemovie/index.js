import React from 'react';
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

function Managemovie(props) {
  return (
    <ScrollView>
      <Text style={styles.textHeader}>Form Movie</Text>
      <View style={styles.cardEdit}>
        <Image
          style={styles.movie}
          source={require('../../assets/banner_img.png')}
        />
        <Text style={styles.textType1}>Movie Name</Text>
        <TextInput style={styles.input} placeholder="Spider-Man" />
        <Text style={styles.textType1}>Category</Text>
        <TextInput style={styles.input} placeholder="Action" />
        <Text style={styles.textType1}>Director</Text>
        <TextInput style={styles.input} placeholder="Jon Wates" />
        <Text style={styles.textType1}>Cast</Text>
        <TextInput style={styles.input} placeholder="Tom Holland" />
        <Text style={styles.textType1}>Release Date</Text>
        <TextInput style={styles.input} placeholder="07/08/08" />
        <View style={styles.layoutMenu}>
          <View>
            <Text style={styles.textType1}>Duration Hour</Text>
            <TextInput style={styles.input} placeholder="3 hour" />
          </View>
          <View>
            <Text style={styles.textType1}>Duration Minutes</Text>
            <TextInput style={styles.input} placeholder="30 minutes" />
          </View>
        </View>
        <Text style={styles.textType1}>Synopsis</Text>
        <TextInput
          style={styles.synopsis}
          placeholder="Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, |  "
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Submit</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.textHeader}>Data Movie</Text>
      <Footer />
    </ScrollView>
  );
}
export default Managemovie;
