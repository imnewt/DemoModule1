import React, { Component } from 'react';
import AsyncStorage from "@react-native-community/async-storage"
import { View, FlatList, Text, StyleSheet } from 'react-native';
import TaskListItem from '../components/TaskListItem';
import Background from '../components/BackgroundImage';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class TaskList extends Component {
    // state = {
    //     user: {},
       
    // }

    // getData = async () => {
    //     const data = await AsyncStorage.getItem("user");
    //     // console.log(typeof JSON.parse(data));
    //     await this.setState({user: JSON.parse(data)})
    // }
    // componentDidMount() {
    //     this.getData()
    // }


    render() {
        const { tasks } = this.props.route.params
        console.log(tasks)
        return (
            // <Background>
            <View style={styles.container}>
            
                <View>
                <FlatList 
                    data={tasks}
                    renderItem={({ item }) => (
                        <View >
                            <TaskListItem info={item} onPress={() => this.props.navigation.navigate('TaskDetail', { info: item })}/>
                        </View>
                    )}
                    keyExtractor={(item) => `${item.id}`}
                    contentContainerStyle={styles.container}
                    // scrollEnabled={false}
                /> 
                </View> 

            
            </View>
            // </Background>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // paddingHorizontal: 8,
        marginTop: 74,
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
})