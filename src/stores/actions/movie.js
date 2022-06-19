import axios from '../../utils/axios';
export const getDataMovieId = id => {
  return {
    type: 'GET_DATA_MOVIE',
    payload: axios.get(`movie/${id}`),
  };
};
