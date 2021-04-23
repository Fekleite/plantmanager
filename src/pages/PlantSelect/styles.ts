import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 0,
    backgroundColor: colors.background
  },
  header: {
    paddingHorizontal: 32
  },
  textAction: {
    fontSize: 17,
    fontFamily: fonts.text,
    lineHeight: 23,
    color: colors.body
  },
  textActionStrong: {
    fontSize: 17,
    fontFamily: fonts.textMedium,
    lineHeight: 23,
    color: colors.body
  },
  envList: {
    marginVertical: 24,
    paddingLeft: 32,
  },
  plants: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: 16,
  },
})