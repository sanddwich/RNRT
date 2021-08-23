import React from 'react'
import { Text } from 'react-native'
import H1Styles from './H1Styles'

interface H1Props {
  children: React.ReactNode
  color?: string
}

export default function H1(props: H1Props) {
  return (
    <Text style={props.color ? {color: props.color} : H1Styles.main}>
      {props.children}
    </Text>
  )
}
