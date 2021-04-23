import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.shape,
    borderRadius: 20,
    marginTop: 16
  },
  header:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    fontSize: 17,
    fontFamily: fonts.textMedium,
    lineHeight: 25,
    color: colors.body,
    marginLeft: 24
  },
  details: {
    alignItems: 'flex-end',
  },
  timeLabel: {
    fontSize: 13,
    fontFamily: fonts.text,
    lineHeight: 20,
    color: colors.body_light
  },
  time: {
    fontSize: 13,
    fontFamily: fonts.textMedium,
    lineHeight: 20,
    color: colors.body
  },
  buttonRemove: {
    width: 120,
    height: 80,
    marginTop: 16,
    backgroundColor: colors.red,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    right: 40,
    paddingLeft: 30
  }
})