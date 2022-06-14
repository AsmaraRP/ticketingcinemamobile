import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

import Home from '../screen/Home';
import Viewall from '../screen/Viewall';
import Detail from '../screen/Detail';
import Profile from '../screen/Profile';
import Payment from '../screen/Payment';
import Managemovie from '../screen/Managemovie';
import Manageschedule from '../screen/Manageschedule';
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
function ManagemovieNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Managemovie}
        name="Managemovie"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
function ManagescheduleNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Manageschedule}
        name="Manageschedule"
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
        component={ManagemovieNavigator}
        name="ManagemovieNavigator"
        options={{
          title: 'Managemovie',
          header: props => <Header {...props} />,
          drawerIcon: ({size, color}) => (
            <Icon name="user" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        component={ManagescheduleNavigator}
        name="ManagescheduleNavigator"
        options={{
          title: 'Manageschedule',
          header: props => <Header {...props} />,
          drawerIcon: ({size, color}) => (
            <Icon name="user" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
