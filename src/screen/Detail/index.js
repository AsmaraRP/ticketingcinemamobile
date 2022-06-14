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

function Detail(props) {
  return (
    <ScrollView>
      <View style={styles.cardMain}>
        <Image
          style={styles.movie}
          source={require('../../assets/banner_img.png')}
        />
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
      <Text style={styles.textHeader}>Showtimes and Ticket</Text>
      <View style={styles.inputset}>
        <TextInput placeholder="set a date" style={styles.input} />
        <TextInput placeholder="set a city" style={styles.input} />
      </View>
      <Footer />
    </ScrollView>
  );
}
export default Detail;
