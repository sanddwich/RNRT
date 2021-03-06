import { StyleSheet } from 'react-native'
import store from '../../Redux'

const H1Styles = StyleSheet.create({
  main: {
    color: store.getState().app.config.theme.textColor1,
    fontFamily: 'Raleway-Medium',
    fontSize: 24,
  },
  bold: {
    fontFamily: 'Raleway-Bold',
  }
})

export default H1Styles
