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
        const { tasks, user } = this.props.route.params;
        console.log(tasks);
        const { navigation } = this.props;
        return (
            <Background>
                    <FlatList 
                        data={tasks}
                        numColumns={2}
                        renderItem={({ item }) => (
                            <View style={{flex: 1, paddingHorizontal: 8}}>
                                <TaskListItem info={item} onPress={() => navigation.navigate('TaskDetail', { info: item, user: user })}/>
                            </View>
                        )}
                        keyExtractor={(item) => `${item.id}`}
                        contentContainerStyle={styles.container}
                    />
            </Background>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        marginTop: 100
    }
    // container: {
    //     paddingHorizontal: 16,
    //     marginVertical: 50,
    //     //paddingTop: 32
    // }
})