import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList,} from 'react-native';
import { AirbnbRating, Rating  } from 'react-native-elements';
import AsyncStorage from "@react-native-community/async-storage"
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from "react-native-vector-icons/Ionicons"
import ProgressCircle from 'react-native-progress-circle';
export default class TaskDetail extends Component {

    state = {
        process: "",
        user:{}
    }
    
    getData = async () => {
        const data = await AsyncStorage.getItem("user");
        // console.log(typeof JSON.parse(data));
        await this.setState({user: JSON.parse(data)})
    }
    componentDidMount() {
        const { info } = this.props;
        this.setState({process: JSON.stringify(info.process)})
        this.getData()
    }

    render() {
        const { info  } = this.props;
        const { process, user } = this.state
        return (
            <View style={styles.container}>
                <Text style={styles.taskName}>{info.name}</Text>
                {
                    info.status === "doing" &&
                    <View style={{alignSelf: "center"}}>
                        <ProgressCircle
                            percent={JSON.parse(info.process)}
                            radius={33}
                            borderWidth={8}
                            color="#4CB963"
                            shadowColor="#CFD8E9"
                            bgColor="#fff"
                            outerCircleStyle={{marginTop: 15}}
                        >
                            <Text style={{ fontSize: 18 }}>{info.process}%</Text>
                        </ProgressCircle>
                    </View>
                }
                <View style={{margin: 30, marginTop: 20}}>
                    <View style={{flexDirection: "row"}}>
                        <Ionicons name="ios-person" size={25} color="#4CB963" />
                        <Text style={{ marginLeft: 20, fontSize: 20}}>{info.handle ? info.handle : 'None'}</Text>
                    </View>
                    <View style={{flexDirection: "row", marginTop: 20}}>
                        <Text>
                            <Ionicons name="ios-barcode" size={25} color="#4CB963" />
                            <Text style={{fontSize: 20}}>    {info.detail}</Text>
                        </Text>
                    </View>
                    {
                        user.isAdmin
                        ?   info.status === 'undone' ? 
                            <View>
                                <View style={styles.choseBlock}>
                                    <Ionicons name="ios-send" size={25} color="#4CB963" />
                                    <TextInput
                                        style={styles.inputChoose}
                                        placeholder='Staff name'
                                    />
                                </View>
                                <TouchableOpacity style={styles.chooseButton}>
                                    <Text style={styles.chooseButtonText}>Save</Text>
                                </TouchableOpacity>
        
                            </View> 
                            :   info.status === 'done' ? 
                                <View>
                                    <View style={[styles.choseBlock,{marginRight: 55}]}>
                                        <Ionicons name="ios-git-branch" size={25} color="#4CB963" />
                                        <Rating
                                            style={{marginLeft: 30}}
                                            ratingCount={5}
                                            startingValue={info.rating}
                                            showRating={false}
                                            imageSize={20}
                                            fractions={1}
                                        /> 
                                    </View>
                                    <View style={[styles.choseBlock, {marginTop: 15}]}>
                                        <Ionicons name="ios-text" size={25} color="#4CB963" />
                                        <TextInput
                                            style={styles.inputChoose}
                                            placeholder='Comment'
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
        marginTop: 60,
        backgroundColor: '#fff',
        borderRadius: 20,
    },
    taskName: {
        marginTop: 30,
        alignSelf: 'center',
        fontSize: 32,
        fontWeight: 'bold',
        color: '#4CB963',
        textTransform: "uppercase",
    },
    staffDoing: {
        marginBottom: 15,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#4CB963',
        
    },
    staffChoosing: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#4CB963',
        justifyContent: 'center'
    },
    taskDetail: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#4CB963',
    },
    info: {
        fontWeight: '300',
        color: '#3A3042',
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
        borderBottomWidth: 1,
        borderColor: '#365179',
        marginLeft: 20,
        borderRadius: 10,
        paddingLeft: 15,
        fontSize: 16,
        backgroundColor: '#fff',
    },
    chooseButton: {
        marginTop: 30,
        backgroundColor: '#4CB963',
        borderRadius: 20,
    },
    chooseButtonText: {
        padding: 16,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'center',
        textTransform: "uppercase"
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