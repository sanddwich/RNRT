import { StyleSheet } from 'react-native'
import store from '../../Redux'

const H2Styles = StyleSheet.create({
  main: {
    color: store.getState().app.config.theme.textColor1,
    fontFamily: 'Raleway-Medium',
    fontSize: 20,
  },
  bold: {
    fontFamily: 'Raleway-Bold',
  }
})

export default H2Styles
