import axios from 'axios';

export const fetchPlanets = async () => {
  try {
    const { data } = await axios.get('https://swapi.dev/api/planets/');
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
