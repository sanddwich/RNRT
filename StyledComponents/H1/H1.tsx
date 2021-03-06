import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { ProgressViewIOSComponent, Text } from 'react-native'
import H1Styles from './H1Styles'

interface H1Props {
  children: React.ReactNode
  color?: string
  bold?: boolean
}

export default function H1(props: H1Props) {
  return (
    <Text
      style={
        props.bold
          ? { ...H1Styles.main, ...H1Styles.bold, color: props.color || H1Styles.main.color }
          : { ...H1Styles.main, color: props.color || H1Styles.main.color }
      }
    >
      {props.children}
    </Text>
  )
}
