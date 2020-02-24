import React from 'react'
import {StyleSheet, View, ImageBackground, TextInput, Text,SafeAreaView, TouchableOpacity} from 'react-native'
const db = require("../db.json");
import bg from "../images/gradient-bg.png"

export default class SignIn extends React.Component{
    state = { users: [],username: '', password: '', errorMessage: '' }
    handleLogin = () => {
        const {users} = this.state
        const {navigation} = this.props
        const user = users.find(user => user.name === this.state.username && user.pass === this.state.password)
        if (user) {
            navigation.navigate("Home", {user: user, tasks: db.tasks})
        } 
        else{
            if(this.state.username){
                if(this.state.password){
                    const user = users.find(user => user.name !== this.state.username)
                    if(user){
                        this.setState({errorMessage: 'Sai tài khoản hoặc email'})
                    }
                    else{
                        this.setState({errorMessage: 'Sai mật khẩu'})
                    }
                }
                else
                this.setState({errorMessage: 'Vui lòng nhập mật khẩu'})
            }
            else
            this.setState({errorMessage: 'Vui lòng nhập tài khoản hoặc email'})
        }
    }

    componentDidMount() {
        this.setState({users: db.users})
    }
    render(){
        return(
            <ImageBackground source={bg} style={{width: '100%', height: '100%'}}>
            <SafeAreaView style={styles.mainContainer}> 
                <View style={styles.container}>      
                    <Text style={styles.title}>LOGIN</Text>
                    <View style={styles.signInBlock}>
                        <Text style={styles.textInputTitle}>USERNAME</Text>
                        <TextInput
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={username => this.setState({ username})}
                            value={this.state.username}
                        />
                        <Text style={styles.textInputTitle}>PASSWORD</Text>
                        <TextInput
                            secureTextEntry
                            style={styles.textInput} 
                            autoCapitalize="none"
                            onChangeText={password => this.setState({ password })}
                            value={this.state.password}
                        />
                    </View>
                    <View style={styles.report}>
                        <Text style={styles.reportTitle}>{this.state.errorMessage}</Text>
                    </View>
                    <View  style={styles.confirmBlock}>
                        <TouchableOpacity style={styles.confirmBlock} onPress={this.handleLogin}>
                            <Text style={styles.confirmText}>Log in</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView> 
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
    //    / backgroundColor: "#FFF",
        margin: 20,
        borderRadius: 20
    },
    container:{
        flex: 1,
        justifyContent:'center',
        marginHorizontal: 25
    },
    titleBlock:{
        alignItems: 'center',
        marginBottom: 20
    },
    title: {
        alignSelf: 'center',
        marginBottom: 20,
        color: 'blue',
        fontSize: 35,
        fontFamily: 'Cochin',
        fontWeight: '700'
    },
    signInBlock:{
        flexDirection: 'column',
    },
    textInputTitle:{
        fontWeight: '700',
        fontSize: 16,
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderBottomWidth: 2,
        marginBottom: 30
    },
    report:{
        alignItems: 'center',
        justifyContent: "center",
        //marginTop: 10,
        height: 32
    },
    reportTitle:{
        color: 'red',
        fontWeight: '600'
    },
    confirmBlock: {
        alignItems: 'center',
        backgroundColor: '#5d5dbe',
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
    },
    optionsBlock:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    optionsIcon: {
        borderStartWidth: 0.5,
        height: 40,
        width: 80
    }

})