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
                <Text style = {{color: 'white', opacity: 0.7, fontSize: 18, fontWeight: '600', marginBottom: 5}}>Transfered Money to Merry Bet</Text>
                <Text style = {{color: 'white', opacity: 0.5}}>08:56PM</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderBottomWidth: 1,
        borderColor: '#3a3a3a',
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    iconContainer:{
        marginRight: 20,
        opacity: 0.7,
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