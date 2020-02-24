import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import TaskButton from "../components/TaskButton"

export default class Home extends Component {

    handlePressToSignUp = () => {
        const { navigation } = this.props;
        navigation.navigate("SignUp");
    }

    handlePressToList = (tasks, status) => {
        const { navigation } = this.props;
        var filteredList = [];
        if (status === "chuagiao") {
            filteredList = tasks.filter(item => item.status === "chuagiao")
        }
        else if (status === "dagiao") {
            filteredList = tasks.filter(item => item.status === "dagiao")
        }
        else {
            filteredList = tasks.filter(item => item.status === "dahoanthanh")
        }
        navigation.navigate("TaskList", {tasks: filteredList});
    }

    handlePressToTasks = (tasks,status,user) => {
        const { navigation } = this.props;
        var filteredList = [];
        filteredList = tasks.filter(item => item.for === user.name);
        navigation.navigate("TaskList", {tasks: filteredList, user: user});
    }
 
    render() {
        const { navigation } = this.props;
        const { user, tasks } = this.props.route.params
        return (
            <SafeAreaView style={styles.container}>
                { user.isAdmin
                ?  <View style={styles.content}>
                        <Text style={styles.greeting}>Hello admin <Text style={{fontWeight: "700"}}>{user.name}</Text>!</Text>
                        <View style={styles.taskBlock}>
                            <TaskButton func={this.handlePressToSignUp} title="Thêm nhân viên"/>
                            <TaskButton func={this.handlePressToList} navigation={navigation} title="Chưa giao" status="chuagiao" tasks={tasks}/>
                            <TaskButton func={this.handlePressToList} navigation={navigation} title="Đã giao" status="dagiao" tasks={tasks}/>
                            <TaskButton func={this.handlePressToList} navigation={navigation} title="Đã hoàn thành" status="dahoanthanh" tasks={tasks}/> 
                        </View>
                    </View>
                            
                :   <View style={styles.content}>
                        <Text style={styles.greeting}>Hello {user.name}!</Text>
                        <TaskButton func={this.handlePressToTasks} navigation={navigation} title="Việc được giao" user={user} tasks={tasks}/>
                    </View>
                }
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        alignItems: "center"
    },
    greeting: {
        fontSize: 20,
        paddingTop: 20
    },
    taskBlock: {
        marginTop: 30
    }
})