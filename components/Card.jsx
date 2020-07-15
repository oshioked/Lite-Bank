import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Card = props =>{
    return(
        <View style = {{...styles.card, ...props.style}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        shadowOpacity: 0.2,
        borderRadius: 10,
        elevation: 5,
    }
})

export default Card;