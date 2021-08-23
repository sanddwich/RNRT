import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { RootState } from '../../Redux'
import { AppState } from '../../Redux/interfaces/interfaces'
import MainHeader from './MainHeader/MainHeader'
import MainLayoutStyles from './MainLayoutStyles'
import {setAppLoading} from '../../Redux/actions/app'

interface MainLayoutProps {
  app: AppState,
  setAppLoading: (loading: boolean) => void
}

const MainLayout = (props: MainLayoutProps) => {
  return (
    <View style={MainLayoutStyles.main}>
      <MainHeader />
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

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout)