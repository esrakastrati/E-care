import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { Card, Avatar } from 'react-native-paper';
import moment from 'moment';
import AddTaskButton from '../components/AddTaskButton'
import NewTask from '../components/NewTask'
import NewMessage from '../components/NewMessageButton'



const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
};

const Schedule: React.FC = () => {

    let itemsi = {
        '2021-05-22': [{ name: 'Meeting with my son', notes: "Going to the restaurant that I like", height: 80, startTime: "12:00", endTime: "13:00" }],

        '2021-05-23': [{ name: 'Doctor Appoitment', notes: "", height: 80, startTime: "11:00", endTime: "12:00" }],
        '2021-05-24': [{ name: 'Football', notes: "", height: 80, startTime: "16:00", endTime: "20:00" }],
        '2021-05-25': [],
        '2021-05-26': [],
        '2021-05-27': [],
        '2021-05-28': [],

        '2021-05-29': [{ name: 'Free day', notes: "", }, { name: 'any js object', notes: "", }],
        '2021-05-30': [{ name: 'any js object', notes: "", }]


    }











    const [items, setItems] = useState({});
    let [state, setState] = useState(itemsi);







    const [task, setTask] = useState(0);



    const taskButton = () => {
        setTask(1);
        console.log(task);


    }





    const renderItem = (state, Hours) => {

        return (
            state ?
                <TouchableOpacity style={{ marginRight: 10, marginTop: 17 }}>
                    <Card>
                        <Card.Content>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    height: 150
                                }}>

                                <View style={{ flexDirection: "column", alignContent: "space-between" }}>
                                    <Text style={{ marginBottom: 5 }}>{state.startTime}</Text>
                                    <Text>{state.endTime}</Text>


                                </View>
                                <View style={{ flexDirection: "column" }}>
                                    <Text>{state.name} </Text>
                                    <Text style={{ fontSize: 13, color: "grey", marginTop: 5 }}> {state.notes}</Text>
                                </View>
                                <Avatar.Text label="J" />
                            </View>
                        </Card.Content>
                    </Card>


                </TouchableOpacity>
                :
                <View><Text> Hey </Text></View>


        )

    };






    return (
        <View style={{ flex: 1 }}>


            <Agenda
                items={state}
                selected={'2021-05-22'}
                renderItem={renderItem}
                renderEmptyDay={() => { return (<View />); }}
            />
            <TouchableOpacity onPress={taskButton}>
                <AddTaskButton />
            </TouchableOpacity>


            {task ? <NewTask setTask={setTask} items={itemsi} setState={setState} /> : <View />}


        </View>

    );
};

export default Schedule;