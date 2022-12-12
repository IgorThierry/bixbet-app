import React from 'react'
import { StyleSheet, View } from 'react-native'
import { registerRootComponent } from 'expo'
import { StatusBar } from 'expo-status-bar'
import { Hello } from '@Components/Hello'

function App() {
  return (
    <View style={styles.container}>
      <Hello />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default registerRootComponent(App);
