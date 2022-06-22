import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import styles from '../Login/styles';
import axios from '../../utils/axios';
import {useDispatch} from 'react-redux';

function Register(props) {
  const dispatch = useDispatch();
  const [isError, setIsError] = useState(false);
  const [msg, setMsg] = useState('');
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    noTelp: '',
    password: '',
  });
  const handleChangeForm = (text, name) => {
    setForm({...form, [name]: text});
  };
  const handleRegister = async () => {
    try {
      console.log(form);
      const result = await axios.post('auth/register', form);
      alert('Register is success, Please check your Email');
      props.navigation.navigate('AuthScreen', {
        screen: 'Login',
      });
    } catch (error) {
      setIsError(true);
      setMsg(error.response.data.msg);
      console.log(error);
    }
  };
  const handleLogin = () => {
    props.navigation.navigate('AuthScreen', {
      screen: 'Login',
    });
  };
  return (
    <ScrollView style={styles.main}>
      <Image
        style={styles.logo}
        source={require('../../assets/logoblue.png')}
      />
      <Text style={styles.header}>Sign Up</Text>
      <Text style={styles.text}>Fill your additional details</Text>
      <Text style={styles.label}>First Name</Text>
      <TextInput
        style={styles.inputform}
        placeholder="Write your first name"
        onChangeText={text => handleChangeForm(text, 'firstName')}
      />
      <Text style={styles.label}>Last Name</Text>
      <TextInput
        style={styles.inputform}
        placeholder="Write your last name"
        onChangeText={text => handleChangeForm(text, 'lastName')}
      />
      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        style={styles.inputform}
        placeholder="Write your phone number"
        onChangeText={text => handleChangeForm(text, 'noTelp')}
      />
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.inputform}
        placeholder="Write your email"
        onChangeText={text => handleChangeForm(text, 'email')}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.inputform}
        secureTextEntry={true}
        placeholder="Write your password"
        onChangeText={text => handleChangeForm(text, 'pasword')}
      />
      {isError ? <Text style={styles.error}>{msg}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
      <View style={styles.textSet}>
        <Text style={styles.textOption}>Already have account ?</Text>
        <TouchableOpacity style={styles.directText}>
          <Text style={styles.textButton} onPress={handleLogin}>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
export default Register;
