import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  textHeader: {
    fontSize: 20,
    marginTop: 15,
    marginLeft: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  textType1: {
    fontSize: 20,
    marginTop: 15,
    marginLeft: 15,
    color: 'black',
    borderBottomWidth: 1,
    borderBottomColor: '#5F2EEA',
  },
  textType2: {
    fontSize: 20,
    marginTop: 15,
    marginLeft: 15,
    color: 'grey',
  },
  textType3: {
    textAlign: 'left',
    fontSize: 14,
    marginTop: 15,
    marginLeft: 15,
    color: 'grey',
  },
  layoutMenuProfile: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  cardProfile: {
    marginLeft: 20,
    marginTop: 30,
    paddingTop: 20,
    marginBottom: 50,
    height: 350,
    borderRadius: 10,
    backgroundColor: 'white',
    width: '90%',
    alignItems: 'center',
  },
  photo: {
    marginTop: 20,
    marginButtom: 20,
    width: 100,
    height: 100,
    borderRadius: 30,
  },
  logout: {
    width: '50%',
    backgroundColor: '#5F2EEA',
    marginLeft: 20,
    marginTop: 20,
    height: 50,
    paddingTop: 10,
    alignItems: 'center',
    marginBottom: 50,
    borderRadius: 15,
  },

  cardPersonal: {
    marginLeft: 20,
    marginTop: 30,
    marginBottom: 50,
    height: 400,
    borderRadius: 10,
    backgroundColor: 'white',
    width: '90%',
    alignItems: 'center',
  },
  input: {
    marginTop: 10,
    paddingLeft: 30,
    width: '90%',
    borderWidth: 1,
    height: 40,
    borderRadius: 8,
  },
  button: {
    width: '90%',
    backgroundColor: '#5F2EEA',
    marginLeft: 20,
    height: 50,
    paddingTop: 10,
    alignItems: 'center',
    marginBottom: 50,
    borderRadius: 15,
  },
  textButton: {
    color: 'white',
  },
});
