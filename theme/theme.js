// ########## Colors from Figma ##########
const colors = {
  kshBrand: '#5ABEAE',
  kshBrandV1: '#91D4C9',
  kshBrandV2: '#B6E2DB',
  kshBrandV3: '#DAF1ED',

  kshDark: '#3A4A67',
  kshDarkV1: '#7C91B6',
  kshDarkV2: '#BEC8DA',

  kshLight: '#FFFFFF',
  kshLightV1: '#CCCCCC',
  kshLightV2: '#E6E6E6',

  kshLightBrand: '#D9E4DD',
  kshLightBrandV1: '#A6BFAF',
  kshLightBrandV2: '#C3D5CA',

  kshOffWhite: '#F9F9F9',
  kshRed: '#EE5C3C',
}

// ########## Light Theme ##########
export const lightTheme = {
  colors: {
    bodyBg: colors.kshLight, //white
    heading: colors.kshBrand, //green
    text: colors.kshDark, //dark-blue
    paleText: colors.kshDarkV1,
    offWhite: colors.kshOffWhite, //shade
    testimonial: colors.kshBrandV3,
    dividerOne: colors.kshBrandV2,
    dividerTwo: colors.kshDarkV2,
    warning: colors.kshRed,
    footer: '#F5F5F5',
  },
  greenBoxShadow: '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)',
  blurLevel: '',
}
