import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import TaskDetailItem from '../components/TaskDetailItem';
import Background from '../components/BackgroundImage'
export default class TaskDetail extends Component {

    static navigationOptions = {
        headerTitleAlign: {
            textAlign: 'center'
        }
    };

    render() {
        const { info, user } = this.props.route.params;
        return (
            <Background>
                <View style={styles.container}>
                    <TaskDetailItem 
                    info={info} 
                    user={user}
                    />
                </View>
            </Background>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16, 
        paddingTop: 16,
        marginTop: 80
    },
    wrapper: {
        marginBottom: 15
    }
})