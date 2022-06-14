import {BASE_URL} from '../Constants/AppConstants';
import {readFromLocalStorage} from '../utils/localStorage';

function buildApiEndpoint(path) {
  const url = new URL(path, BASE_URL);
  return url.href;
}

export const request = async (
  path,
  method = 'GET',
  body = {},
  contentType = 'application/json',
) => {
  const token = await readFromLocalStorage('token');
  console.log(body);
  const fetchOption = {
    method,
    mode: 'cors',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': contentType,
      ...(token ? {Authorization: `Bearer ${token}`} : {}),
    }),
    ...(method !== 'GET'
      ? {
          body: JSON.stringify(body),
        }
      : {}),
  };

  try {
    const res = await fetch(buildApiEndpoint(path), fetchOption);

    return res;
  } catch (err) {
    throw new Error(err);
  }
};
