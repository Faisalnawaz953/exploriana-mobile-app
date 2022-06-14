import Toast from 'react-native-toast-message';
export default function showToast(
  type = 'success',
  title = 'Success',
  subText = '',
  position = 'bottom',
  visibilityTime = 2000,
) {
  Toast.show({
    type: type,
    text1: title,
    text2: subText,
    position: position,
    visibilityTime: visibilityTime,
  });
}
