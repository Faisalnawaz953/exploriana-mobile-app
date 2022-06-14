import {NETWORK_ERROR, TOAST_TYPES} from '../../contants/AppConstants';
import {
  API_METHODS,
  contentTypes,
  USER_ROUTES,
} from '../../contants/ServicesConstants';
import showToast from '../../helpers/Toast';
import {request} from '../index';

export const registerUser = async body => {
  try {
    const apiResponse = await request(USER_ROUTES.REGISTER, API_METHODS.POST, {
      ...body?.registerData,
    });
    const response = await apiResponse.json();
    return response;
  } catch (error) {
    showToast(TOAST_TYPES.ERROR, TOAST_TYPES.ERROR, NETWORK_ERROR);
  }
};

export const loginUser = async body => {
  try {
    const apiResponse = await request(USER_ROUTES.LOGIN, API_METHODS.POST, {
      ...body?.loginData,
    });
    const response = await apiResponse.json();
    return response;
  } catch (error) {
    showToast(TOAST_TYPES.ERROR, TOAST_TYPES.ERROR, NETWORK_ERROR);
  }
};

export const verifyUserExists = async body => {
  try {
    const apiResponse = await request(
      USER_ROUTES.VERIFY_USER,
      API_METHODS.POST,
      {
        ...body,
      },
    );
    const response = await apiResponse.json();
    return response;
  } catch (error) {
    showToast(TOAST_TYPES.ERROR, TOAST_TYPES.ERROR, NETWORK_ERROR);
  }
};

export const getUser = async () => {
  try {
    const apiResponse = await request(USER_ROUTES.GET_USER);
    const response = await apiResponse.json();

    return response?.payload?.data;
  } catch (error) {
    showToast(TOAST_TYPES.ERROR, TOAST_TYPES.ERROR, NETWORK_ERROR);
  }
};
export const uploadImage = async formdata => {
  try {
    const apiResponse = await request(
      USER_ROUTES.UPLOAD_IMAGE,
      API_METHODS.POST,
      formdata,
      contentTypes.formdata,
    );
    const response = await apiResponse.json();
    return response;
  } catch (error) {
    showToast(TOAST_TYPES.ERROR, TOAST_TYPES.ERROR, NETWORK_ERROR);
  }
};
