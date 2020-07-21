import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const CircularButton = props =>{
    return(
        <TouchableOpacity activeOpacity = {0.8} onPress = {props.onPress}>
            <View style = {styles.arrowButton}>
                <LinearGradient colors = {['#965197', '#7562EB']} style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Ionicons name = {props.iconName? props.iconName : 'md-arrow-forward'} color = "white" size = {29} />
                </LinearGradient>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    arrowButton: {
        height: 66,
        width: 66,
        borderRadius: 39,
        overflow: 'hidden',
    },
})

export default CircularButton;