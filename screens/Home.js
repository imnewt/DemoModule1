import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BackgroundImage from '../components/BackgroundImage';
import TaskButton from "../components/TaskButton"

import Avatar from "../images/avatar.png"
import Bell from "../images/bell.png"
import Undone from "../images/undone.png"
import Doing from "../images/doing.png"
import Done from "../images/done.png"
import Add from "../images/add.png"
import Delete from "../images/delete.png"
import LogOut from "../images/logout.png"
import Lock from "../images/lock.png"

export default class Home extends Component {

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
        filteredList = tasks.filter(item => item.handle === user.name && item.status === status);
        navigation.navigate("TaskList", {tasks: filteredList, user: user});
    }
 
    render() {
        const { navigation } = this.props;
        const { user, tasks } = this.props.route.params;
        return (
            <BackgroundImage>
                {
                    user.isAdmin 
                    ?   <View style={styles.container}>
                            <View style={styles.topInfo}>
                                <View style={styles.userInfo}>
                                    <Image resizeMode="stretch" source={Avatar} style={styles.userImg}/>
                                    <View style={{marginLeft: 15}}>
                                        <Text style={styles.greeting}>Welcome {user.name}!</Text>
                                        <Text style={{fontSize: 16, fontStyle: "italic"}}>38% of tasks has been done...</Text>
                                    </View>
                                </View>
                                <Image resizeMode="stretch" style={styles.bell} source={Bell}/>
                            </View>
                            <View style={{marginTop: 30}}>
                                <Text style={{fontSize: 18, fontWeight: "700", marginLeft: 10, textTransform: "uppercase"}}>Your tasks</Text>
                                <View style={styles.tasks}>
                                    <TaskButton func={this.handlePressToList} tasks={tasks} status="undone" icon={Undone} user={user}/>
                                    <TaskButton func={this.handlePressToList} tasks={tasks} status="doing" icon={Doing} user={user}/>
                                    <TaskButton func={this.handlePressToList} tasks={tasks} status="done" icon={Done} user={user}/>
                                </View>
                            </View>
                            <View style={{marginTop: 20}}>
                                <Text style={{fontSize: 18, fontWeight: "700", marginLeft: 10, textTransform: "uppercase"}}>Employee manage</Text>
                                <View style={styles.tasks}>
                                    <TaskButton func={this.handlePressToSignUp} tasks={tasks} status="new" icon={Add} user={user}/>
                                    <TaskButton func={() => {}} tasks={tasks} status="delete" icon={Delete} user={user}/>
                                </View>
                            </View>
                            <View style={{marginTop: 20}}>
                                <Text style={{fontSize: 18, fontWeight: "700", marginLeft: 10, textTransform: "uppercase"}}>Manage your account</Text>
                                <View style={styles.tasks}>
                                    <TaskButton func={this.handlePressToSignIn} tasks={tasks} status="log out" icon={LogOut} user={user}/>
                                    <TaskButton func={() => {}} tasks={tasks} status="password" icon={Lock} user={user}/>
                                </View>
                            </View>
                        </View> 
                    :   <View style={styles.container}>
                            <View style={styles.topInfo}>
                                <View style={styles.userInfo}>
                                    <Image resizeMode="stretch" source={Avatar} style={styles.userImg}/>
                                    <View style={{marginLeft: 15}}>
                                        <Text style={styles.greeting}>Welcome {user.name}!</Text>
                                        <Text style={{fontSize: 16, fontStyle: "italic"}}>You have 2 undone tasks...</Text>
                                    </View>
                                </View>
                                <Image resizeMode="stretch" style={styles.bell} source={Bell}/>
                            </View>
                            <View style={{marginTop: 30}}>
                                <Text style={{fontSize: 18, fontWeight: "700", marginLeft: 10, textTransform: "uppercase"}}>Your tasks</Text>
                                <View style={styles.tasks}>
                                    <TaskButton func={this.handlePressToTasks} tasks={tasks} status="doing" icon={Doing} user={user}/>
                                    <TaskButton func={this.handlePressToTasks} tasks={tasks} status="done" icon={Done} user={user}/>
                                </View>
                            </View>
                            <View style={{marginTop: 20}}>
                                <Text style={{fontSize: 18, fontWeight: "700", marginLeft: 10, textTransform: "uppercase"}}>Manage your account</Text>
                                <View style={styles.tasks}>
                                    <TaskButton func={this.handlePressToSignIn} tasks={tasks} status="Log out" icon={LogOut} user={user}/>
                                    <TaskButton func={() => {}} tasks={tasks} status="password" icon={Lock} user={user}/>
                                </View>
                            </View>
                        </View>
                }
            </BackgroundImage>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
    },
    topInfo: {
        flexDirection: "row",
        alignItems: "center",
        // justifyContent: "center"
        //marginVertical: 40,
    },
    userInfo: {
        flex: 4,
        flexDirection: "row",
        alignItems: "center",
    },
    userImg: {
        height: 60,
        width: 60,
        borderRadius: 100
    },
    greeting: {
        fontSize: 24,
        fontWeight: "700"
    },
    bell: {
        height: 30,
        width: 30,
    },
    tasks: {
        flexDirection: "row",
        //justifyContent: "space-between",
        //marginTop: 5
    },
    // img: {
    //     height: 32, 
    //     width: 32
    // },
    // addUser: {
    //     position: 'absolute',
    //     top: 30,
    //     right: 10
    // },
    // logOut: {
    //     position: 'absolute',
    //     top: 30,
    //     left: 10
    // }
})