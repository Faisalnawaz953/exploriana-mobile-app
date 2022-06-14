import React from 'react';
import {useQuery} from 'react-query';
import {
  getAllBrands,
  getLandingPage,
} from '../../../apis/LandingPage/LandingPage';
import {REACT_QUERY_CONSTANTS} from '../../../Constants/AppConstants';

export default function useFetchLandingPage() {
  return useQuery([REACT_QUERY_CONSTANTS.LANDING_PAGES], getCompanyData);
}

const getCompanyData = async () => {
  const landingPages = await getLandingPage();
  const brands = await getAllBrands();
  let data = [];
  brands.brands?.forEach(brand => {
    const companyData = landingPages?.landing?.filter(
      page => page?.userId === brand?.userId,
    );
    if (companyData?.length !== 0 && brand) {
      data.push({
        ...companyData[0],
        ...brand,
      });
    } else {
      if (brand) {
        data.push({...brand});
      }
    }
  });
  console.log(data);

  return data;
};
