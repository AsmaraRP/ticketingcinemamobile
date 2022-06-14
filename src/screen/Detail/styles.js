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
  },
  textType2: {
    fontSize: 20,
    marginTop: 15,
    marginLeft: 15,
    color: 'grey',
  },
  cardMain: {
    marginLeft: 100,
    marginTop: 50,
  },
  movie: {
    marginTop: 20,
    width: '60%',
    height: 200,
    resizeMode: 'stretch',
    marginBottom: 100,
    borderRadius: 10,
    borderWidth: 1,
  },
  form: {
    alignItems: 'center',
  },
  layoutMenu: {
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 10,
  },
  synopsis: {
    paddingLeft: 10,
    marginBottom: 60,
  },
  inputset: {
    marginTop: 30,
    alignItems: 'center',
    marginBottom: 50,
  },
  input: {
    backgroundColor: 'white',
    width: '40%',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 30,
    marginBottom: 10,
  },
});
