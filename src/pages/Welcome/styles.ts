import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around', 
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  title: {
    fontFamily: fonts.heading,
    fontSize: 32,
    lineHeight: 38,
    textAlign: 'center',
    color: colors.heading,
    marginTop: 10
  },
  subtitle:{
    fontFamily: fonts.text,
    fontSize: 17,
    lineHeight: 25,
    textAlign: 'center',
    color: colors.body,
    paddingHorizontal: 20
  },
  image: {
    height: Dimensions.get('window').width * 0.7
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56,
  },
  buttonIcon: {
    color: colors.white,
    fontSize: 24
  }
})