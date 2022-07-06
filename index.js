import { PixelRatio, Dimensions } from 'react-native';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const isTablet = () => {
  let pixelDensity = PixelRatio.get();
  let width = Dimensions.get("window").width;
  let height = Dimensions.get("window").height;
  const adjustedWidth = width * pixelDensity;
  const adjustedHeight = height * pixelDensity;
  const ratioDivider = gcd(width,height);
  const wRatio = width / ratioDivider;
  const hRatio = height / ratioDivider;
  if (wRatio === 9 && hRatio === 20) {
    return false;
  }
  if (pixelDensity < 2 && (adjustedWidth >= 1000 || adjustedHeight >= 1000)) {
    return true;
  } else
    return (
      pixelDensity === 2 && (adjustedWidth >= 1920 || adjustedHeight >= 1920)
    );
}

export default isTablet;
