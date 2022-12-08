import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'turquoise',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  caja1: {
    // flex: 6, //*60%
    // width: '100%',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 35,
  },
  caja2: {
    // flex: 3, //*30%
    // width: '100%',
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 35,
  },
  caja3: {
    // flex: 1, //*10%
    // width: '100%',
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 35,
  },
});
