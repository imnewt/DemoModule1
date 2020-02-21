import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import TaskDetailItem from '../components/TaskDetailItem';
const db = require('../db.json')
export default class TaskDetail extends Component {

    state = {
        info: db.tasks
    }

    render() {
        const { info } = this.state;
        const { navigation } = this.props;
        return (
            <TaskDetailItem info={info} />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16, 
        backgroundColor: '#fffaff', 
        paddingTop: 16
    },
    wrapper: {
        marginBottom: 15
    }
})