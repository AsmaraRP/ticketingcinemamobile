import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function Header(props) {
  const openDrawer = async () => {
    props.navigation.openDrawer();
  };
  const handleHome = () => {
    props.navigation.navigate('HomeNavigator', {
      screen: 'Home',
    });
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handleHome}>
        <Image source={require('../assets/logoTick.png')} style={styles.tick} />
      </TouchableOpacity>
      <TouchableOpacity onPress={openDrawer}>
        <Image style={styles.logo} source={require('../assets/nav.png')} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white',
  },
  tick: {
    marginTop: 15,
    width: 150,
    height: 30,
    resizeMode: 'stretch',
  },
  logo: {
    marginTop: 15,
  },
});
