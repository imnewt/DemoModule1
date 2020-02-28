import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Text} from 'react-native';
import TaskListItem from '../components/TaskListItem';
import Background from '../components/BackgroundImage';
export default class TaskList extends Component {



    render() {
        const { tasks, user } = this.props.route.params;
        const { navigation } = this.props;
        return (
            // <Background>
            <View style={styles.container}>
            {
                tasks[0].status.toLowerCase() !== 'done' ?
                <View style={{}}>
                <FlatList 
                    data={tasks}
                    renderItem={({ item }) => (
                        <View >
                            <TaskListItem info={item} onPress={() => navigation.navigate('TaskDetail', { info: item, user: user })}/>
                        </View>
                    )}
                    keyExtractor={(item) => `${item.id}`}
                    contentContainerStyle={styles.container}
                    // scrollEnabled={false}
                /> 
                </View> :
                <View>
                <FlatList 
                    data={tasks}
                    renderItem={({ item }) => (
                        <View >
                            <TaskListItem info={item} onPress={() => navigation.navigate('TaskDetail', { info: item, user: user })}/>
                        </View>
                    )}
                    keyExtractor={(item) => `${item.id}`}
                    contentContainerStyle={styles.container}
                />
                </View> 

            }
            </View>
            // </Background>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // paddingHorizontal: 8,
        backgroundColor: '#fff',
        height: '100%',
        borderTopWidth: 2,
        borderStyle: 'solid',
        borderColor: '#EEE',
    },
    textBlock:{
        width: "100%",
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderStyle: 'solid',
        borderColor: '#EEE',
    },
    text: {
        color: '#365179',
        fontWeight: '700',
        fontSize: 15,
        padding: 10
    }
    // container: {
    //     paddingHorizontal: 16,
    //     marginVertical: 50,
    //     //paddingTop: 32
    // }
})