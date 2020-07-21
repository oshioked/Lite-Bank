import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../../constants/colors';
import CircularButton from '../../components/CircularButton';

const ConfirmDetailsScreen = props =>{
    return(
        <LinearGradient colors = {[colors.bgColor, '#1B1B23']} style = {styles.screen}>
            
            <View style = {styles.buttonContainer}>
                <CircularButton/>
            </View>
        </LinearGradient>
    )
}

ConfirmDetailsScreen.navigationOptions = navData =>{
    return({
        headerTitle: 'Confirm Details'
    })
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    buttonContainer: {
        marginTop: 'auto',
        width: '100%',
        alignItems: 'center',
        marginBottom: 20
    }
})

export default ConfirmDetailsScreen;