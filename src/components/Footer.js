import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function Footer(props) {
  return (
    <View style={styles.header}>
      <Image style={styles.logo} source={require('../assets/logoTick.png')} />
      <Text style={styles.textFooter}>
        Stop waiting in line. Buy tickets conveniently, watch movies quietly.
      </Text>
      <Text style={styles.textFooter2}>Explore</Text>
      <View style={styles.menuFooter}>
        <View>
          <Text>Home</Text>
        </View>
        <TouchableOpacity>
          <Text>List Movie</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.textFooter2}>Our Sponsor</Text>
      <View style={styles.sponsorFooter}>
        <Image
          style={styles.logoSponsor}
          source={require('../assets/sponsor1.png')}
        />
        <Image
          style={styles.logoSponsor}
          source={require('../assets/sponsor2.png')}
        />
        <Image
          style={styles.logoSponsor}
          source={require('../assets/sponsor3.png')}
        />
      </View>
      <Text style={styles.textFooter2}>Follow Us</Text>
      <View style={styles.sosmedFooter}>
        <Icon name="facebook" />
        <Icon name="instagram" />
        <Icon name="twitter" />
        <Icon name="linkedin" />
      </View>
      <Text style={styles.textFooter1}>
        © 2020 Tickitz. All Rights Reserved.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
  textFooter: {
    marginTop: 15,
    color: '#6E7191',
  },
  textFooter2: {
    marginTop: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  menuFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  sponsorFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  logo: {
    width: 150,
    height: 30,
    resizeMode: 'stretch',
  },
  logoSponsor: {
    marginTop: 20,
    width: '25%',
    height: 30,
    resizeMode: 'stretch',
    marginBottom: 10,
  },
  sosmedFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 50,
  },
});
