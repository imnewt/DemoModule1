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
                    <View style={styles.titleBlock}>
                        <Text style={styles.title}>Đăng nhập</Text>
                    </View>   
                    <View style={styles.signInBlock}>
                            <Text style={styles.textInputTitle}>Tài khoản</Text>
                            <TextInput
                                style={styles.textInput}
                                autoCapitalize="none"
                                placeholder="Nhập tài khoản"
                                onChangeText={username => this.setState({ username})}
                                value={this.state.username}
                            />
                            <Text style={styles.textInputTitle}>Mật khẩu</Text>
                            <TextInput
                                secureTextEntry
                                style={styles.textInput} 
                                autoCapitalize="none"
                                placeholder="Nhập mật khẩu"
                                onChangeText={password => this.setState({ password })}
                                value={this.state.password}
                            />
                    </View>
                    <View style={styles.report}>
                        <Text style={styles.reportTitle}>{this.state.errorMessage}</Text>
                    </View>
                    <View  style={styles.confirmBlock}>
                        <TouchableOpacity style={styles.confirmBlock} onPress={this.handleLogin}>
                        <View style={styles.confirmButton} >
                            <Text style={styles.confirmText}>Đăng nhập</Text>
                        </View>
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
        color: 'blue',
        fontSize: 35,
        fontFamily: 'Cochin',
        fontWeight: '700'
    },
    signInBlock:{
        flexDirection: 'column',
    },
    textInputTitle:{
        fontWeight: '600',
        fontSize: 15,
        marginBottom: 8
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderBottomWidth: 2,
        marginBottom: 10,
        paddingLeft: 6,
    },
    report:{
        alignItems: 'center',
        marginTop: 10
    },
    reportTitle:{
        color: 'red',
        fontWeight: '600'
    },
    confirmBlock: {
        alignItems: 'center',
    },
    confirmButton: {
        backgroundColor: 'red',
        height: 45,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginTop: 30
    },
    confirmText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#FFF',
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