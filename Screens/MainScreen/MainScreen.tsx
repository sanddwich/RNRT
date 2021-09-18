import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { RootState } from '../../Redux'
import { AppState } from '../../Redux/interfaces/interfaces'
import MainScreenStyles from './MainScreenStyles'
import {setAppLoading} from '../../Redux/actions/app'
import H1 from '../../StyledComponents/H1/H1'

interface MainScreenProps {
  app: AppState,
  setAppLoading: (loading: boolean) => void
}

const MainScreen = (props: MainScreenProps) => {
  return (
    <View style={MainScreenStyles.main}>
      <H1 bold color="#000000">MainScreen</H1>
    </View>
  )
}

const mapDispatchToProps = {
  setAppLoading,
}

const mapStateToProps = (state: RootState) => {
  const app = state.app
  return {
    app,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)