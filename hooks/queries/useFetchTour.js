import {useQuery} from 'react-query';

import {getAllTours} from '../../apis/LandingPage/LandingPage';

export default function useFetchTours() {
  return useQuery(['Tours'], getAllTours);
}
