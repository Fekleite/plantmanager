import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 40,
  },
  greeting: {
    fontSize: 32,
    fontFamily: fonts.textLight,
    lineHeight: 36,
    color: colors.heading
  },
  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    lineHeight: 36,
    color: colors.heading
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 50
  }
})