import React from 'react';
import { View, StyleSheet } from 'react-native';
export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaLima} />
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: 300,
    // height: 300,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#28c4d9',
  },
  cajaMorada: {
    position: 'absolute',
    width: 100,
    height: 100,
    backgroundColor: '#5856d6',
    borderWidth: 10,
    borderColor: 'white',
    // top: 100,
    // left: 50,
    right: 0,
  },
  cajaNaranja: {
    position: 'absolute',
    width: 100,
    height: 100,
    backgroundColor: '#f0a23b',
    borderWidth: 10,
    borderColor: 'white',
    // top: 100,
    bottom: 0,
    right: 0,
  },
  cajaLima: {
    // width: 100,
    // height: 100,
    backgroundColor: 'lime',
    borderWidth: 10,
    borderColor: 'white',
    // position: 'absolute',
    // top: 0,
    // bottom: 0,
    // left: 0,
    // right: 0,
    ...StyleSheet.absoluteFillObject,
  },
});
