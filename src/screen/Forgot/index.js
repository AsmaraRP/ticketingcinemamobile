import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import styles from '../Login/styles';

function Forgot(props) {
  const handleSend = () => {
    props.navigation.navigate('AuthScreen', {
      screen: 'Reset',
    });
  };
  return (
    <ScrollView style={styles.main}>
      <Image
        style={styles.logo}
        source={require('../../assets/logoblue.png')}
      />
      <Text style={styles.header}>Forgot Password</Text>
      <Text style={styles.text}>We'll send a link to your email shortly</Text>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.inputform}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="Write your email"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={handleSend}>
          Send
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
export default Forgot;
