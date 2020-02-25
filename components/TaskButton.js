import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, InteractionManager } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default class TaskButton extends Component {

    countAll = (tasks, status) => {
        return tasks.filter(item => item.status === status).length
    }

    count = (tasks, status, user) => {
        return tasks.filter(item => item.status === status && item.handle === user.name).length
    }

    render() {
        const { tasks, status, func, icon, user } = this.props;
        console.log(status);
        return (
            <TouchableOpacity style={styles.container} activeOpacity={.6} onPress={() => func(tasks, status, user)}>
                <Image style={{height: 48, width: 48}} source={icon} />
                <Text style={styles.status}>{status}</Text>
                { 
                    ["undone","doing","done"].includes(status) 
                    ?   user.isAdmin 
                        ?   <Text style={styles.num}>({this.countAll(tasks, status)})</Text>
                        : <Text style={styles.num}>({this.count(tasks, status, user)})</Text>
                    : null
                }
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF', 
        alignItems: 'center', 
        justifyContent: 'center', 
        paddingVertical: 20, 
        width: 110,
        borderRadius: 20, 
        marginVertical: 10,
        marginRight: 12
    },
    status: {
        marginVertical: 10,
        fontSize: 20,
        fontWeight: "700",
        color: "#6d6dbe",
        textTransform: "capitalize"
    },
    num: {
        fontSize: 16,
        color: '#999'
    }
})