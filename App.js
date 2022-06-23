import React from 'react';
import MainStackNavigator from './src/navigation';
import {Provider} from 'react-redux';
import stores from './src/stores';
const {persistor, store} = stores;
import PushNotification from 'react-native-push-notification';

// Must be outside of any component LifeCycle (such as `componentDidMount`).
PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onRegister: function (token) {
    console.log('TOKEN:', token);
  },

  // (required) Called when a remote is received or opened, or local notification is opened
  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);
    // PushNotification.localNotification({
    //   // foreground: true,
    //   channelId: 'new-product',
    //   title: notification.title,
    //   message: notification.message,
    // });
    // process the notification

    // (required) Called when a remote is received or opened, or local notification is opened
    // notification.finish(PushNotificationIOS.FetchResult.NoData);
  },

  // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
  onAction: function (notification) {
    console.log('ACTION:', notification.action);
    console.log('NOTIFICATION:', notification);

    // process the action
  },

  // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
  onRegistrationError: function (err) {
    console.error(err.message, err);
  },

  // Should the initial notification be popped automatically
  // default: true
  popInitialNotification: true,

  requestPermissions: false,
});

function App() {
  return (
    <Provider store={store}>
      <MainStackNavigator />
    </Provider>
  );
}
export default App;
