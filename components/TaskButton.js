import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default class TaskButton extends Component {
    render() {
        //const { title, tasks, status, user, func } = this.props
        const { tasks, info, func, user } = this.props;
        return (
            <TouchableOpacity style={styles.container} activeOpacity={.6} onPress={() => func(tasks, info.status,user)}>
                <Image style={{height: 64, width: 64}} source={{uri: info.icon}} />
                <Text style={styles.status}>{info.tag}</Text>
                <Text style={styles.num}>(3)</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF', 
        alignItems: 'center', 
        justifyContent: 'center', 
        paddingVertical: 15, 
        borderRadius: 20, 
        marginVertical: 10
    },
    status: {
        marginVertical: 6,
        fontSize: 20,
        fontWeight: "700",
        color: "#6d6dbe",
        textTransform: "uppercase"
    },
    num: {
        fontSize: 18,
        color: '#999'
    }
})