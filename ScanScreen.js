import React, { useState } from 'react';

import {
  StyleSheet,
  Text,
  Linking,
  ToastAndroid,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from "react-native-camera";

export default function ScanScreen(props) {
  const meme_img = "https://www.meme-arsenal.com/memes/e6028047470511e6e1f06039c6b8985f.jpg"

  const onSuccess = (e) => {
    if (isNaN(e.data)) {
      ToastAndroid.show("Try Again!", ToastAndroid.SHORT);
      console.log("Error: " + e.data)
    } else {
      ToastAndroid.show("QR Code: " + e.data, ToastAndroid.SHORT);
      console.log("Success: " + e.data)
      Linking.openURL(meme_img).catch(err => console.error('An error occured', err));
    }
  }

  return (
    <QRCodeScanner
      onRead={onSuccess}
      reactivate={true}
      reactivateTimeout={1000}
      showMarker={true}
      markerStyle={{ borderColor: 'white', }}
      flashMode={RNCamera.Constants.FlashMode.off}
      topContent={
        <Text style={styles.centerText}>
          Scan the <Text style={styles.textBold}>QR code</Text> from your Table
          </Text>
      }
    />
  );
}


const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 30,
    textAlign: 'center',
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

