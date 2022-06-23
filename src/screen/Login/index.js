import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import axios from '../../utils/axios';
import {useDispatch} from 'react-redux';
import {getUserById} from '../../stores/actions/user';
import {getDataBooking} from '../../stores/actions/ticket';

function Login(props) {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [isError, setIsError] = useState(false);
  const [msg, setMsg] = useState('');
  const handleChangeForm = (text, name) => {
    setForm({...form, [name]: text});
  };
  const handleLogin = async () => {
    try {
      console.log(form);
      const result = await axios.post('auth/login', form);
      await AsyncStorage.setItem('id', result.data.data.id);
      await AsyncStorage.setItem('token', result.data.data.token);
      await AsyncStorage.setItem('email', form.email);
      await AsyncStorage.setItem('refreshToken', result.data.data.refreshToken);
      const user = await dispatch(getUserById(result.data.data.id));
      await dispatch(getDataBooking(result.data.data.id));
      const myJSON = JSON.stringify(user);
      await AsyncStorage.setItem('user', myJSON);
      props.navigation.navigate('AppScreen', {
        screen: 'Home',
      });
    } catch (error) {
      setIsError(true);
      setMsg(error.response.data.msg);
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
    <View style={styles.main}>
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
      {isError ? <Text style={styles.error}>{msg}</Text> : null}
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
