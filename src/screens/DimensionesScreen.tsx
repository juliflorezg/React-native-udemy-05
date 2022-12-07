import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
export const DimensionesScreen = () => {
  const { width, height } = useWindowDimensions();
  console.log({ width, height });
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada}>
        <Text>morado</Text>
      </View>
      <View style={{...styles.cajaNaranja, width: width * 0.69}}>
        <Text>naranja</Text>
      </View>
      <Text style={styles.title}>
        w: {width}, h: {height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    height: 150,
    backgroundColor: 'turquoise',
    marginHorizontal: 20,
  },
  cajaMorada: {
    backgroundColor: '#5856d6',
    width: '50%',
    height: '50%',
  },
  cajaNaranja: {
    backgroundColor: '#f0a23b',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
});
