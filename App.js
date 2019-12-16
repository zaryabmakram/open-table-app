import React from 'react';
import QRScanner from './ScanScreen'
import PaymentScreen from './PaymentScreen'

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
    // <QRScanner />
    <PaymentScreen />
  );
};


export default App;
