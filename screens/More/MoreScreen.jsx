import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../../constants/colors';
import { HeaderTitle } from 'react-navigation-stack';
import {Ionicons} from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const OptionSet = props =>{
    return(
    <TouchableOpacity activeOpacity={0.8} onPress = {props.onPress}>
        <View style = {styles.optionSet}>
            
            <View >
                <Ionicons name = {props.iconName} style = {{opacity: 0.8}}  size = {26} color = 'white'/>
            </View>
            <Text style = {{color: 'white', opacity: 0.7, marginRight: 'auto', marginLeft: 40, fontSize: 15}}>
                {props.title}
            </Text>
            <Ionicons name = "ios-arrow-forward" size = {24} color = "#585858"/>
        </View>
    </TouchableOpacity>
    )
}
const MoreScreen = props =>{
    return(
        <LinearGradient colors = {[colors.bgColor, '#1B1B23']} style = {styles.screen}>
            <ScrollView>
                <View>
                    <OptionSet iconName = "ios-lock" title = "Security Settings"/>
                    <OptionSet iconName = "ios-people" title = "Manage Beneficiaries"/>
                    <OptionSet iconName = "ios-cash" title = "Loans and Interest"/>
                    <OptionSet iconName = "ios-pin" title = "Find our Nearest Offices"/>
                    <OptionSet iconName = "ios-information-circle-outline" title = "Contact Us"/>
                    <OptionSet iconName = "ios-person-add" title = "Invite Friends"/>
                    <OptionSet iconName = "ios-exit" title = "Log out"/>
                </View>                
            </ScrollView>

        </LinearGradient>
    )
}

MoreScreen.navigationOptions = navData =>{
    return({
        HeaderTitle: "More Options"
    })
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: 20
    },
    optionSet:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: "#4848484d",
        paddingVertical: 20,
        paddingHorizontal: 20
    }
})

export default MoreScreen;