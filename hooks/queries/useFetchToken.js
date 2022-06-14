import {useQuery} from 'react-query';

import {readFromLocalStorage} from '../../utils/localStorage';

export default function useFetchToken() {
  return useQuery(['token'], () => getToken());
}

const getToken = async () => {
  const token = await readFromLocalStorage('token');
  return token;
};
