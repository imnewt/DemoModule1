import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

import TaskButton from "../components/TaskButton"

export default class HomeQL extends Component {
    render() {
        const { data } = this.props;
        return (
            <SafeAreaView style={styles.container}>
                <TaskButton title="Chưa giao" status="chuagiao" data={data}/>
                <TaskButton title="Đã giao" status="dagiao" data={data} />
                <TaskButton title="Đã hoàn thành" status="dahoanthanh" data={data} /> 
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    }
})