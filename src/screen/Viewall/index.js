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

function Viewall() {
  return (
    <ScrollView>
      <Text style={styles.textHeader}>List Movie</Text>
      <View style={styles.layoutMenu}>
        <View>
          <TextInput placeholder="SORT" style={styles.menuViewSort} />
        </View>
        <TextInput
          placeholder="Seacrh Movie Name"
          style={styles.menuViewSearch}
        />
      </View>

      <Footer />
    </ScrollView>
  );
}
export default Viewall;
