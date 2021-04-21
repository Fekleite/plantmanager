import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.shape,
    borderRadius: 20,
    paddingVertical: 16,
    marginBottom: 16,
    marginHorizontal: 8,
  },
  text: {
    fontSize: 13,
    fontFamily: fonts.heading,
    color: colors.heading,
    marginTop: 10,
  }
})