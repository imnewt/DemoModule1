import React, { Component } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
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
            // <Background>
                <ScrollView style={{height: '100%', backgroundColor: '#fff'}}>
                    <View style={styles.container}>
                        <TaskDetailItem 
                            info={info} 
                            user={user}
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
        marginTop: 80,
        marginBottom: 40
    },
    wrapper: {
        marginBottom: 15
    }
})