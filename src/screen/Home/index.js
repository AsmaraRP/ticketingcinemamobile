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
      <View style={styles.menu1}>
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
        <ScrollView style={styles.movieList} horizontal={true}>
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
        </ScrollView>
      </View>
      <View style={styles.menu2}>
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
        <ScrollView style={styles.movieList} horizontal={true}>
          <View style={styles.cardMovie2}>
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
          <View style={styles.cardMovie2}>
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
          <View style={styles.cardMovie2}>
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
        </ScrollView>
      </View>

      <Footer />
    </ScrollView>
  );
}
export default Home;
