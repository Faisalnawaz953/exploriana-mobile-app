import {useQuery} from 'react-query';

import {getBookings} from '../../apis/LandingPage/LandingPage';

export default function useFetchBookings() {
  return useQuery(['Bookings'], getBookings);
}
