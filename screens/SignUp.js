import React from 'react'
import {StyleSheet, View, TextInput, Text,SafeAreaView, TouchableOpacity, Alert} from 'react-native'
import BackgroundImage from "../components/BackgroundImage";
const db = require("../db.json");

export default class SignUp extends React.Component{
    state = { users: [] ,username: '', password: '', confirmPassword: '', errorMessage:'' }
    
    handleSignUp = () => {
        const { users, username, password } = this.state
        const { navigation } = this.props
        const user = users.find(user => user.name === this.state.username)
        if(this.state.username ==='' || this.state.password === '' || this.state.password ===''|| this.state.confirmPassword === ''){
            this.setState({errorMessage: 'Vui lòng nhập đầy đủ thông tin'})
        }
        else{
            if (user) {
                this.setState({errorMessage: 'Tài khoản đã tồn tại'})
            }
            else{
                if(this.state.password!==this.state.confirmPassword){
                    this.setState({errorMessage: 'Mật khẩu nhập lại bị sai'})
                }
                else{
                    Alert.alert('Đăng ký thành công');
                    navigation.goBack();
                }
            }
            
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
                    <View style={styles.titleBlock}>
                        <Text style={styles.title}>Đăng ký</Text>
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
                            <Text style={styles.textInputTitle}>Nhập lại Mật khẩu</Text>
                            <TextInput
                                secureTextEntry
                                style={styles.textInput} 
                                autoCapitalize="none"
                                placeholder="Nhập mật khẩu"
                                onChangeText={confirmPassword => this.setState({ confirmPassword })}
                                value={this.state.confirmPassword}
                            />
                    </View>
                    <View style={styles.report}>
                        <Text style={styles.reportTitle}>{this.state.errorMessage}</Text>
                    </View>
                    <View  style={styles.confirmBlock}>
                        <TouchableOpacity style={styles.confirmBlock} onPress={this.handleSignUp}>
                        <View style={styles.confirmButton} >
                            <Text style={styles.confirmText}>Đăng ký</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView> 
            </BackgroundImage>
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
        marginBottom: 100,
        marginTop: -100,
        //backgroundColor: '#3F292B',
        height: 60,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: '#FF5562',
        fontSize: 40,
        fontWeight: 'bold',
    },
    textInputTitle:{
        fontWeight: '600',
        fontSize: 17,
        marginBottom: 8,
        color: '#3F292B'
    },
    textInput: {
        height: 45,
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
        marginTop: 20
    },
    confirmButton: {
        backgroundColor: '#FF5562',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,

    },
    confirmText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#FFF',
        padding: 18,
        paddingHorizontal: 100
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