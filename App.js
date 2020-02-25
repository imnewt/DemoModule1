import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from "./screens/SignIn"
import SignUpScreen from "./screens/SignUp"
import HomeScreen from "./screens/Home";
import TaskListScreen from "./screens/TaskList";
import TaskDetailScreen from './screens/TaskDetail';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="SignIn"
        screenOptions={{
          title: null,
          headerTransparent: true,
          headerTitleAlign: "center",
          headerTintColor: "#1B2D2A",
          headerTitleStyle: {
            fontWeight: "bold"
          }
        }}
      >
        <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="SignUp" component={SignUpScreen}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="TaskList" component={TaskListScreen}/>
        <Stack.Screen name="TaskDetail" component={TaskDetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
