import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Ionicons from "react-native-vector-icons/Ionicons"
import {Text, Image, View, Dimensions, SafeAreaView, ImageBackground, TouchableOpacity} from "react-native"

import HeaderImage from "./components/HeaderImage"

import EmployeeTab from "./screens/EmployeeTab";
import TasksTab from "./screens/TasksTab";
import SettingsTab from "./screens/SettingsTab";

import SignInScreen from "./screens/SignIn"
import SignUpScreen from "./screens/SignUp"
import HomeScreen from "./screens/Home";
import TaskListScreen from "./screens/TaskList";
import TaskDetailScreen from './screens/TaskDetail';

const  { width } = Dimensions.get('window');
import man from './images/man.png';
import bg from './images/gradient-bg.png';


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
          let active = "#272932", inactive = "#EEF"
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
        indicatorStyle: {
          backgroundColor: "red",
          width: 2
        },
        tabStyle: {
          backgroundColor: "#6290C3",
          height: 60
        }
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
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerTransparent: true, title: null }}/>
      <Stack.Screen name="TaskList" component={TaskListScreen} options={{ headerTransparent: true, title: null }}/>
    </Stack.Navigator>
  )
}

const CustomDrawerComponent = (props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground source={bg} style={{flex: 1/3, width: undefined, padding: 16, paddingTop: 30, paddingBottom: 10}}>
        <View style={{ flex: 1, flexDirection: 'row',alignItems: 'center', width: (width - 90)}}>
          <View style={{ flex: 1, marginLeft: 5 }}>
            <Image source={man} style={{ height: 80, width: 80, borderRadius: 999, borderWidth: 4, borderColor: '#FFF' }}/>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <TouchableOpacity activeOpacity={.7} style={{marginLeft: 15, paddingVertical: 8, paddingHorizontal: 20, backgroundColor: '#FFF', borderRadius: 10}}>
              <Text>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{fontSize: 22, textTransform: 'capitalize', fontWeight:'700', letterSpacing: 1, marginVertical: 5}}>john smeth</Text>
        <Text style={{fontSize: 14}}>Lần đăng nhập cuối: 10:16:26 24/02/2020</Text>
      </ImageBackground>
      <DrawerContentScrollView style={{flex: 2/3}}>
        <DrawerItemList {...props} activeTintColor='#6d6dbe' activeBackgroundColor='#fff'/>
      </DrawerContentScrollView>
    </SafeAreaView>
  )
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
       initialRouteName="SignIn"
        drawerStyle={{width: (width - 80)}}
        drawerContent={props => <CustomDrawerComponent {...props} />}
        screenOptions={({route}) => ({
          drawerIcon: ({color, size}) => {
            let iconName;
            if(route.name === 'Home')
              iconName = "ios-home";
            else if(route.name === 'Contact us')
              iconName = 'ios-call';
            else
              iconName = 'ios-podium';
            return <Ionicons name={iconName} size={size} color={color}/>
          }
        }
        )}
      >
        <Drawer.Screen name="StackNavigator" component={StackNavigator}/>
        <Drawer.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false, gestureEnabled: false }}/>
        {/* <Drawer.Screen name="Investment Management" component={InvestScreen}/>
        <Drawer.Screen name="Contact us" component={ContactScreen}/> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}