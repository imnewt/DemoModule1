import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import { Rating } from 'react-native-elements';
import Person1 from '../images/person.png';
import Person4 from '../images/woman.png';
import Person2 from '../images/asthma.png';
import Person3 from '../images/man.png';
export default class TaskListItem extends Component {

    state = {
        avatar: [Person1, Person2, Person3, Person4, Person1, Person2, Person3, Person4, Person1, Person2, Person2]
    }

    render() {
        const { info, onPress } = this.props;
        return (
            <SafeAreaView>
                {
                    info.status.toLowerCase() !== 'done' ?
                    <TouchableOpacity style={styles.container} activeOpacity={.8} onPress={onPress}>
                        <View style={{alignItems: 'center', flexDirection: 'row', flex: 1}}>
                            <ProgressCircle
                                percent={JSON.parse(info.process)}
                                radius={33}
                                borderWidth={8}
                                color="#FF8552"
                                shadowColor="#CFD8E9"
                                bgColor="#fff"
                                outerCircleStyle={{marginVertical: 10, marginLeft: 25}}
                            >
                                <Text style={{ fontSize: 18 }}>{info.process}%</Text>
                            </ProgressCircle>
                        </View>
                        <View style={{alignItems: 'center', flex: 1, marginRight: 20}}>
                            <Text style={styles.name}>{info.name}</Text>
                            <Text style={styles.handle}>Handle: { info.handle ? info.handle : 'None'}</Text>  
                        </View>
                    </TouchableOpacity> : 
                    <TouchableOpacity style={styles.container} activeOpacity={.6} onPress={onPress}>
                        <Image source={this.state.avatar[Math.round(Math.random()*10)]} style={styles.img}/>
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
        color: '#FF8552',
        textTransform: "uppercase",
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