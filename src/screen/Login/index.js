import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import axios from '../../utils/axios';

function Login(props) {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const handleChangeForm = (text, name) => {
    setForm({...form, [name]: text});
  };
  const handleLogin = async () => {
    try {
      console.log(form);
      const result = await axios.post('auth/login', form);
      await AsyncStorage.setItem('id', result.data.data.id);
      await AsyncStorage.setItem('token', result.data.data.token);
      await AsyncStorage.setItem('refreshToken', result.data.data.refreshToken);
      props.navigation.navigate('AppScreen', {
        screen: 'Home',
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleRegister = () => {
    props.navigation.navigate('AuthScreen', {
      screen: 'Register',
    });
  };
  const handleForgot = () => {
    props.navigation.navigate('AuthScreen', {
      screen: 'Forgot',
    });
  };
  return (
    <View>
      <Image
        style={styles.logo}
        source={require('../../assets/logoblue.png')}
      />
      <Text style={styles.header}>Sign In</Text>
      <Text style={styles.text}>
        Sign in with your data that you entered during your registration
      </Text>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.inputform}
        placeholder="Write your email"
        onChangeText={text => handleChangeForm(text, 'email')}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.inputform}
        placeholder="Write your password"
        secureTextEntry={true}
        onChangeText={text => handleChangeForm(text, 'password')}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <View style={styles.textSet}>
        <Text style={styles.textOption}>Forgot your password?</Text>
        <TouchableOpacity style={styles.directText} onPress={handleForgot}>
          <Text style={styles.textButton}>Reset now</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textSet}>
        <Text style={styles.textOption}>Don’t have an account?</Text>
        <TouchableOpacity style={styles.directText} onPress={handleRegister}>
          <Text style={styles.textButton}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Login;
