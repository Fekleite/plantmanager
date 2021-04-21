import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    width: 76,
    height: 40,
    borderRadius: 12,
    backgroundColor: colors.shape,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
  },
  containerActive: {
    backgroundColor: colors.green_light
  },
  text: {
    fontSize: 13,
    color: colors.heading,
    fontFamily: fonts.complement,
  },
  textActive: {
    fontFamily: fonts.heading,
    color: colors.green_dark,
  },
})