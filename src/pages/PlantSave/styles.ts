import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  plantInfo: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 50,
    paddingBottom: 77,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.shape,
  },
  goBackButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 50,
    left: 16,
  },
  goBackButtonIcon: {
    fontSize: 24,
    color: colors.heading
  },
  title: {
    fontFamily: fonts.heading,
    fontSize: 24,
    lineHeight: 32,
    color: colors.heading,
    marginVertical: 16,
  },
  description: {
    fontFamily: fonts.text,
    fontSize: 17,
    lineHeight: 25,
    color: colors.body,
    textAlign: 'center'
  },
  controllers: {
    paddingHorizontal: 32,
    paddingBottom: 25,
  },
  tipContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.blue_light,
    borderRadius: 20,
    padding: 16,
    position: 'relative',
    bottom: 45
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
    
  },
  alert: {
    marginBottom: 40,
    alignItems: 'center'
  },
  alertLabel: {
    fontFamily: fonts.text,
    fontSize: 13,
    lineHeight: 23,
    color: colors.body
  },
  datePickerButton: {
    width: 260,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.shape,
    borderRadius: 10,
    marginTop: 16,
  },
  datePickerButtonText: {
    fontFamily: fonts.text,
    fontSize: 13,
    lineHeight: 25,
    color: colors.body
  }
})