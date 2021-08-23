import React from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { RootState } from '../../../Redux'
import { AppState } from '../../../Redux/interfaces/interfaces'
import H1 from '../../../StyledComponents/H1/H1'
import MainHeaderStyles from './MainHeaderStyles'

interface MainHeaderProps {
  app: AppState
}

const MainHeader = (props: MainHeaderProps) => {
  return (
    <View style={MainHeaderStyles.main}>
      <H1>{props.app.config.appName}</H1>
    </View>
  )
} 

const mapDispatchToProps = {}

const mapStateToProps = (state: RootState) => {
  const app = state.app
  return {
    app,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader)