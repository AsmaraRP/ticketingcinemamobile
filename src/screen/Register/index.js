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

function Register(props) {
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
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="Write your first name"
      />
      <Text style={styles.label}>Last Name</Text>
      <TextInput
        style={styles.inputform}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="Write your last name"
      />
      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        style={styles.inputform}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="Write your phone number"
      />
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.inputform}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="Write your email"
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.inputform}
        secureTextEntry={true}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="Write your password"
      />
      <TouchableOpacity style={styles.button}>
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
