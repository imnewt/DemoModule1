import React, { Component } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import TaskDetailItem from '../components/TaskDetailItem';
import AsyncStorage from "@react-native-community/async-storage"
import BackgroundImage from '../components/BackgroundImage'
export default class TaskDetail extends Component {
    

    render() {
        const { info } = this.props.route.params;
        return (
            <BackgroundImage>
                <ScrollView style={styles.container}>
                    <TaskDetailItem 
                        info={info} 
                    />
                </ScrollView>
            </BackgroundImage>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16, 
        //backgroundColor: '#fff',
        marginBottom: 20
    },
    wrapper: {
        marginBottom: 15
    }
})