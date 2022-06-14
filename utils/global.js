export const trimString = (string, length = 60) => {
  if (string?.length) {
    return string?.length > length
      ? string.substring(0, length) + '...'
      : string;
  } else {
    return string;
  }
};
