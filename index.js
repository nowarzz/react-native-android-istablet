import { PixelRatio, Dimensions } from 'react-native';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const isTablet = () => {
  const pixelDensity = PixelRatio.get();
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const adjustedWidth = width * pixelDensity;
  const adjustedHeight = height * pixelDensity;
  const swidth = Dimensions.get("screen").width;
  const sheight = Dimensions.get("screen").height;
  const sadjustedWidth = swidth * pixelDensity;
  const sadjustedHeight = sheight * pixelDensity;
  const ratioDivider = gcd(sadjustedWidth, sadjustedHeight);
  const wRatio = sadjustedWidth / ratioDivider;
  const hRatio = sadjustedHeight / ratioDivider;

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
