import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import Footer from '../../components/Footer';
import styles from './styles';

function Home(props) {
  const handleViewall = () => {
    props.navigation.navigate('AppScreen', {
      screen: 'Viewall',
    });
  };
  return (
    <ScrollView style={styles.main}>
      <Text style={styles.textMotto1}>Nearest Cinema, Newest Movie</Text>
      <Text style={styles.textMotto2}>Find out now!</Text>
      <Image
        style={styles.logo}
        source={require('../../assets/banner_img.png')}
      />
      <View style={styles.layoutMenu}>
        <View>
          <Text style={styles.textMenu}>Now Showing</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.textMenu} onPress={handleViewall}>
            view all
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.layoutMenu2}>
        <View>
          <Text style={styles.textMenu}>Upcoming Movies</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.textMenu} onPress={handleViewall}>
            view all
          </Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </ScrollView>
  );
}
export default Home;
