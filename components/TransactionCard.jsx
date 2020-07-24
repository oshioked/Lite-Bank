import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import Card from './Card';

const TransactionCard = props =>{
    return(
        
        <Card style = {{...styles.transactCard, ...props.style}}>
            <TouchableOpacity onPress = {props.onPress} style = {styles.contentContainer}>
                <Ionicons name = {props.iconName} size = {24} color = '#9D60D5'/>
                <Text numberOfLines = {1} style = {{color: 'white', width: '65%', textAlign: 'left', opacity: 0.6}}>{props.transactionName}</Text>
            </TouchableOpacity>
        </Card>
    )
}

const styles = StyleSheet.create({
    transactCard:{
        marginVertical: 10,
        elevation: 0,
        shadowOpacity: 0,
    },
    contentContainer:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 15,
        paddingVertical: 12,
    }
})

export default TransactionCard;