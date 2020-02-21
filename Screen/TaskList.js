import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import TaskListItem from '../components/TaskListItem';
const db = require('../db.json');
export default class TaskList extends Component {

    state = {
        info: [
            {
                id: 1,
                for: 'Nhan',
                task: 'Đi chơi',
                content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum...`,
                process: 0,
                status: 'Chua lam'
            },
            {
                id: 2,
                for: 'Truc',
                task: 'Đi tù',
                content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum...`,
                process: 0,
                status: 'Chua lam'
            },
            {
                id: 3,
                for: 'Chau',
                task: 'Đi bar',
                content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum...`,
                process: 0,
                status: 'Chua lam'
            },
        ],
        data: db.tasks
    }

    render() {
        const { data } = this.state;
        const { navigation } = this.props;
        return (
            <FlatList 
                data={data}
                //onPress={() => navigation.navigate('Products', { categoryProduct: item })}
                renderItem={({ item }) => (
                    <View style={styles.wrapper}>
                        <TaskListItem info={item} onPress={() => navigation.navigate('TaskDetail', { info: item })}/>
                    </View>
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
    },
    wrapper: {
        marginBottom: 20
    }
})