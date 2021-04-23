import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  tipContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.blue_light,
    borderRadius: 20,
    padding: 16,
  },
  tipImage: {
    width: 56,
    height: 56,
    marginRight: 24
  },
  tipText: {
    flex: 1,
    width: '100%',
    fontFamily: fonts.text,
    fontSize: 15,
    lineHeight: 23,
    color: colors.blue,
    
  }
})