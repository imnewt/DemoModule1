import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Image, Text, Button } from 'react-native';
import SignInScreen from "./screens/SignIn"
import SignUpScreen from "./screens/SignUp"
import HomeScreen from "./screens/Home";
import TaskListScreen from "./screens/TaskList";
import TaskDetailScreen from './screens/TaskDetail';

//const Stack = createStackNavigator();

class ProfileMenu extends React.Component{
  render() {
   return(
      <Image resizeMode='stretch' style={{width: `100%`, height: 100}} source={{uri: 'https://www.myamcat.com/blog/wp-content/uploads/2017/08/job-search-remotive-home.png'}} />
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

  const TabNaviga = createMaterialTopTabNavigator()
  
  function Haha() {
    return (
      <TabNaviga.Navigator screenOptions={{header: ({navigation}) => <ProfileMenu navigation= {navigation} />}} >
        <TabNaviga.Screen name="ProfileMenu3" component={ProfileMenu3}/>
        <TabNaviga.Screen name="ProfileMenu2" component={ProfileMenu2}/>
        
      </TabNaviga.Navigator>)
  }
  
  

  const YNavigator = createStackNavigator()
  
  function Hihi() {
    return (
  <NavigationContainer>
      <YNavigator.Navigator 
        
      >
        <YNavigator.Screen name="huhu" component={Haha} options={{header: () => <ProfileMenu />}}/>
      </YNavigator.Navigator>
    </NavigationContainer>)

  }


  // ({
  //   Home:{screen: TabNaviga,
  //     navigationOptions: ({navigation}) => ({
  //       header: <ProfileMenu navigation= {navigation} />,
  //     })
  //   }
  // })

function App() {
  return (
    <Hihi/>
  );
}

export default App;
