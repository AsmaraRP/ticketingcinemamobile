import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function SplashScreen(props) {
  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    const token = await AsyncStorage.getItem('token');

    setTimeout(() => {
      if (token) {
        props.navigation.navigate('AppScreen');
      } else {
        props.navigation.navigate('AuthScreen');
      }
    }, 1000);
  };

  return (
    <>
      <View style={styles.container} />
      <View style={styles.container2}>
        <Image
          style={styles.logo}
          source={require('../../assets/logoTick.png')}
        />
        <Text>Get your Ticket Easily</Text>
      </View>
      <View style={styles.container} />
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5F2EEA',
    flex: 1,
  },
  container2: {
    backgroundColor: 'white',
    flex: 3,
    alignItems: 'center',
    paddingTop: 100,
  },
  logo: {
    width: 300,
    height: 75,
    resizeMode: 'stretch',
  },
});
export default SplashScreen;
