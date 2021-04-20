import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  safeContainer: {
    marginVertical: Platform.OS === 'android' ? 25 : 0
  }
})