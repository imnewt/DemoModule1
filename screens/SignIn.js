import React from 'react'
import { StyleSheet, View, TextInput, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import AsyncStorage from "@react-native-community/async-storage"
import BackgroundImage from "../components/BackgroundImage"

import Logo from "../images/logo.png"

const db = require("../db.json");

export default class SignIn extends React.Component{
    state = { 
        users: [],
        username: '', 
        password: '', 
        errorMessage: '' 
    }

    handleLogin = async () => {
        const { users } = this.state
        const { navigation } = this.props
        const user = users.find(user => user.name === this.state.username && user.pass === this.state.password)
        if (user) {
            await AsyncStorage.setItem("user", JSON.stringify(user))
            await navigation.navigate("StackNavigator");
        } 
        else{
            if(this.state.username){
                if(this.state.password){
                    const user = users.find(user => user.name !== this.state.username)
                    if(user){
                        this.setState({errorMessage: 'Wrong username!'})
                    }
                    else{
                        this.setState({errorMessage: 'Wrong password!'})
                    }
                }
                else
                this.setState({errorMessage: 'Please type ypur password'})
            }
            else
            this.setState({errorMessage: 'Please type your username'})
        }
    }

    componentDidMount() {
        this.setState({users: db.users})
    }

    render(){
        return(
            <BackgroundImage>
                <SafeAreaView style={styles.mainContainer}> 
                    <View style={styles.container}>      
                    <Image source={Logo} style={{height: 200, width: 200, alignSelf: "center", marginBottom: 40}} />
                        <TextInput
                            style={styles.textInput}
                            autoCapitalize="none"
                            placeholder="Username"
                            onChangeText={username => this.setState({ username})}
                            value={this.state.username}
                        />
                        <TextInput
                            secureTextEntry
                            style={styles.textInput} 
                            placeholder="Password"
                            autoCapitalize="none"
                            onChangeText={password => this.setState({ password })}
                            value={this.state.password}
                        />
                        <View style={styles.report}>
                            { this.state.errorMessage ? <Text style={styles.reportTitle}>{this.state.errorMessage}</Text> : null}
                        </View>
                        <TouchableOpacity style={styles.confirmBlock} onPress={this.handleLogin}>
                            <Text style={styles.confirmText}>Log in</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView> 
            </BackgroundImage>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        margin: 20,
        borderRadius: 20
    },
    container:{
        flex: 1,
        justifyContent:'center',
        marginHorizontal: 25
    },
    title: {
        alignSelf: 'center',
        marginBottom: 60,
        fontSize: 32,
        fontWeight: '700'
    },
    textInput: {
        marginTop: 20,
        height: 60,
        fontSize: 18,
        backgroundColor: "#FFF",
        borderRadius: 20,
        paddingLeft: 20,
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        elevation: 1
    },
    report:{
        height: 60,
        alignItems: "center",
        justifyContent: "center",
    },
    reportTitle:{
        color: 'red',
        fontSize: 16,
        fontWeight: '600'
    },
    confirmBlock: {
        alignItems: 'center',
        backgroundColor: '#FBB13C',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    confirmText: {
        fontWeight: 'bold',
        fontSize: 20,
        padding: 16,
        color: '#FFF',
        textTransform: "uppercase"
    }
})