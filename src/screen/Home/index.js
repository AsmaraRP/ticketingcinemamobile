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
import axios from '../..//utils/axios';
import {useEffect, useState} from 'react';
import styles from './styles';

function Home(props) {
  const handleViewall = () => {
    props.navigation.navigate('HomeNavigator', {
      screen: 'Viewall',
    });
  };
  useEffect(() => {
    getdataMovie();
    getdataMovie2();
    console.log(data);
    console.log(data2);
  }, []);

  const limit = 5;
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const getdataMovie = async () => {
    try {
      const resultMovie = await axios.get(`movie?page=1&limit=${limit}`);
      setData(resultMovie.data.data);
    } catch (error) {
      console.log(error.response);
    }
  };
  const getdataMovie2 = async () => {
    try {
      const resultMovie = await axios.get(`movie?page=2&limit=${limit}`);
      setData2(resultMovie.data.data);
    } catch (error) {
      console.log(error.response);
    }
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
          <TouchableOpacity onPress={handleViewall}>
            <Text style={styles.textMenu}>view all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.movieList} horizontal={true}>
          {data.map(item => (
            <View style={styles.cardMovie} key={item.id}>
              <Image
                style={styles.movieImage}
                source={{
                  uri: `https://res.cloudinary.com/djanbjfvx/image/upload/v1650922804/${item.image}`,
                }}
              />
              <Text style={styles.textCard}>
                {item.name.length >= 10
                  ? item.name.substring(0, 10) + '...'
                  : item.name}
              </Text>
              <Text style={styles.textCard2}>{item.category}</Text>
              <TouchableOpacity style={styles.buttonCard}>
                <Text>Detail</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.menu2}>
        <View style={styles.layoutMenu2}>
          <View>
            <Text style={styles.textMenu}>Upcoming Movies</Text>
          </View>
          <TouchableOpacity onPress={handleViewall}>
            <Text style={styles.textMenu}>view all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.monthList} horizontal={true}>
          <TouchableOpacity style={styles.buttonMonth} onPress={handleViewall}>
            <Text style={styles.buttonTextMonth}>January</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonMonthActive}
            onPress={handleViewall}>
            <Text style={styles.buttonTextMonthActive}>February</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonMonth} onPress={handleViewall}>
            <Text style={styles.buttonTextMonth}>March</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonMonth} onPress={handleViewall}>
            <Text style={styles.buttonTextMonth}>April</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonMonth} onPress={handleViewall}>
            <Text style={styles.buttonTextMonth}>Mei</Text>
          </TouchableOpacity>
        </ScrollView>
        <ScrollView style={styles.movieList} horizontal={true}>
          {data2.map(item => (
            <View style={styles.cardMovie2} key={item.id}>
              <Image
                style={styles.movieImage}
                source={{
                  uri: `https://res.cloudinary.com/djanbjfvx/image/upload/v1650922804/${item.image}`,
                }}
              />
              <Text style={styles.textCard}>
                {item.name.length >= 10
                  ? item.name.substring(0, 10) + '...'
                  : item.name}
              </Text>
              <Text style={styles.textCard2}>{item.category}</Text>
              <TouchableOpacity style={styles.buttonCard}>
                <Text>Detail</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.comment}>
        <Text style={styles.commentTitle1}>Be the vanguard of the</Text>
        <Text style={styles.commentTitle2}>Moviegoers</Text>
        <TextInput style={styles.commentform} placeholder="Type your email" />
        <TouchableOpacity style={styles.commentbutton}>
          <Text style={styles.commentbuttontext}>Join now</Text>
        </TouchableOpacity>
        <Text style={styles.commentTitle3}>
          By joining you as a Tickitz member, we will always send you the latest
          updates via email .
        </Text>
      </View>
      <Footer />
    </ScrollView>
  );
}
export default Home;
