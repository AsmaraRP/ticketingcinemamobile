import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

import Home from '../screen/Home';
import Viewall from '../screen/Viewall';
import Detail from '../screen/Detail';
import Ticket from '../screen/Ticket';
import Profile from '../screen/Profile';
import Payment from '../screen/Payment';
import History from '../screen/History';
import DrawerContent from '../components/DrawerContent';
import Header from '../components/Header';

function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Home}
        name="Home"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
function DetailNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Detail}
        name="Detail"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
function PaymentNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Payment}
        name="Payment"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
function HistoryNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={History}
        name="History"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
function ProfileNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Profile}
        name="Profile"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
function ViewallNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Viewall}
        name="Viewall"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
function TicketNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Ticket}
        name="Ticket"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'right',
      }}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        component={HomeNavigator}
        name="HomeNavigator"
        options={{
          title: 'Home',
          header: props => <Header {...props} />,
          drawerIcon: ({size, color}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        component={ViewallNavigator}
        name="ViewallNavigator"
        options={{
          title: 'Viewall',
          header: props => <Header {...props} />,
          drawerIcon: ({size, color}) => (
            <Icon name="user" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        component={DetailNavigator}
        name="DetailNavigator"
        options={{
          title: 'Detail',
          header: props => <Header {...props} />,
          drawerIcon: ({size, color}) => (
            <Icon name="user" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        component={ProfileNavigator}
        name="ProfileNavigator"
        options={{
          title: 'Profile',
          header: props => <Header {...props} />,
          drawerIcon: ({size, color}) => (
            <Icon name="user" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        component={PaymentNavigator}
        name="PaymentNavigator"
        options={{
          title: 'Payment',
          header: props => <Header {...props} />,
          drawerIcon: ({size, color}) => (
            <Icon name="user" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        component={HistoryNavigator}
        name="HistoryNavigator"
        options={{
          title: 'History',
          header: props => <Header {...props} />,
          drawerIcon: ({size, color}) => (
            <Icon name="user" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        component={TicketNavigator}
        name="TicketNavigator"
        options={{
          title: 'Ticket',
          header: props => <Header {...props} />,
          drawerIcon: ({size, color}) => (
            <Icon name="user" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
