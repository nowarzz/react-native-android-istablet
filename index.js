import { PixelRatio, Dimensions } from 'react-native'

const isTablet = () => {
  let pixelDensity = PixelRatio.get();
  let width = Dimensions.get("window").width;
  let height = Dimensions.get("window").height;
  const adjustedWidth = width * pixelDensity;
  const adjustedHeight = height * pixelDensity;
  if (pixelDensity < 2 && (adjustedWidth >= 1000 || adjustedHeight >= 1000)) {
    return true;
  } else
    return (
      pixelDensity === 2 && (adjustedWidth >= 1920 || adjustedHeight >= 1920)
    );
}

export default isTablet;