import React, { useState } from 'react'

import { StyleSheet, Text, View } from 'react-native'
import AppLoading from 'expo-app-loading'
import GetFonts from './functions/GetFonts'

export default function App() {
  const [appLoading, setAppLoading] = useState<boolean>(true)
  const [loadError, setLoadError] = useState<boolean>(false)

  if (appLoading) {
    return (
      <AppLoading startAsync={GetFonts} onError={(err) => console.log(err)} onFinish={() => setAppLoading(false)}>
        Loading...
      </AppLoading>
    )
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>ReactNative from Sanddwich1</Text>
        <Text style={styles.title2}>ReactNative from Sanddwich2</Text>
        <Text style={styles.title3}>ReactNative from Sanddwich3</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#000000',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    color: '#ffffff',
    fontFamily: 'Roboto-Black',
    fontSize: 30,
    paddingBottom: 15,
    textAlign: 'center',
  },
  title2: {
    fontFamily: 'Roboto-Thin',
    fontSize: 30,
    paddingBottom: 15,
    textAlign: 'center',
    color: '#ffffff',
  },
  title3: {
    fontFamily: 'Montserrat-Italic',
    fontSize: 30,
    paddingBottom: 15,
    textAlign: 'center',
    color: '#ffffff',
  },
})
