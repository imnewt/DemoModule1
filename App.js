import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from "react-native-vector-icons/Ionicons";
import { Dimensions } from "react-native"
import StackNavigator from './StackNavigator';
import SignInScreen from "./screens/SignIn"
import InvestScreen from './screens/Invest';
import ContactScreen from './screens/Contact';
import CustomDrawer from './CustomDrawer';
const  { width } = Dimensions.get('window');


const Drawer = createDrawerNavigator();

export default function App(props) {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName="StackNavigator"
        drawerStyle={{width: (width - 80)}}
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={({route}) => ({
          drawerIcon: ({color, size}) => {
            let iconName;
            switch(route.name) {
              case 'StackNavigator':
                iconName = 'ios-home';
                break;
              case 'Contact us':
                iconName = 'ios-call';
                break;
              default:
                iconName = 'ios-home';
                break;
            }
            return <Ionicons name={iconName} size={size} color={color}/>;
          }
        }
        )}
      >
        <Drawer.Screen name="StackNavigator" component={StackNavigator} options={{drawerLabel: 'Home'}}/>

        <Drawer.Screen name="Investment Management" component={InvestScreen}/>
        <Drawer.Screen name="Contact us" component={ContactScreen}/>
        <Drawer.Screen name="Settings" component={ContactScreen}/>
        {/* <Drawer.Screen name="SignIn" component={SignInScreen}  options={{ headerShown: false, gestureEnabled: false, drawerLabel: () => null, drawerIcon: () => null }}/> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}