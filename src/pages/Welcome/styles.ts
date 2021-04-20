import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around', 
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 10
  },
  subtitle:{
    textAlign: 'center',
    fontSize: 18,
    color: colors.heading,
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
  buttonText: {
    color: colors.white,
    fontSize: 24
  }
})