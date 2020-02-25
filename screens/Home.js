import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackgroundImage from '../components/BackgroundImage';
import TaskButton from "../components/TaskButton"
export default class Home extends Component {

    state = {
        categories: [
            {
                id: 1,
                icon: 'https://image.flaticon.com/icons/png/128/1187/1187533.png',
                status: 'undeliveried',
                tag: "Undeliveried"
            },
            {
                id: 2,
                icon: 'https://image.flaticon.com/icons/png/512/1440/1440961.png',
                status: 'doing',
                tag: "Doing"
            },
            {
                id: 3,
                icon: 'https://cdn0.iconfinder.com/data/icons/simplie-essential-action/22/action_039-checkmark-check-done-verify-512.png',
                status: 'done',
                tag: "Done"
            }
        ],
        staff: {
            icon: 'https://image.flaticon.com/icons/png/128/951/951971.png',
            status: 'doing',
            tag: "Doing"
        }
    }

    handlePressToSignUp = () => {
        const { navigation } = this.props;
        navigation.navigate("SignUp");
    }

    handlePressToSignIn = () => {
        const { navigation } = this.props;
        navigation.navigate("SignIn");
    }

    handlePressToList = (tasks, status, user) => {
        const { navigation } = this.props;
        var filteredList = [];
        if (status === "undone") {
            filteredList = tasks.filter(item => item.status === "undone")
        }
        else if (status === "doing") {
            filteredList = tasks.filter(item => item.status === "doing")
        }
        else {
            filteredList = tasks.filter(item => item.status === "done")
        }
        navigation.navigate("TaskList", {tasks: filteredList, user: user});
    }

    handlePressToTasks = (tasks,status,user) => {
        const { navigation } = this.props;
        var filteredList = [];
        filteredList = tasks.filter(item => item.for === user.name);
        navigation.navigate("TaskList", {tasks: filteredList, user: user});
    }
 
    render() {
        const { navigation } = this.props;
        const { user, tasks } = this.props.route.params;
        const { categories, staff } = this.state;
        return (
            <BackgroundImage>
                {
                    user.isAdmin ? 
                    <View style={{paddingTop: 12, position: 'relative'}}>
                        <Text style={styles.greeting}>Hello admin <Text style={{fontWeight: "700"}}>{user.name}</Text>!</Text>
                        <TouchableOpacity onPress={this.handlePressToSignUp} activeOpacity={.6} style={styles.addUser}>
                            <Image style={styles.img} source={{uri: 'https://image.flaticon.com/icons/png/128/2521/2521784.png'}} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.handlePressToSignIn} activeOpacity={.6} style={styles.logOut}>
                            <Image style={{height: 30, width: 30}} source={{uri: 'https://image.flaticon.com/icons/png/128/876/876779.png'}} />
                        </TouchableOpacity>
                        
                        <FlatList 
                            data={categories}
                            renderItem={({ item }) =>
                                <View style={{ marginBottom: 16 }}>
                                    <TaskButton func={this.handlePressToList} tasks={tasks} info={item} user={user}/>
                                </View>
                            }
                            keyExtractor={(item) => `${item.id}`}
                            contentContainerStyle={{paddingHorizontal: 32, paddingTop: 8}}
                        />
                    </View> :
                    <View style={{paddingHorizontal: 16, position: 'relative', paddingTop: 12, justifyContent:'center'}}>
                        <Text style={styles.greeting}>Hello {user.name}!</Text>
                        <TouchableOpacity onPress={this.handlePressToSignIn} activeOpacity={.6} style={styles.logOut}>
                            <Image style={{height: 30, width: 30}} source={{uri: 'https://image.flaticon.com/icons/png/128/876/876779.png'}} />
                        </TouchableOpacity>
                        <TaskButton info={staff} func={this.handlePressToTasks} navigation={navigation} user={user} tasks={tasks} />
                    </View>
                }
            </BackgroundImage>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: `90%`,
    },
    greeting: {
        fontSize: 20,
        paddingTop: 20,
        textAlign: 'center',
        marginBottom: 40,
    },
    img: {
        height: 32, 
        width: 32
    },
    addUser: {
        position: 'absolute',
        top: 30,
        right: 10
    },
    logOut: {
        position: 'absolute',
        top: 30,
        left: 10
    }
})