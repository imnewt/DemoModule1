import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackgroundImage from '../components/BackgroundImage';
import TaskButton from "../components/TaskButton"
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Home extends Component {

    state = {
        categories: [
            {
                id: 1,
                icon: 'https://cdn0.iconfinder.com/data/icons/simplie-essential-action/22/action_039-checkmark-check-done-verify-512.png',
                status: 'undelivered'
            },
            {
                id: 2,
                icon: 'https://cdn0.iconfinder.com/data/icons/simplie-essential-action/22/action_039-checkmark-check-done-verify-512.png',
                status: 'doing'
            },
            {
                id: 3,
                icon: 'https://cdn0.iconfinder.com/data/icons/simplie-essential-action/22/action_039-checkmark-check-done-verify-512.png',
                status: 'done'
            }
        ]
    }

    handlePressToSignUp = () => {
        const { navigation } = this.props;
        navigation.navigate("SignUp");
    }

    handlePressToList = (tasks, status) => {
        const { navigation } = this.props;
        var filteredList = [];
        if (status === "chuagiao") {
            filteredList = tasks.filter(item => item.status === "chuagiao")
        }
        else if (status === "dagiao") {
            filteredList = tasks.filter(item => item.status === "dagiao")
        }
        else {
            filteredList = tasks.filter(item => item.status === "dahoanthanh")
        }
        navigation.navigate("TaskList", {tasks: filteredList});
    }

    handlePressToTasks = (tasks,status,user) => {
        const { navigation } = this.props;
        var filteredList = [];
        filteredList = tasks.filter(item => item.for === user.name);
        navigation.navigate("TaskList", {tasks: filteredList});
    }
 
    render() {
        const { navigation } = this.props;
        const { user, tasks } = this.props.route.params;
        const { categories } = this.state;
        return (
            // <SafeAreaView style={styles.container}>
            //     { user.isAdmin
            //     ?  <View style={styles.content}>
            //             <Text style={styles.greeting}>Hello admin <Text style={{fontWeight: "700"}}>{user.name}</Text>!</Text>
            //             <View style={styles.taskBlock}>
            //                 <TaskButton func={this.handlePressToSignUp} title="Thêm nhân viên"/>
            //                 <TaskButton func={this.handlePressToList} navigation={navigation} title="Chưa giao" status="chuagiao" tasks={tasks}/>
            //                 <TaskButton func={this.handlePressToList} navigation={navigation} title="Đã giao" status="dagiao" tasks={tasks}/>
            //                 <TaskButton func={this.handlePressToList} navigation={navigation} title="Đã hoàn thành" status="dahoanthanh" tasks={tasks}/> 
            //             </View>
            //         </View>
                            
            //     :   <View style={styles.content}>
            //             <Text style={styles.greeting}>Hello {user.name}!</Text>
            //             <TaskButton func={this.handlePressToTasks} navigation={navigation} title="Việc được giao" user={user} tasks={tasks}/>
            //         </View>
            //     }
            // </SafeAreaView>
            <BackgroundImage>
                {
                    user.isAdmin ? 
                    <View style={{paddingTop: 15}}>
                        <Text style={styles.greeting}>Hello admin <Text style={{fontWeight: "700"}}>{user.name}</Text>!</Text>
                        <TouchableOpacity onPress={this.handlePressToSignUp} style={styles.container_img}>
                            <Image style={styles.img} source={{uri: 'https://image.flaticon.com/icons/png/128/2521/2521784.png'}} />
                        </TouchableOpacity>
                        <FlatList 
                            data={categories}
                            renderItem={({ item }) =>
                                <View style={{ marginBottom: 16 }}>
                                    <TaskButton info={item} />
                                </View>
                            }
                            keyExtractor={(item) => `${item.id}`}
                            contentContainerStyle={{paddingHorizontal: 32, paddingTop: 8}}
                        />
                    </View> :
                    <View>
                        <Text>Staff</Text>
                    </View>
                }
            </BackgroundImage>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: `90%`,
    },
    content: {
        flex: 1,
        alignItems: "center"
    },
    greeting: {
        fontSize: 20,
        paddingTop: 20,
        textAlign: 'center'
    },
    img: {
        height: 32, 
        width: 32
    }
})