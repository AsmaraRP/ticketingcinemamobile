import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Footer from '../../components/Footer';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from '../../utils/axios';
import {useDispatch, useSelector} from 'react-redux';
import {updateUser, updatePasswod} from '../../stores/actions/user';
import {getUserById} from '../../stores/actions/user';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

function Profile(props) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.data);
  const [isError, setIsError] = useState(false);
  const [image, setImage] = useState(null);
  const [isUpload, setIsUpload] = useState(false);
  const [filename, setFilename] = useState(null);
  const handleEdit = () => {
    setIsUpload(true);
  };
  const handleUploadCamera = async () => {
    try {
      const option = {
        mediaType: 'photo',
        quality: 1,
      };
      const data = await launchCamera(option);
      console.log(data);
      setImage(data);
      // setIsUpload(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleUploadFile = async () => {
    try {
      const option = {
        mediaType: 'photo',
        quality: 1,
      };
      const dataImg = await launchImageLibrary(option);
      console.log(dataImg.assets[0]);
      const id = await AsyncStorage.getItem('id');
      console.log(id);
      setImage(dataImg.assets[0]);
      const formData = new FormData();
      formData.append('image', {
        uri: dataImg.assets[0].uri,
        type: dataImg.assets[0].type,
        name: dataImg.assets[0].fileName,
      });
      const result = await axios.patch(`user/image/${id}`, formData);
      console.log(result);
      await dispatch(getUserById(id));
      alert('SUCCESS change photo');
      setIsUpload(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleCencel = () => {
    setIsUpload(false);
  };
  const [form, setForm] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    noTelp: user.noTelp,
  });
  const [formPassword, setFormPassword] = useState({
    newPassword: '',
    confirmPassword: '',
  });
  const handleChangeForm = (text, name) => {
    setForm({...form, [name]: text});
  };
  const handleChangeFormPassword = (text, name) => {
    setFormPassword({...formPassword, [name]: text});
  };
  const handleEditProfile = async () => {
    try {
      const id = await AsyncStorage.getItem('id');
      await dispatch(updateUser(id, form));
      await dispatch(getUserById(id));
      alert('SUCCESS change profile');
    } catch (error) {
      console.log(error);
    }
  };
  const handleEditPassword = async () => {
    try {
      if (formPassword.confirmPassword !== formPassword.newPassword) {
        setIsError(true);
      } else {
        const id = await AsyncStorage.getItem('id');
        await dispatch(updatePasswod(id, formPassword));
        alert('SUCCESS change password');
        setFormPassword({
          newPassword: '',
          confirmPassword: '',
        });
        setIsError(false);
      }
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
  };
  const handleHistory = () => {
    props.navigation.navigate('ProfileNavigator', {
      screen: 'History',
    });
  };
  return (
    <ScrollView>
      <View style={styles.layoutMenuProfile}>
        <TouchableOpacity>
          <Text style={styles.textType1}>Detail Account</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleHistory}>
          <Text style={styles.textType2}>Order History</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardProfile}>
        <Text style={styles.textProfile}>INFO</Text>
        {image === null ? (
          <Image
            style={styles.photo}
            source={{
              uri: `https://res.cloudinary.com/djanbjfvx/image/upload/v1650922804/${user.image}`,
            }}
          />
        ) : (
          <Image
            style={styles.photo}
            source={{
              uri: image.uri,
            }}
          />
        )}

        {!isUpload ? (
          <TouchableOpacity onPress={handleEdit} style={styles.buttonUpload}>
            <Text style={styles.textProfile}>Edit</Text>
          </TouchableOpacity>
        ) : (
          <>
            <TouchableOpacity
              onPress={handleUploadCamera}
              style={styles.buttonUpload2}>
              <Text style={styles.textUpload}>Choose from camera</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleUploadFile}
              style={styles.buttonUpload2}>
              <Text style={styles.textUpload}>Choose from gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleCencel}
              style={styles.buttonUpload3}>
              <Text style={styles.textProfile2}>cencel</Text>
            </TouchableOpacity>
          </>
        )}

        <Text style={styles.textHeader}>{user.firstName}</Text>
        <Text style={styles.textType2}>Moviegoers</Text>
        <TouchableOpacity style={styles.logout}>
          <Text style={styles.textButton}>Logut</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.textHeader}>Account Settings</Text>
      <View style={styles.cardPersonal}>
        <Text style={styles.textHeader}>Detail Information</Text>
        <Text style={styles.textType3}>First Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Write your first name"
          value={form.firstName}
          onChangeText={text => handleChangeForm(text, 'firstName')}
        />
        <Text style={styles.textType3}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholder="write your last name"
          value={form.lastName}
          onChangeText={text => handleChangeForm(text, 'lastName')}
        />
        <Text style={styles.textType3}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="write your phone number"
          value={form.noTelp}
          onChangeText={text => handleChangeForm(text, 'noTelp')}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
        <Text style={styles.textButton}>Update Changes</Text>
      </TouchableOpacity>
      <View style={styles.cardPersonal}>
        <Text style={styles.textHeader}>Account and Privacy</Text>
        <Text style={styles.textType3}>New Password</Text>
        <TextInput
          style={styles.input}
          placeholder="new password"
          secureTextEntry={true}
          value={formPassword.newPassword}
          onChangeText={text => handleChangeFormPassword(text, 'newPassword')}
        />
        <Text style={styles.textType3}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="confirm password"
          secureTextEntry={true}
          value={formPassword.confirmPassword}
          onChangeText={text =>
            handleChangeFormPassword(text, 'confirmPassword')
          }
        />
        {isError ? (
          <Text style={styles.warning}>confirm password is not match</Text>
        ) : null}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleEditPassword}>
        <Text style={styles.textButton}>Update Changes</Text>
      </TouchableOpacity>
      <Footer />
    </ScrollView>
  );
}
export default Profile;
