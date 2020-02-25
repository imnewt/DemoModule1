import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker, FlatList,} from 'react-native';
import { AirbnbRating, Rating  } from 'react-native-elements';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default class TaskDetail extends Component {

    state = {
        process: 0
    }

    componentDidMount() {
        const { info } = this.props;
        this.setState({value: info.percent})
        this.setState({process: info.process})
    }

    render() {
        const { info, user } = this.props;

        return (
            <View style={styles.container}>
            <Text style={styles.taskName}>{info.name}</Text>
            <View >
                <Text style={styles.staffDoing}>Handle: <Text style={{fontWeight: '400', color: '#000', fontSize: 20}}>{info.handle ? info.handle : 'None'}</Text></Text>
                
                <Text style={styles.taskDetail}>Detail: <Text style={styles.info}>{info.detail}</Text></Text>  
                
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
                                <Text style={[styles.staffChoosing, {marginTop: 30, marginBottom: 20}]}>Process: <Text style={styles.info}>{info.process}%</Text></Text> 
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
                        
                    : info.status === 'doing' ? 
                    <View>
                    <View style={[styles.choseBlock]}>
                        <Text style={[styles.staffChoosing, {marginRight: 10,}]}>Process:</Text>
                        <TextInput
                            style={styles.inputProcess}
                            onChangeText={() => this.setState({process}) }
                            value={this.state.process}
                        />
                        <Text style={{fontWeight: '700', marginLeft: 5}}>%</Text>

                    </View>
                    <TouchableOpacity style={styles.chooseButton}>
                        <Text style={styles.chooseButtonText}>Save</Text>
                    </TouchableOpacity>
                    </View> 
                    
                        :   info.status === 'done' ? 
                            <View style={[styles.choseBlock,{marginRight: 55}]}>
                                <Text style={[styles.staffChoosing, {marginRight: 15}]}>Rating:</Text>
                                <Rating
                                    imageSize={20}
                                    readonly
                                    startingValue={info.rating}
                                />
                            </View>  : null

                }
                    
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // alignItems: 'center',
        marginTop: 30,
        paddingHorizontal: 25,
        paddingVertical: 16,
        backgroundColor: '#fff',
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
        color: '#6d6dbe',
    },
    staffDoing: {
        marginBottom: 15,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#6d6dbe',
        
    },
    staffChoosing: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#6d6dbe',
        justifyContent: 'center'
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
        marginTop: 20,
        alignItems: 'center'
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
    },
    inputProcess: {
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        height: 40,
        width: 45,
        paddingHorizontal: 5,
        textAlign: 'center'
    },

})