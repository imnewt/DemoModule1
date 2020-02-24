import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker, FlatList } from 'react-native';
import { AirbnbRating, Slider  } from 'react-native-elements';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const hihi=100
export default class TaskDetail extends Component {

    state = {
        value: 0,
        user: ['chau', 'truc', 'nhan'],
        rating: '',
        process: 50
    }

    componentDidMount() {
        const { info } = this.props;
        this.setState({value: info.percent})
    }

    render() {
        const { info, user } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.taskName}>{info.name}</Text>
                <Text style={styles.staffDoing}>Handle: <Text style={styles.info}>{info.for ? info.for : 'None'}</Text></Text>
                <Text style={styles.taskDetail}>Detail: <Text style={styles.info}>{info.detail}</Text></Text>  
                
                {
                    user.isAdmin
                    ?   info.status === 'undeliveried' ? 
                        <View>
                            <View style={styles.choseBlock}>
                                <Text style={styles.staffChoosing}>Choose:</Text>
                                <TextInput
                                    style={styles.inputChoose}
                                    placeholder='Staff name'
                                />
                            </View>
                            <TouchableOpacity style={styles.chooseButton}>
                                <Text style={styles.chooseButtonText}>Save</Text>
                            </TouchableOpacity>
    
                        </View> 
                        :   info.status === 'doing' ? 
                            <View>
                                <Text style={styles.staffChoosing}>Process: <Text style={styles.info}>{this.state.value}%</Text></Text>
                                
                            </View> 
                        :   info.status === 'done' ? 
                            <View>
                                <View style={styles.choseBlock}>
                                    <Text style={[styles.staffChoosing, {marginRight: 15}]}>Rating:</Text>
                                    <AirbnbRating
                                        count={5}
                                        defaultRating={0}
                                        showRating={false}
                                        size={20}
                                        /> 
                                </View>
                                <View style={[styles.choseBlock, {marginTop: 15}]}>
                                    <Text style={[styles.staffChoosing, {marginRight: 10}]}>Comment:</Text>
                                    <TextInput
                                        style={[styles.inputChoose, {marginLeft: 0}]}
                                    />
                                </View>
                                <TouchableOpacity style={styles.chooseButton}>
                                    <Text style={styles.chooseButtonText}>Save</Text>
                                </TouchableOpacity>
                            </View> : null
                        
                    : 
                    <View>
                        <View style={[styles.choseBlock, {marginTop: 15}]}>
                            <Text style={[styles.staffChoosing, {marginRight: 10}]}>Process:</Text>
                            <TextInput
                                style={[styles.inputChoose, {marginLeft: 0}]}
                            />
                        </View>
                        <TouchableOpacity style={styles.chooseButton}>
                            <Text style={styles.chooseButtonText}>Save</Text>
                         </TouchableOpacity>
                    </View>

                }
                    
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // alignItems: 'center',
        paddingHorizontal: 25,
        paddingVertical: 16,
        backgroundColor: '#FFF',
        borderRadius:10,
        borderStyle: 'solid',
        borderWidth: 0.5,
        borderColor: 'grey',
    },
    taskName: {
        alignSelf: 'center',
        marginBottom: 15,
        fontSize: 35,
        fontWeight: 'bold',
        color: '#6d6dbe',
    },
    staffDoing: {
        marginBottom: 15,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#6d6dbe',
    },
    staffChoosing: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#6d6dbe',
    },
    taskDetail: {
        marginBottom: 15,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#6d6dbe',
    },
    info: {
        fontWeight: '300',
        color: '#000'
    },
    choseBlock: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputChoose:{
        flex: 1,
        height: 40, 
        borderWidth: 1,
        marginLeft: 10,
        borderRadius: 10,
        paddingLeft: 15,
        fontSize: 16
    },
    chooseButton: {
        marginTop: 30,
        backgroundColor: '#6d6dbe',
        borderRadius: 20,
        //alignSelf: 'center'
    },
    chooseButtonText: {
        padding: 20,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'center',
    }

})