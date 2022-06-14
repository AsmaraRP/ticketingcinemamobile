import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  textHeader: {
    fontSize: 20,
    marginTop: 15,
    marginLeft: 15,
    marginBottom: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  textType1: {
    fontSize: 14,
    marginTop: 15,
    marginLeft: 15,
    color: 'black',
  },
  textType2: {
    fontSize: 20,
    marginTop: 15,
    marginLeft: 15,
    color: 'grey',
  },
  cardEdit: {
    height: 1200,
    backgroundColor: 'white',
    width: '90%',
    marginLeft: 15,
    marginBottom: 30,
    paddingTop: 20,
    alignItems: 'center',
  },
  movie: {
    resizeMode: 'stretch',
    width: 150,
    height: 200,
    marginBottom: 30,
  },
  input: {
    width: '80%',
    backgroundColor: 'white',
    borderWidth: 1,
    marginTop: 10,
  },
  layoutMenu: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  synopsis: {
    width: '80%',
    height: 100,
    backgroundColor: 'white',
    borderWidth: 1,
    marginTop: 10,
  },
  button: {
    width: '80%',
    backgroundColor: '#5F2EEA',
    marginTop: 30,
    height: 50,
    paddingTop: 10,
    alignItems: 'center',
    borderRadius: 15,
  },
  textButton: {
    color: 'white',
  },
});
