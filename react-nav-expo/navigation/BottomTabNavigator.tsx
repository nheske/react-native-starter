/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import FlexboxScreen from '../screens/FlexboxScreen';
import ScrollViewScreen from '../screens/ScrollViewScreen';
import FlatlistApiScreen from '../screens/FlatlistApiScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList, FlexboxParamList, ScrollViewParamList, FlatListApiParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Flexbox"
        component={FlexboxNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Scroll"
        component={ScrollViewNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="FlatListApi"
        component={FlatlistApiNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}

const FlexboxStack = createStackNavigator<FlexboxParamList>();

function FlexboxNavigator() {
  return (
    <FlexboxStack.Navigator>
      <FlexboxStack.Screen
        name="FlexboxScreen"
        component={FlexboxScreen}
        options={{ headerTitle: 'Flexbox Title' }}
      />
    </FlexboxStack.Navigator>
  );
}

const ScrollViewStack = createStackNavigator<ScrollViewParamList>();

function ScrollViewNavigator() {
  return (
    <ScrollViewStack.Navigator>
      <ScrollViewStack.Screen
        name="ScrollViewScreen"
        component={ScrollViewScreen}
        options={{ headerTitle: 'ScrollView Title' }}
      />
    </ScrollViewStack.Navigator>
  );
}

const FlatListApiStack = createStackNavigator<FlatListApiParamList>();

function FlatlistApiNavigator() {
  return (
    <FlatListApiStack.Navigator>
      <FlatListApiStack.Screen
        name="FlatlistApiScreen"
        component={FlatlistApiScreen}
        options={{ headerTitle: 'FlatList API Title' }}
      />
    </FlatListApiStack.Navigator>
  );
}
