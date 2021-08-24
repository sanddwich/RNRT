import { StyleSheet } from 'react-native'
import store from '../../../Redux'


const MainHeaderStyles = StyleSheet.create({
  main: {
    height: 80,
    paddingTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: store.getState().app.config.theme.bgColor1,
    width: '100%',
  }
})

export default MainHeaderStyles
