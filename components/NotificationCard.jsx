import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import colors from '../constants/colors';
import Card from './Card';


const NotificationCard = props =>{
    return(
        <View style = {styles.card}>
            <Card style = {styles.iconContainer}>
                <Ionicons color = 'white' name = "ios-send" size = {25}/>
            </Card>
            <View style = {styles.detailsContainer}>
                <Text style = {{color: 'white', opacity: 0.7, fontSize: 17, marginBottom: 5}}>Transfered Money to Merry Bet</Text>
                <Text style = {{color: 'white', opacity: 0.5}}>08:56PM</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderBottomWidth: 1,
        borderColor: "#4848484d",
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 17
    },
    iconContainer:{
        marginRight: 20,
        opacity: 0.4,
        backgroundColor: colors.bgColor,
        height: 55,
        width: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    },
    detailsContainer: {
        justifyContent: 'center',
    }
})  

export default NotificationCard;