import React, { Component } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import TaskDetailItem from '../components/TaskDetailItem';
import AsyncStorage from "@react-native-community/async-storage"
import Background from '../components/BackgroundImage'
export default class TaskDetail extends Component {
    

    render() {
        const { info } = this.props.route.params;
        return (
            // <Background>
                <ScrollView style={{height: '100%', backgroundColor: '#fff'}}>
                    <View style={styles.container}>
                        <TaskDetailItem 
                            info={info} 
                        />
                    </View>
                </ScrollView>
            // </Background>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16, 
        //paddingTop: 16,
        marginTop: 200,
        marginBottom: 40
    },
    wrapper: {
        marginBottom: 15
    }
})