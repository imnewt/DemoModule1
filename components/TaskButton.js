import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default class TaskButton extends Component {
    render() {
        const { tasks, status, func, icon, user } = this.props;
        return (
            <TouchableOpacity style={styles.container} activeOpacity={.6} onPress={() => func(tasks, status, user)}>
                <Image style={{height: 64, width: 64}} source={{uri: icon}} />
                <Text style={styles.status}>{status}</Text>
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