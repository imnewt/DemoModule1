import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView, ProgressBarAndroid } from 'react-native';
import ProgressCircle from 'react-native-progress-circle'

export default class TaskListItem extends Component {
    render() {
        const { info, onPress } = this.props;
        console.log(info);
        return (
            <SafeAreaView>
                {
                    info.status.toLowerCase() !== 'done' ?
                    <TouchableOpacity style={styles.container} activeOpacity={.6} onPress={onPress}>
                        <View style={{alignItems: 'center'}}>
                            <ProgressCircle
                                percent={info.process}
                                radius={45}
                                borderWidth={8}
                                color="#6d6dbe"
                                shadowColor="#CFD8E9"
                                bgColor="#fff"
                                outerCircleStyle={{marginBottom: 10}}
                            >
                                <Text style={{ fontSize: 18 }}>{info.process}%</Text>
                            </ProgressCircle>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <Text style={styles.name}>{info.name}</Text>
                            <Text style={styles.handle}>Handle: { info.handle ? info.handle : 'None'}</Text>
                        </View>
                    </TouchableOpacity> : 
                    <TouchableOpacity style={styles.container} activeOpacity={.6} onPress={onPress}>
                        <View style={{alignItems: 'center'}}>
                            <ProgressCircle
                                percent={info.process}
                                radius={45}
                                borderWidth={8}
                                color="#6d6dbe"
                                shadowColor="#CFD8E9"
                                bgColor="#fff"
                                outerCircleStyle={{marginBottom: 10}}
                            >
                                <Text style={{ fontSize: 18 }}>{info.process}%</Text>
                            </ProgressCircle>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <Text style={styles.name}>{info.name}</Text>
                            <Text style={styles.handle}>Handle: { info.handle ? info.handle : 'None'}</Text>
                        </View>
                    </TouchableOpacity>
                }
            </SafeAreaView>
            // <TouchableOpacity activeOpacity={.7} style={styles.container} onPress={onPress}>
            //     <View style={{flex: 3/7, alignItems: 'center'}}>
            //         <ProgressCircle
            //             percent={info.process}
            //             radius={45}
            //             borderWidth={8}
            //             color="#6d6dbe"
            //             shadowColor="#CFD8E9"
            //             bgColor="#fff"
            //             outerCircleStyle={{}}
            //         >
            //             <Text style={{ fontSize: 18 }}>{info.process}%</Text>
            //         </ProgressCircle>
            //     </View>
            //     <View style={{flex: 4/7}}>
            //         <Text style={styles.name}>{info.name}</Text>
            //         <Text style={styles.handle}>Handle: { info.handle ? info.handle : 'None'}</Text>
            //     </View>
            // </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        borderRadius: 20,
        backgroundColor: '#fff',
        overflow: 'hidden',
        paddingVertical: 32,
        alignItems: 'center',
        borderWidth: 3,
        borderStyle: 'solid',
        borderColor: '#EEE',
    },
    // container: {
    //     alignItems: 'center',
    //     backgroundColor: '#FFF',
    //     borderRadius: 30,
    //     marginBottom: 15,
    //     color: '#FFF',
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     paddingVertical: 25,
    //     paddingHorizontal: 12,
    //     borderWidth: 3,
    //     borderStyle: 'solid',
    //     borderColor: '#DDD'
    // },
    name: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 15,
        color: '#6d6dbe',
        textTransform: "uppercase"
    },
    handle: {
        color: '#666',
        fontSize: 15,
        fontStyle: 'italic'
    }
})