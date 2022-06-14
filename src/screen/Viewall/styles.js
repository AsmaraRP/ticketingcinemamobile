import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  textHeader: {
    fontSize: 20,
    marginTop: 15,
    marginLeft: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  layoutMenu: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 500,
  },
  menuViewSort: {
    backgroundColor: 'white',
    width: 80,
    textAlign: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey',
  },
  menuViewSearch: {
    backgroundColor: 'white',
    width: 200,
    textAlign: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey',
  },
});
