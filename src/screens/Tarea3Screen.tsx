import React from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
export const Tarea3Screen = () => {
  const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <View style={{ ...styles.cajaMorada, marginLeft: width - 100 }} />
      <View style={{ ...styles.cajaNaranja, marginRight: width - 100 }} />
      <View style={styles.cajaAzul} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#28425b',
    justifyContent: 'center',
    alignContent: 'center',
  },
  cajaMorada: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856d6',
    // marginLeft: '70%',
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#f0a23b',
  },
  cajaAzul: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#28c4d9',
  },
});
