import React from 'react'
import { StyleSheet, View, TextInput, Text, SafeAreaView, TouchableOpacity, Alert} from 'react-native'
import BackgroundImage from "../components/BackgroundImage";

const db = require("../db.json");

export default class SignUp extends React.Component{
    state = { 
        users: [] ,
        username: '', 
        password: '', 
        confirmPassword: '',
        errorMessage:'' 
    }
    
    handleSignUp = () => {
        const { users, username, password } = this.state
        const { navigation } = this.props
        const user = users.find(user => user.name === this.state.username)
        if(this.state.username ==='' || this.state.password === '' || this.state.password ===''|| this.state.confirmPassword === ''){
            this.setState({errorMessage: 'Please type all information!'})
        }
        else{
            if (user) {
                this.setState({errorMessage: 'Username is exist!'})
            }
            else{
                if(this.state.password!==this.state.confirmPassword){
                    this.setState({errorMessage: 'Retype password is not correct!'})
                }
                else{
                    Alert.alert('SIGN UP SUCCESS!');
                    navigation.goBack();
                }
            }
        }
    }

    componentDidMount() {
        this.setState({ users: db.users })
    }
    
    render(){
        return(
            <BackgroundImage>
                <SafeAreaView style={styles.mainContainer}> 
                    <View style={styles.container}>
                        <Text style={styles.create}>Create new account</Text>
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
                        <TextInput
                            secureTextEntry
                            style={styles.textInput} 
                            placeholder="Confirm password"
                            autoCapitalize="none"
                            onChangeText={confirmPassword => this.setState({ confirmPassword })}
                            value={this.state.confirmPassword}
                        />
                        <View style={styles.report}>
                            <Text style={styles.reportTitle}>{this.state.errorMessage}</Text>
                        </View>
                        <TouchableOpacity style={styles.confirmBlock} onPress={this.handleSignUp}>
                            <Text style={styles.confirmText}>Create</Text>
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
    },
    container:{
        flex: 1,
        justifyContent:'center',
        marginHorizontal: 25
    },
    create: {
        fontSize: 32,
        marginBottom: 32,
        fontWeight: "700",
        fontStyle: "italic",
        color: "#5d4dbe"
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
    }

})