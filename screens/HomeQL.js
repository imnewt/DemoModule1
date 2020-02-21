import React, { Component } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
const db = require('../db.json');
import TaskButton from "../components/TaskButton"

export default class HomeQL extends Component {

    state = {
        staff: []
    }

    componentDidMount() {
        this._handleCheckStatus();
    }

    _handleCheckStatus = () => {
        let temp = [...db.tasks];
        let filter = temp.filter( item => {
            return item.status === 'dahoanthanh'
        })
        this.setState({staff: filter})
    }

    _handleClose = () => {
        this.setState({staff: []})
    }

    render() {
        const { staff } = this.state;
        const { data, navigation } = this.props;
        return (
            <SafeAreaView style={styles.container}>
                <>
                    {
                        staff.length ? 
                        <TouchableOpacity onPress={this._handleClose}>
                            {
                                staff.map((item, index) => <Text key={index}>{item.for}</Text>)
                            }
                        </TouchableOpacity> : null
                        
                    }
                </>
                <TaskButton navigation={navigation} title="Chưa giao" status="chuagiao" data={data}/>
                <TaskButton navigation={navigation} title="Đã giao" status="dagiao" data={data} />
                <TaskButton navigation={navigation} title="Đã hoàn thành" status="dahoanthanh" data={data} /> 
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