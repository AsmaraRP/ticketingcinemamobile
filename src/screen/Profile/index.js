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

function Profile(props) {
  return (
    <ScrollView>
      <View style={styles.layoutMenuProfile}>
        <TouchableOpacity>
          <Text style={styles.textType1}>Detail Account</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.textType2}>Order History</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardProfile}>
        <Text>INFO</Text>
        <Image
          style={styles.photo}
          source={require('../../assets/movie1.png')}
        />
        <Text style={styles.textHeader}>NAMA</Text>
        <Text style={styles.textType2}>Moviegoers</Text>
        <TouchableOpacity style={styles.logout}>
          <Text style={styles.textButton}>Logut</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.textHeader}>Account Settings</Text>
      <View style={styles.cardPersonal}>
        <Text style={styles.textHeader}>Detail Information</Text>
        <Text style={styles.textType3}>Full Name</Text>
        <TextInput style={styles.input} placeholder="James Elre" />
        <Text style={styles.textType3}>Email</Text>
        <TextInput style={styles.input} placeholder="James@gmail.com" />
        <Text style={styles.textType3}>Phone Number</Text>
        <TextInput style={styles.input} placeholder="+628542580" />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Update Changes</Text>
      </TouchableOpacity>
      <View style={styles.cardPersonal}>
        <Text style={styles.textHeader}>Account and Privacy</Text>
        <Text style={styles.textType3}>New Password</Text>
        <TextInput
          style={styles.input}
          placeholder="new password"
          secureTextEntry={true}
        />
        <Text style={styles.textType3}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="confirm password"
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Update Changes</Text>
      </TouchableOpacity>
      <Footer />
    </ScrollView>
  );
}
export default Profile;
