import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import TaskListItem from '../components/TaskListItem';
export default class TaskList extends Component {

    static navigationOptions = {
        headerTitleAlign: {
            textAlign: 'center'
        }
    };

    render() {
        const { tasks } = this.props.route.params;
        const { navigation } = this.props;
        return (
            <FlatList 
                data={tasks}
                renderItem={({ item }) => (
                    <TaskListItem info={item} onPress={() => navigation.navigate('TaskDetail', { info: item })}/>
                )}
                keyExtractor={(item) => `${item.id}`}
                contentContainerStyle={styles.container}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingTop: 32
    }
})