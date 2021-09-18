import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppLoading from 'expo-app-loading'
import GetFonts from './functions/GetFonts'
import AppStyles from './AppStyles'
import MainScreen from './Screens/MainScreen/MainScreen'
import store from './Redux'
import { Provider } from 'react-redux'

export default function App() {
  const [appLoading, setAppLoading] = useState<boolean>(true)

  if (appLoading) {
    return (
      <AppLoading startAsync={GetFonts} onError={(err) => console.log(err)} onFinish={() => setAppLoading(false)} />
    )
  }

  return (
    <Provider store={store}>
      <View style={AppStyles.main}>
        <MainScreen />
      </View>
    </Provider>
  )
}
