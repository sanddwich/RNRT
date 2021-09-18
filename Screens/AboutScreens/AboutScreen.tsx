import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { RootState } from '../../Redux'
import { AppState } from '../../Redux/interfaces/interfaces'
import AboutScreenStyles from './AboutScreenStyles'
import {setAppLoading} from '../../Redux/actions/app'
import H2 from '../../StyledComponents/H2/H2'

interface AboutScreenProps {
  app: AppState,
  setAppLoading: (loading: boolean) => void
}

const AboutScreen = (props: AboutScreenProps) => {
  return (
    <View style={AboutScreenStyles.main}>
      <H2 bold color="#000000">AboutScreen</H2>
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutScreen)