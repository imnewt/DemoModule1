import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";


export default class TaskButton extends Component {
    render() {
        const { title, tasks, status, user, func } = this.props
        return (
            <TouchableOpacity style={styles.button} onPress={() => func(tasks, status, user)}>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        width: 300,
        backgroundColor: "#FF5562",
        alignItems: "center",
        borderRadius: 10,
        margin: 20
    },
    text: {
        padding: 20,
        fontSize: 20,
        fontWeight: "700",
        color: "#FFF",
        textTransform: "uppercase"
    }
})