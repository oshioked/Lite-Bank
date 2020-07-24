import React from 'react';
import { View, StyleSheet, StatusBar, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../../constants/colors';
import CircularButton from '../../components/CircularButton';

const ConfirmDetailsScreen = props =>{
    return(
        <LinearGradient colors = {[colors.bgColor, '#1B1B23']} style = {styles.screen}>
            <View>
                <Text style = {{fontWeight: '600', color: 'white', fontSize: 20, opacity: 0.7}}>Status</Text>
                <View style = {styles.section}>
                    <Text style = {styles.propertyText}>Total amount</Text>
                    <Text style = {styles.valueText}>$ 450</Text>
                </View>
                <View  style = {styles.section}>
                    <Text style = {styles.propertyText}>You Sent</Text>
                    <Text style = {styles.valueText}>$ 445</Text>
                </View>
                <View style = {styles.section}>
                    <Text style = {styles.propertyText}>Transfer charge</Text>
                    <Text style = {styles.valueText}>$ 5</Text>
                </View>
            </View>
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
        paddingHorizontal: 20,
        paddingTop: 35
    },
    section: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 30,
        borderBottomWidth: 1,
        borderColor: '#f8f9fa36'
    },
    buttonContainer: {
        marginTop: 'auto',
        width: '100%',
        alignItems: 'center',
        marginBottom: 20
    },
    propertyText:{
        color: 'white',
        opacity: 0.5,
        fontSize: 18,
        fontWeight: '600'
    },
    valueText:{
        color: 'white',
        opacity: 0.3,
        fontSize: 16,
        fontWeight: '600'
    }
})

export default ConfirmDetailsScreen;