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
    // <>
    //   <StatusBar barStyle="dark-content" />
    //   <SafeAreaView>
    //   </SafeAreaView>
    // </>
      <QRScanner />
  );
};


export default App;
