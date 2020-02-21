import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import TaskDetailItem from '../components/TaskDetailItem';
export default class TaskDetail extends Component {

    static navigationOptions = {
        headerTitleAlign: {
            textAlign: 'center'
        }
    };

    render() {
        const { info } = this.props.route.params;
        return (
            <View style={styles.container}>
                <TaskDetailItem info={info} />
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16, 
        paddingTop: 16
    },
    wrapper: {
        marginBottom: 15
    }
})