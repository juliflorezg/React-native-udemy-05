import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const BoxObjectModel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'salmon',
    // marginTop: 40,
    marginHorizontal: 40,
  },
  title: {
    padding: 20,
    // paddingHorizontal: 70,
    // width: 175,
    fontSize: 25,
    borderWidth: 9,
    borderRightWidth: 6,
    borderBottomWidth: 3,
    borderLeftWidth: 1,
  },
});
