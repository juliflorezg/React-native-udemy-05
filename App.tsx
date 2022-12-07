import React from 'react';
import { SafeAreaView } from 'react-native';
import { BoxObjectModel } from './src/screens/BoxObjectModelScreen';
import { DimensionesScreen } from './src/screens/DimensionesScreen';
// import { ContadorScreen } from './src/screens/ContadorScreen';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';

export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 40, backgroundColor: "#ddd"}}>
      {/* <HolaMundoScreen />
      <ContadorScreen /> */}
      <BoxObjectModel />
      <DimensionesScreen/>
    </SafeAreaView>
  );
};
