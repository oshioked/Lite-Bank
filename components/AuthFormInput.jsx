import React, { useRef, useEffect } from 'react';
import {View, StyleSheet, TextInput } from 'react-native';

const AuthFormInput = (props) =>{

    return(
        <View style = {styles.container}>
            <TextInput 
                style = {styles.textInput}
                placeholder = {props.placeholder}
                placeholderTextColor = '#8B8B98'
            />
           
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        marginVertical: 13

    },
    textInput: {
        backgroundColor: '#2C2C37',
        paddingVertical: 14, 
        paddingHorizontal: 10,
        borderRadius: 10,
        color: 'white',
        fontSize: 15
    }
})

export default AuthFormInput;