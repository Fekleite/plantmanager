import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  scrollContainer: {
    flexGrow: 1,
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
    top: 25,
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
  },
  tipRelative: {
    position: 'relative',
    bottom: 45
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
  datePickertextMedium: {
    fontFamily: fonts.text,
    fontSize: 13,
    lineHeight: 25,
    color: colors.body
  }
})