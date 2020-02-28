import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import { Rating } from 'react-native-elements';
import Avatar from "../images/avatar.png"
export default class TaskListItem extends Component {

    render() {
        const { info, onPress } = this.props;
        return (
            <SafeAreaView style={{marginHorizontal: 20, marginVertical: 10, borderRadius: 20, overflow: "hidden"}}>
                {
                    info.status.toLowerCase() !== 'done' ?
                    <TouchableOpacity style={styles.container} activeOpacity={.8} onPress={onPress}>
                        <View style={{alignItems: 'center', flexDirection: 'row', flex: 1}}>
                            <ProgressCircle
                                percent={JSON.parse(info.process)}
                                radius={33}
                                borderWidth={8}
                                color="#4CB963"
                                shadowColor="#CFD8E9"
                                bgColor="#fff"
                                outerCircleStyle={{marginVertical: 10, marginLeft: 25}}
                            >
                                <Text style={{ fontSize: 18 }}>{info.process}%</Text>
                            </ProgressCircle>
                        </View>
                        <View style={{alignItems: 'center', flex: 2}}>
                            <Text style={styles.name}>{info.name}</Text>
                            <Text style={styles.handle}>Handle: { info.handle ? info.handle : 'None'}</Text>  
                        </View>
                    </TouchableOpacity> : 
                    <TouchableOpacity style={styles.container} activeOpacity={.6} onPress={onPress}>
                        <Image source={Avatar} style={styles.img}/>
                        <View style={{alignItems: 'center'}}>
                            <Text style={[styles.name, {marginTop: 10}]}>{info.name}</Text>
                            <Text style={styles.handle}>Handle: { info.handle ? info.handle : 'None'}</Text>
                        </View>
                        <Rating
                            imageSize={20}
                            readonly
                            startingValue={info.rating}
                            style={styles.rating}
                        /> 
                    </TouchableOpacity>
                }
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        borderBottomWidth: 2,
        borderStyle: 'solid',
        borderColor: '#EEE',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignItems: "center"
    },
    name: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 10,
        color: '#4CB963',
        textTransform: "uppercase",
        textAlign: 'center'
    },
    handle: {
        color: '#365179',
        fontSize: 16,
        fontStyle: 'italic',
        marginBottom: 10,
        marginRight: 5,
        fontWeight: '500'
    },
    img: {
        height: 64, 
        width: 64, 
        alignSelf: 'center', 
        // marginBottom: 10
    },
    rating: {
        alignSelf: 'center'
    }
})