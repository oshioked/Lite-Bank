import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import Card from './Card';

const TransactionCard = props =>{
    return(
        <Card style = {{...styles.transactCard, ...props.style}}>
            <Ionicons name = {props.iconName} size = {24} color = '#9D60D5'/>
            <Text style = {{color: 'white', width: '65%', textAlign: 'left', opacity: 0.6}}>{props.transactionName}</Text>
        </Card>
    )
}

const styles = StyleSheet.create({
    transactCard:{
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 12,
        marginVertical: 10,
        elevation: 0,
        shadowOpacity: 0,

    }
})

export default TransactionCard;