import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import TaskListItem from '../components/TaskListItem';
import Background from '../components/BackgroundImage'
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
            <Background>
                {/* <View style={styles.table}> */}
                    <FlatList 
                        data={tasks}
                        renderItem={({ item }) => (
                            <TaskListItem info={item} onPress={() => navigation.navigate('TaskDetail', { info: item })}/>
                        )}
                        keyExtractor={(item) => `${item.id}`}
                        contentContainerStyle={styles.container}
                    />
                {/* </View> */}
            </Background>
        )
    }
}

const styles = StyleSheet.create({
    table: {
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: 'grey',
        width: '90%',
        marginVertical: 20,
        marginHorizontal: 20,
    },
    container: {
        paddingHorizontal: 16,
        //paddingTop: 32
    }
})