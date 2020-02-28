import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker, FlatList,} from 'react-native';
import { AirbnbRating, Rating  } from 'react-native-elements';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default class TaskDetail extends Component {

    state = {
        process: ""
    }

    componentDidMount() {
        const { info } = this.props;
        this.setState({process: JSON.stringify(info.process)})
    }

    render() {
        const { info, user } = this.props;
        const { process } = this.state
        console.log(process)
        return (
            <View style={styles.container}>
            <Text style={styles.taskName}>{info.name}</Text>
            <View >
                <Text style={styles.staffDoing}>Handle: <Text style={{fontWeight: '500', color: '#365179', fontSize: 22}}>{info.handle ? info.handle : 'None'}</Text></Text>
                
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
                                <Text style={[styles.staffChoosing, {marginTop: 30, marginBottom: 20}]}>Process: <Text style={[styles.info,{fontWeight: '500'}]}>{info.process}%</Text></Text> 
                            </View> 
                        :   info.status === 'done' ? 
                            <View>
                                <View style={[styles.choseBlock,{marginRight: 55}]}>
                                    <Text style={[styles.staffChoosing, {marginRight: 15}]}>Rating:</Text>
                                    <Rating
                                        ratingCount={5}
                                        startingValue={info.rating}
                                        showRating={false}
                                        imageSize={20}
                                        fractions={1}
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
                            onChangeText={process => this.setState({process}) }
                            value={process}
                        />
                        <Text style={{fontWeight: '700', marginLeft: 5, color:'#365179'}}>%</Text>

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
        marginTop: -60,
        // paddingHorizontal: 25,
        // paddingVertical: 16,
        // backgroundColor: '#fff',
        // borderRadius:10,
        // borderStyle: 'solid',
        // borderWidth: 0.7,
        // borderColor: 'grey',
        // shadowColor: "grey",
        // shadowOpacity: 0.7,
        // shadowRadius: 15,
        // shadowOffset: { width: 0, height: 0 },
    },
    taskName: {
        marginTop: 15,
        alignSelf: 'center',
        marginBottom: 25,
        fontSize: 38,
        fontWeight: 'bold',
        color: '#FF8552',
        textTransform: "uppercase",
    },
    staffDoing: {
        marginBottom: 15,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FF8552',
        
    },
    staffChoosing: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FF8552',
        justifyContent: 'center'
    },
    taskDetail: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FF8552',
    },
    info: {
        fontWeight: '300',
        color: '#365179',
        fontSize: 20
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
        borderColor: '#365179',
        marginLeft: 10,
        borderRadius: 10,
        paddingLeft: 15,
        fontSize: 16,
        backgroundColor: '#fff',
    },
    chooseButton: {
        marginTop: 30,
        backgroundColor: '#FF8552',
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
        textAlign: 'center',
        borderColor: '#365179'
    },

})