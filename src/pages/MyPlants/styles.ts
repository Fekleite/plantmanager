import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 0,
    paddingHorizontal: 32,
    backgroundColor: colors.background
  },
  plants: {
    width: '100%',
    marginTop: 40
  },
  plantsTitle: {
    fontSize: 24,
    fontFamily: fonts.heading,
    lineHeight: 32,
    color: colors.heading
  },
  notFoundContainer: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  notFoundText: {
    fontSize: 18,
    fontFamily: fonts.text,
    textAlign: 'center',
    color: colors.body
  }
})