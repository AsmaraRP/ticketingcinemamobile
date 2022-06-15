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
    marginBottom: 30,
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
  sort: {
    width: '30%',
    backgroundColor: '#FFFFF',
  },
  sortDrop: {
    borderColor: 'grey',
  },
  monthList: {
    marginBottom: 50,
  },
  buttonMonth: {
    marginLeft: 20,
    width: 100,
    borderWidth: 1,
    height: 30,
    alignItems: 'center',
    borderColor: '#5F2EEA',
    borderRadius: 5,
  },
  buttonTextMonth: {
    color: '#5F2EEA',
  },
  buttonMonthActive: {
    marginLeft: 20,
    width: 100,
    borderWidth: 1,
    height: 30,
    alignItems: 'center',
    borderColor: '#5F2EEA',
    borderRadius: 5,
    backgroundColor: '#5F2EEA',
  },
  buttonTextMonthActive: {
    color: '#FFFF',
  },
  cardMovie: {
    padding: 10,
    backgroundColor: '#FFFF',
    height: 300,
    width: 150,
    marginRight: 10,
    marginBottom: 50,
    borderWidth: 1,
    borderColor: '#D6D8E7',
    borderRadius: 6,
    alignItems: 'center',
  },
  movieList: {
    overflow: 'scroll',
    flexDirection: 'row',
    paddingLeft: 20,
  },
  movieImage: {
    width: '100%',
    height: '70%',
  },
  textCard: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  textCard2: {
    fontSize: 11,
  },
  buttonCard: {
    marginTop: 10,
    borderWidth: 1,
    width: '80%',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#5F2EEA',
  },
});
