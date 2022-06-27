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

function Reset(props) {
  const handleSend = () => {
    props.navigation.navigate('AuthScreen', {
      screen: 'Login',
    });
  };
  return (
    <ScrollView style={styles.main}>
      <Image
        style={styles.logo}
        source={require('../../assets/logoTick.png')}
      />
      <Text style={styles.header}>Set Password</Text>
      <Text style={styles.text}>Set your new password</Text>
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.inputform}
        // onChangeText={onChangeNumber}
        // value={number}
        secureTextEntry={true}
        placeholder="Write your password"
      />
      <Text style={styles.label}>Confirm Password</Text>
      <TextInput
        style={styles.inputform}
        // onChangeText={onChangeNumber}
        // value={number}
        secureTextEntry={true}
        placeholder="Write your confirm password"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={handleSend}>
          Send
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
export default Reset;
