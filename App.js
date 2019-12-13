import React from 'react';
import QRScanner from './ScanScreen'

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <QRScanner />
      </SafeAreaView>
    </>
  );
};


export default App;
