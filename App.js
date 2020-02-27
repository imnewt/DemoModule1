import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from "react-native-vector-icons/Ionicons"
import {Text, Image, View} from "react-native"
import SignInScreen from "./screens/SignIn"
import SignUpScreen from "./screens/SignUp"
import HomeScreen from "./screens/Home";
import TaskListScreen from "./screens/TaskList";
import TaskDetailScreen from './screens/TaskDetail';


class ProfileMenu extends React.Component{
  render() {
   return(
      <View>
        <Image resizeMode='stretch' style={{width: `100%`, height: 100}} source={{uri: 'https://www.myamcat.com/blog/wp-content/uploads/2017/08/job-search-remotive-home.png'}} />
        <Ionicons name="ios-add" size={25}/>
      </View>
    )
   }
  }

class ProfileMenu2 extends React.Component{
  render() {
    return(
      <Text>ProfileMenu2</Text>
    )
    }
}
class ProfileMenu3 extends React.Component{
  render() {
    return(
      <Text>ProfileMenu3</Text>
    )
    }
}

const Tab = createMaterialTopTabNavigator()

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ProfileMenu3" component={ProfileMenu3}/>
      <Tab.Screen name="ProfileMenu2" component={ProfileMenu2}/>
    </Tab.Navigator>
    )
}

const Stack = createStackNavigator()
  
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabNavigator" component={TabNavigator} options={{header: () => <ProfileMenu />}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator 
//         initialRouteName="SignIn"
//         screenOptions={{
//           title: null,
//           headerTransparent: true,
//           headerTitleAlign: "center",
//           headerTintColor: "#1B2D2A",
//           headerTitleStyle: {
//             fontWeight: "bold"
//           }
//         }}
//       >
//         <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }}/>
//         <Stack.Screen name="SignUp" component={SignUpScreen}/>
//         <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
//         <Stack.Screen name="TaskList" component={TaskListScreen}/>
//         <Stack.Screen name="TaskDetail" component={TaskDetailScreen}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;
