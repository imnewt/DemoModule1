import * as React from 'react';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Text, Image, View, Dimensions, SafeAreaView, ImageBackground, TouchableOpacity, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import man from './images/man.png';
import bg from './images/gradient-bg.jpg';
const  { width } = Dimensions.get('window');
export default class CustomDrawer extends React.Component {

    state = {
        user: {}
    }

    componentDidMount() {
        this._handleGetFromStorage();
    }

    _handleGetFromStorage = async () => {
        const data = await AsyncStorage.getItem("user");
        await this.setState({user: JSON.parse(data)})
    }

    render() {
        const { user } = this.state;
        return (
            <SafeAreaView style={{flex: 1}}>
              <ImageBackground resizeMode='stretch' source={bg} style={styles.imgbackground}>
                <View style={styles.container}>
                  <View style={{ flex: 1, marginLeft: 5 }}>
                    <Image source={man} style={styles.img}/>
                  </View>
                  <View style={{flex: 1, alignItems: 'center', marginRight: 20}}>
                    <TouchableOpacity activeOpacity={.7} style={styles.btn_LogOut}>
                      <Text>Log Out</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <Text style={styles.name}>John Smith</Text>
                <Text style={{fontSize: 14, color: '#365179', fontStyle: 'italic'}}>Last login: 10:16:26 24/02/2020</Text>
              </ImageBackground>
              <DrawerContentScrollView style={{flex: 2/3}}>
                <DrawerItemList  {...this.props} activeTintColor='#16DCA2' activeBackgroundColor='#fff' labelStyle={{fontSize: 18}}/>
              </DrawerContentScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    imgbackground: {
        flex: 1/3,
        padding: 16, 
        paddingTop: 30, 
        paddingBottom: 10
    },
    container: {
        flex: 1, 
        flexDirection: 'row',
        alignItems: 'center', 
        width: (width - 90)
    },
    img: {
        height: 80, 
        width: 80, 
        borderRadius: 999, 
        borderWidth: 4, 
        borderColor: '#FFF'
    },
    btn_LogOut: { 
        paddingVertical: 8, 
        paddingHorizontal: 20, 
        backgroundColor: '#FFF', 
        borderRadius: 10
    },
    name: {
        fontSize: 22, 
        textTransform: 'capitalize', 
        fontWeight:'700', 
        letterSpacing: 1, 
        marginVertical: 5,
        color: '#365179'
    }
})