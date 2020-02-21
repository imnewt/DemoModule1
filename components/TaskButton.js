import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";


export default class TaskButton extends Component {
   
    handlePressToList = (data, status) => {
        const { navigation } = this.props;
        var filteredList = [];
        if (status === "chuagiao") {
            filteredList = data.filter(item => item.status === "chuagiao")
        }
        else if (status === "dagiao") {
            filteredList = data.filter(item => item.status === "dagiao")
        }
        else {
            filteredList = data.filter(item => item.status === "dahoanthanh")
        }
        navigation.navigate("TaskList", {data: filteredList});
    }

    render() {
        const { title, data, status } = this.props
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={() => this.handlePressToList(data, status)}>
                    <Text style={styles.text}>{title}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //marginVertical: 20,
    },
    button: {
        width: 300,
        backgroundColor: "pink",
        alignItems: "center",
        borderRadius: 10,
        margin: 20
    },
    text: {
        padding: 20,
        fontSize: 20,
        fontWeight: "700",
        textTransform: "uppercase"
    }
})