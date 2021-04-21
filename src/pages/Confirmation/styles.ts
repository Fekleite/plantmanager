import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  content: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32
  },
  emoji: {
    fontSize: 80,
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.heading,
    textAlign: 'center',
    color: colors.heading,
    lineHeight: 30,
    marginTop: 64,
  },
  subtitle: {
    fontSize: 17,
    fontFamily: fonts.text,
    lineHeight: 25,
    textAlign: 'center',
    color: colors.body,
    marginTop: 16,
  },
  footer: {
    width: '100%',
    marginTop: 40,
    paddingHorizontal: 30
  },
})