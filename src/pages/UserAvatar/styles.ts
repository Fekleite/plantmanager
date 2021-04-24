import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  content: {
    flex: 1,
    width: '100%',
    justifyContent: 'center', 
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 90,
  },
  button: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: colors.shape,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 24,
    fontFamily: fonts.heading,
    color: colors.heading,
    textAlign: 'center',
    marginTop: 24,
  },
  footer: {
    width: '100%',
    marginTop: 40,
  },
  editButton: {
    backgroundColor: colors.shape,
    borderRadius: 20,
    paddingHorizontal: 32,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 16,
    marginBottom: 20
  },
  editButtonText: {
    marginLeft: 16,
    fontFamily: fonts.textMedium,
    color: colors.gray,
    fontSize: 13,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20
  },
  emoji: {
    fontSize: 44,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 24
  },
})