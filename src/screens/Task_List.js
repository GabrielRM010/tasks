import React, {Component} from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";

import today_Image from '../../assets/imgs/today.jpg'
import Task from "../../components/Task"

export default class Task_List extends Component{
    render(){
        const today = moment().Locale('pt-br').format('ddd, DD [de] MMM [de] YYYY')
        return(
        <View style={styles.container} source={styles.background}>
            <ImageBackground source={today_Image}  style={styles.background}>
                <View style={styles.titleBar}>
                    <Text style={styles.title}>Hoje</Text>
                    <Text style={styles.subtitle}>(today)</Text>
                </View>
            </ImageBackground>
            <View style={styles.taskList}>
                <Task description="Estudo para a prova do Hererman" 
                estimate_at={new Date()}
                 done_at={new Date()}/>
                <Task description="Fazer prova do Hererman"
                 estimate_at={new Date()} 
                 done_at={null}/>
                <Task/>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    background:{
        flex: 3
    },
    taskList:{
        flex: 7
    },
    titleBar:{
        flex: 1,
        justifyContent: 'flex-end',
    },
    title:{
        fontFamily: 'Arial',
        fontSize: 50,
        color: '#fff',
        marginLeft: 20,
        marginBottom: 20
    },
    subtitle:{
        fontFamily: 'Arial',
        fontSize: 20,
        color: '#fff',
        marginLeft: 20,
        marginBottom: 30
    }
})