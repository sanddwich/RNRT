import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { ProgressViewIOSComponent, Text } from 'react-native'
import H2Styles from './H2Styles'

interface H2Props {
  children: React.ReactNode
  color?: string
  bold?: boolean
}

export default function H2(props: H2Props) {
  return (
    <Text
      style={
        props.bold
          ? { ...H2Styles.main, ...H2Styles.bold, color: props.color || H2Styles.main.color }
          : { ...H2Styles.main, color: props.color || H2Styles.main.color }
      }
    >
      {props.children}
    </Text>
  )
}
