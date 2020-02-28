import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import HeaderImage from "./components/HeaderImage"

import EmployeeTab from "./screens/EmployeeTab";
import TasksTab from "./screens/TasksTab";
import SettingsTab from "./screens/SettingsTab";
import SignUpScreen from "./screens/SignUp"
import HomeScreen from "./screens/Home";
import TaskListScreen from "./screens/TaskList";
import TaskDetailScreen from './screens/TaskDetail';
import Ionicons from "react-native-vector-icons/Ionicons";

const TasksStack = createStackNavigator()
function TasksStackScreen() {
  return (
    <TasksStack.Navigator initialRouteName="TasksTab" screenOptions={{headerShown: false}}>
      <TasksStack.Screen name="TasksTab" component={TasksTab}/>
    </TasksStack.Navigator>
  )
}


const EmployeeManageStack = createStackNavigator()
function EmployeeManageStackScreen() {
  return (
    <EmployeeManageStack.Navigator initialRouteName="EmployeeTab" screenOptions={{headerShown: false}}>
      <EmployeeManageStack.Screen name="EmployeeTab" component={EmployeeTab}/>
    </EmployeeManageStack.Navigator>
  )
}


const SettingsStack = createStackNavigator()
function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator initialRouteName="SettingsTab" screenOptions={{headerShown: false}}>
      <SettingsStack.Screen name="SettingsTab" component={SettingsTab}/>
    </SettingsStack.Navigator>
  )
}

const Tab = createMaterialTopTabNavigator()

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="TasksTab"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName, iconColor;
          let active = "#3A3042", inactive = "#F6EFEE"
          if (route.name === 'TasksTab') {
            iconName = 'ios-list-box';
            iconColor = focused ? active : inactive;
          } else if (route.name === 'EmployeeManageTab') {
            iconName = "ios-contacts";
            iconColor = focused ? active : inactive;
          } else if (route.name === 'SettingsTab') {
            iconName = 'ios-settings';;
            iconColor = focused ? active : inactive;
          }
          return <Ionicons name={iconName} size={28} color={iconColor} />;
        }
      })}
      tabBarOptions={{
        showIcon: true,
        showLabel: false,
        tabStyle: {
          backgroundColor: "#4CB963",
          height: 60
        },
      }}
    >
      <Tab.Screen name="EmployeeManageTab" component={EmployeeManageStackScreen}/>
      <Tab.Screen name="TasksTab" component={TasksStackScreen}/>
      <Tab.Screen name="SettingsTab" component={SettingsStackScreen}/>
    </Tab.Navigator>
    )
}

const Stack = createStackNavigator()
  
function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="TabNavigator">
      <Stack.Screen name="TabNavigator" component={TabNavigator} options={{header: () => <HeaderImage />}}/>
      {/* <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }}/> */}
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerTransparent: true, title: null, headerTintColor: '#365179' }}/>
      <Stack.Screen name="TaskList" component={TaskListScreen} options={{ headerTransparent: true, title: null }}/>
    </Stack.Navigator>
  )
}

export default StackNavigator;