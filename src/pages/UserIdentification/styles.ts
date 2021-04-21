import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-around', 
    alignItems: 'center',
  },
  content: {
    flex: 1,
    width: '100%',
  },
  form: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    paddingHorizontal: 54
  },
  header: {
    alignItems: 'center',
  },
  emoji: {
    fontSize: 44,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.body,
    width: '100%',
    fontSize: 18,
    marginVertical: 40,
    padding: 10,
    textAlign: 'center'
  },
  inputFocused: {
    borderColor: colors.green
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 24
  },
  footer: {
    width: '100%',
    paddingHorizontal: 15,
  },
})