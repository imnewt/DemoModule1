import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker, FlatList,} from 'react-native';
import { AirbnbRating, Slider  } from 'react-native-elements';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default class TaskDetail extends Component {

    state = {
        value: 0,
        user: ['chau', 'truc', 'nhan'],
        rating: '',
        process: 0
    }

    componentDidMount() {
        const { info } = this.props;
        this.setState({value: info.percent})
    }

    render() {
        const { info, user } = this.props;
        return (
            <View>
            <Text style={styles.taskName}>{info.name}</Text>
            <View >
                <Text style={styles.staffDoing}>Handle: <Text style={{fontWeight: '500', color: '#000', fontSize: 20}}>{info.handle ? info.handle : 'None'}</Text></Text>
                <View style={styles.container}>
                <Text style={styles.taskDetail}>Detail: <Text style={styles.info}>{info.detail}</Text></Text>  
                </View>
                {
                    user.isAdmin
                    ?   info.status === 'undone' ? 
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
                                <Text style={[styles.staffChoosing, {marginTop: 30}]}>Process: <Text style={styles.info}>{info.process}%</Text></Text> 
                            </View> 
                        :   info.status === 'done' ? 
                            <View>
                                <View style={[styles.choseBlock,{marginRight: 55}]}>
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
                    <View style={[styles.choseBlock, {flexDirection:'row', marginTop: 40}]}>
                        <Text style={[styles.staffChoosing, {marginRight: 10}]}>Process:</Text>
                        {/* <TextInput
                            style={[styles.inputChoose, {marginLeft: 0}]}
                        /> */}
                        <View style={{flexDirection:'row-reverse'}}>
                            <View style={{backgroundColor: '#fff', borderRadius: 15, width: 50, justifyContent: 'center', marginLeft: 10}}>
                                <Text style={{alignSelf: 'center', fontSize: 18}}>{this.state.process}%</Text>
                            </View>
                            <Slider
                                style={{width: 200, height: 40}}
                                minimumValue={0}
                                maximumValue={100}
                                step={1}
                                thumbTintColor="#4c4c85"
                                minimumTrackTintColor="#4c4c85"
                                maximumTrackTintColor="#fff"
                                onValueChange={(value) => this.setState({process: value})}
                            />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.chooseButton}>
                        <Text style={styles.chooseButtonText}>Save</Text>
                    </TouchableOpacity>
                    </View>

                }
                    
            </View>
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
        borderRadius:15,
        borderStyle: 'solid',
        borderWidth: 0.7,
        borderColor: 'grey',
        shadowColor: "grey",
        shadowOpacity: 0.7,
        shadowRadius: 15,
        shadowOffset: { width: 0, height: 0 },
    },
    taskName: {
        marginTop: 15,
        alignSelf: 'center',
        marginBottom: 15,
        fontSize: 40,
        fontWeight: 'bold',
        color: '#4c4c85',
    },
    staffDoing: {
        marginBottom: 15,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4c4c85',
        alignSelf: 'center'
    },
    staffChoosing: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4c4c85',
        alignSelf: 'center',
    },
    taskDetail: {
        marginBottom: 15,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#6d6dbe',
    },
    info: {
        fontWeight: '300',
        color: '#000',
        fontSize: 18
    },
    choseBlock: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 20
    },
    inputChoose:{
        flex: 0.8,
        height: 40, 
        borderWidth: 1,
        marginLeft: 10,
        borderRadius: 10,
        paddingLeft: 15,
        fontSize: 16,
        backgroundColor: '#fff',
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