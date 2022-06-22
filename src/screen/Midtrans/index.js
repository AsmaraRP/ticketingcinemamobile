import React from 'react';
import {WebView} from 'react-native-webview';

export default function Midtrans(props) {
  const link = props.route.params;
  return (
    <WebView
      source={{
        uri: link,
      }}
      //   style={{marginTop: 20}}
    />
  );
}
