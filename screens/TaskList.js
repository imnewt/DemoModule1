import React, { Component } from 'react';
import AsyncStorage from "@react-native-community/async-storage"
import { View, FlatList, Text, StyleSheet } from 'react-native';
import TaskListItem from '../components/TaskListItem';
import BackgroundImage from '../components/BackgroundImage';
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
        return (
            <BackgroundImage>
                <View style={styles.container}>
                    <FlatList 
                        data={tasks}
                        renderItem={({ item }) => (
                            <TaskListItem info={item} onPress={() => this.props.navigation.navigate('TaskDetail', { info: item })}/>
                        )}
                        keyExtractor={(item) => `${item.id}`}
                        contentContainerStyle={styles.container}
                        // scrollEnabled={false}
                    /> 
                </View>
            </BackgroundImage>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // paddingHorizontal: 8,
        marginTop: 40,
        // backgroundColor: '#FFF',
        // height: '100%',
        //borderTopWidth: 2,
        // borderStyle: 'solid',
        // borderColor: '#EEE',
    }
})