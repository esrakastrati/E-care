import React from 'react';
import {
    Text,
    Image,
    View,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    TextInput,
    Keyboard,
    Switch,
    StyleSheet,
    Alert,
    Button
} from 'react-native'; import { useState } from 'react'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import AppButton from '../components/AppButton'





export default function NewTask({ setTask, items, setState }) {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const alarmTime = moment().format();
    const [dateKey, setDate] = useState();


    const formatter = new Intl.DateTimeFormat('mg', {
        year: 'numeric', month: 'numeric', day: 'numeric'

    });


    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const timeToString = (time) => {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked:sdvsdv ", timeToString(date));
        setDate(timeToString(date));
        hideDatePicker();
    };

    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const handleConfirmTime = (time) => {
        hideTimePicker();
    };

    const [name, setName] = useState();


    const AddTask = () => {
        let newDate = [{ name: name, height: 80, startTime: "12:00", endTime: "13:00" }]


        setState({ ...items, [`${dateKey}`]: newDate })


        console.warn('2021-05-29');


        setTask(0);







    }

    return (
        <View style={styles.container}>



            <View style={styles.container}>



                <Text style={styles.newTask}>New Task</Text>
            </View>

            <View style={styles.taskContainer}>
                <TextInput
                    style={styles.title}
                    placeholder="What do you need to do?"
                    onChangeText={setName}

                />
                <Text
                    style={{
                        fontSize: 14,
                        color: '#BDC6D8',
                        marginVertical: 10,
                    }}
                >
                    Suggestion
                    </Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.readBook}>
                        <Text style={{ textAlign: 'center', fontSize: 14 }}>
                            Read book
                        </Text>
                    </View>
                    <View style={styles.design}>
                        <Text style={{ textAlign: 'center', fontSize: 14 }}>
                            Design
                        </Text>
                    </View>
                    <View style={styles.learn}>
                        <Text style={{ textAlign: 'center', fontSize: 14 }}>
                            Learn
                        </Text>
                    </View>
                </View>
                <View style={styles.notesContent} />
                <View>
                    <Text style={styles.notes}>Notes</Text>
                    <TextInput
                        style={{
                            height: 25,
                            fontSize: 19,
                            marginTop: 3,
                        }}

                        placeholder="Enter notes about the task."

                    />
                </View>

                <View style={styles.seperator} />
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <View>
                        <Text
                            style={{
                                color: '#9CAAC4',
                                fontSize: 16,
                                fontWeight: '600',
                            }}
                        >
                            Pick a Date

                        </Text>

                        <TouchableOpacity onPress={showDatePicker}>

                            <FontAwesome style={{ alignSelf: "center", marginTop: 10 }} name="calendar" size={30} color="black" />
                        </TouchableOpacity>


                    </View>

                    <View>
                        <Text
                            style={{
                                color: '#9CAAC4',
                                fontSize: 16,
                                fontWeight: '600',
                            }}
                        >
                            Pick a Time

                        </Text>

                        <TouchableOpacity onPress={showTimePicker}>

                            <FontAwesome5 style={{ alignSelf: "center", marginTop: 10 }} name="clock" size={30} color="black" />
                        </TouchableOpacity>

                    </View>



                </View>
                <View style={styles.seperator} />

                <View style={{ marginTop: 100, marginLeft: 50 }} >
                    <AppButton title="Add YOUR TASK" onPress={AddTask} />
                </View>

            </View>

            <Text
                style={{
                    fontSize: 18,
                    textAlign: 'center',
                    color: '#fff',
                }}
            >
                <View >
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />





                </View>

                <View>
                    <DateTimePickerModal
                        isVisible={isTimePickerVisible}
                        mode="time"
                        onConfirm={handleConfirmTime}
                        onCancel={hideTimePicker}
                    />
                </View>
            </Text>




        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        flex: 1,
        padding: 10,
        position: "absolute",
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20,
    },
    datePickerStyle: {
        width: 200,
        marginTop: 20,
    },
    createTaskButton: {
        width: 252,
        height: 48,
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 5,
        justifyContent: 'center',
    },
    seperator: {
        height: 0.5,
        width: '100%',
        backgroundColor: '#979797',
        alignSelf: 'center',
        marginVertical: 20,
    },
    notes: {
        color: '#9CAAC4',
        fontSize: 16,
        fontWeight: '600',
    },
    notesContent: {
        height: 0.5,
        width: '100%',
        backgroundColor: '#979797',
        alignSelf: 'center',
        marginVertical: 20,
    },
    learn: {
        height: 23,
        width: 51,
        backgroundColor: '#F8D557',
        justifyContent: 'center',
        borderRadius: 5,
    },
    design: {
        height: 23,
        width: 59,
        backgroundColor: '#62CCFB',
        justifyContent: 'center',
        borderRadius: 5,
        marginRight: 7,
    },
    readBook: {
        height: 23,
        width: 83,
        backgroundColor: '#4CD565',
        justifyContent: 'center',
        borderRadius: 5,
        marginRight: 7,
    },

    taskContainer: {
        height: 600,
        width: 327,
        alignSelf: 'center',
        borderRadius: 20,
        shadowColor: '#2E66E7',
        backgroundColor: '#ffffff',
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowRadius: 20,
        shadowOpacity: 0.2,
        elevation: 5,
        padding: 22,
    },
    calenderContainer: {
        marginTop: 30,
        width: 350,
        height: 350,
        alignSelf: 'center',
    },
    newTask: {
        alignSelf: 'center',
        fontSize: 20,
        width: 120,
        height: 25,
        textAlign: 'center',
    },
    backButton: {
        flexDirection: 'row',
        marginTop: 60,
        width: '100%',
        alignItems: 'center',
    },


})
