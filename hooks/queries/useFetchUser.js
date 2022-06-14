import {useQuery} from 'react-query';
import {getUser} from '../../apis/LandingPage/LandingPage';
import {readFromLocalStorage} from '../../utils/localStorage';

export default function useFetchUser() {
  return useQuery(['user'], () => getUser());
}
