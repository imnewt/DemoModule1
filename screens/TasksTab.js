import React from "react"
import AsyncStorage from "@react-native-community/async-storage"
import TabMainScreen from "../components/TabMainScreen"

const icons = [
    {
        name: "ios-watch",
        title: "Undone",
        route: "TaskList"
    },
    {
        name: "ios-sync",
        title: "Doing",
        route: "TaskList"
    },
    {
        name: "ios-checkbox-outline",
        title: "Done",
        route: "TaskList",
        isLast: true
    }
]

export default class TasksTab extends React.Component {
    state = {
        user: {}
    }

    getData = async () => {
        const data = await AsyncStorage.getItem("user");
        // console.log(typeof JSON.parse(data));
        await this.setState({user: JSON.parse(data)})
    }

    componentDidMount() {
        this.getData()
    }

    handlePressToList = (tasks, status, route, user) => {
        const { navigation } = this.props;
        var filteredList = [];
        var result = []
        if(user.isAdmin)   
            result  = tasks
        else
            result = tasks.filter(item => item.handle === "Truc")
        if (status === "undone") {
            filteredList = result.filter(item => item.status === "undone")
        }
        else if (status === "doing") {
            filteredList = result.filter(item => item.status === "doing")
        }
        else {
            filteredList = result.filter(item => item.status === "done")
        }
        navigation.navigate(route, {tasks: filteredList});
    }

    render() {
        const { user } = this.state
        return(
            <TabMainScreen title="Your tasks" icons={icons} user={user}  func={this.handlePressToList}/>
        )
    }
    
}