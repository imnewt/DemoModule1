import React from 'react'
import { StyleSheet, View, TextInput, Text,SafeAreaView, TouchableOpacity} from 'react-native'
const db = require("../db.json");

export default class SignIn extends React.Component {

    state = { 
        users: [],
        username: '', 
        password: '', 
        errorMessage: null 
    }

    handleLogin = () => {
        const { users } = this.state
        const { navigation } = this.props
        const user = users.find(user => user.name === this.state.username && user.pass === this.state.password)
        if (user) {
            navigation.navigate("Home", {user: user, tasks: db.tasks})
        }
        console.log(navigation);
    }

    componentDidMount() {
        this.setState({users: db.users})
    }
    render(){
        return(
            <SafeAreaView style={styles.mainContainer}> 
                <Text style={styles.title}>Đăng nhập</Text>
                <View style={styles.container}>         
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
                    <TouchableOpacity style={styles.confirmBlock}>
                        <Text style={styles.forgotPass}>Quên mật khẩu?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.confirmBlock} onPress={this.handleLogin}>
                        <View style={styles.confirmButton}>
                            <Text style={styles.confirmText}>Đăng nhập</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView> 
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
    title: {
        color: 'blue',
        fontSize: 30,
    },
    signInBlock:{
        flexDirection: 'column',
    },
    textInputTitle:{
        fontWeight: '600',
        fontSize: 15,
        margin: 5
    },
    textInput: {
        height: 40,
        //width: 250,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10
    },
    forgotPass: {
        color: 'blue',
        fontWeight: '400',
        margin: 15
    },
    confirmBlock: {
        alignItems: 'center'
    },
    confirmButton: {
        backgroundColor: 'red',
        height: 40,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50
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