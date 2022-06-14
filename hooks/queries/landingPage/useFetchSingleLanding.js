import React from 'react';
import {useQuery} from 'react-query';
import {getSingleLandingPage} from '../../../apis/LandingPage/LandingPage';
import {REACT_QUERY_CONSTANTS} from '../../../Constants/AppConstants';

export default function useFetchSingleLanding(landingId) {
  return useQuery([REACT_QUERY_CONSTANTS.SINGLE_LANDING_PAGE], () =>
    getSingleLandingPage(landingId),
  );
}
