import {NETWORK_ERROR, TOAST_TYPES} from '../../Constants/AppConstants';
import showToast from '../../helpers/Toast';
import {readFromLocalStorage} from '../../utils/localStorage';
import {request} from '../index';

export const getLandingPage = async () => {
  try {
    const apiResponse = await request('landings/');
    const response = await apiResponse?.json();

    return response;
  } catch (error) {
    console.log('errror123', error);
    showToast(TOAST_TYPES.ERROR, TOAST_TYPES.ERROR, NETWORK_ERROR);
  }
};

export const getSingleLandingPage = async landingId => {
  try {
    const apiResponse = await request(`landings/?landingId=${landingId}`);
    const response = await apiResponse?.json();

    return response;
  } catch (error) {
    showToast(TOAST_TYPES.ERROR, TOAST_TYPES.ERROR, NETWORK_ERROR);
  }
};
export const getAllBrands = async () => {
  try {
    const apiResponse = await request(`users/brand/all`);

    const response = await apiResponse?.json();

    return response;
  } catch (error) {
    showToast(TOAST_TYPES.ERROR, TOAST_TYPES.ERROR, NETWORK_ERROR);
  }
};
export const getAllTours = async () => {
  try {
    const apiResponse = await request(`live-classroom/all`);

    const response = await apiResponse?.json();

    return response;
  } catch (error) {
    showToast(TOAST_TYPES.ERROR, TOAST_TYPES.ERROR, NETWORK_ERROR);
  }
};

export const signUpApi = async data => {
  try {
    const apiResponse = await request(`app-user/register`, 'POST', {...data});
    console.log('api response', apiResponse);

    const response = await apiResponse?.json();

    return response;
  } catch (error) {
    showToast(TOAST_TYPES.ERROR, TOAST_TYPES.ERROR, NETWORK_ERROR);
  }
};
export const login = async data => {
  try {
    const apiResponse = await request(`app-user/login`, 'POST', {...data});
    console.log('api response', apiResponse);

    const response = await apiResponse?.json();

    return response;
  } catch (error) {
    showToast(TOAST_TYPES.ERROR, TOAST_TYPES.ERROR, NETWORK_ERROR);
  }
};
export const getUser = async () => {
  const uid = await readFromLocalStorage('userId');

  try {
    const apiResponse = await request(`app-user/${uid}`);
    console.log('api response', apiResponse);

    const response = await apiResponse?.json();

    return response;
  } catch (error) {
    showToast(TOAST_TYPES.ERROR, TOAST_TYPES.ERROR, NETWORK_ERROR);
  }
};

export const createBooking = async data => {
  try {
    const apiResponse = await request(`booking/create`, 'POST', data);

    const response = await apiResponse?.json();

    return response;
  } catch (error) {
    showToast(TOAST_TYPES.ERROR, TOAST_TYPES.ERROR, NETWORK_ERROR);
  }
};

export const getBookings = async () => {
  const uid = await readFromLocalStorage('userId');

  try {
    const apiResponse = await request(`booking/user/${uid}`);
    console.log('api response', apiResponse);

    const response = await apiResponse?.json();

    return response;
  } catch (error) {
    showToast(TOAST_TYPES.ERROR, TOAST_TYPES.ERROR, NETWORK_ERROR);
  }
};
