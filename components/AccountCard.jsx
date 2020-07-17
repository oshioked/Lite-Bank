import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Card from './Card';

const AccountCard = props =>{
    return(
        <Card style = {{...styles.card, ...props.style}}>
            <View style = {styles.cardContent}>
                <View style = {styles.accDetails}>
                    <Text style = {{color: 'white', fontSize: 17, opacity: 0.9, fontWeight: '500', marginBottom: 7}}>Savings Account</Text>
                    <Text style = {{color: 'white', fontSize: 15, opacity: 0.6}}>2493005529</Text>
                </View>
                <TouchableOpacity activeOpacity = {0.3}>
                    <View style = {styles.balanceBtn}>
                        <Text style = {{color: 'white', opacity: 0.7,}}>Show my balance</Text>                        
                    </View>
                </TouchableOpacity>
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        borderRadius: 10,
        overflow: 'hidden'
    },
    cardContent:{
        width: '100%',
        height: '100%',
        padding: 15,
        justifyContent: 'space-between',
    },
    accDetails:{
    },
    balanceBtn:{
        borderWidth: 1.5,
        borderColor: 'white',
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 5
    }
})

export default AccountCard;