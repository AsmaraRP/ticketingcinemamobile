import PushNotification from 'react-native-push-notification';

class Notification {
  constructor() {
    PushNotification.createChannel(
      {
        channelId: 'reminder-product', // (required)
        channelName: 'Remind Product', // (required)
        channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
      },
      created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
    );
  }

  reminderProductNotification() {
    PushNotification.localNotification({
      /* iOS and Android properties */
      //   id: 0, // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
      channelId: 'reminder-product',
      title: 'ORDER COMPLETE', // (optional)
      message: 'Please continue to Pay your Ticket', // (required)
    });
  }
}

export default new Notification();