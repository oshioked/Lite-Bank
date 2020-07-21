import React from 'react'
import { View, StyleSheet, Text, FlatList, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../../constants/colors';
import RecieverCard from '../../components/RecieverCard';
import HistoryCard from '../../components/HistoryCard';




const SendMoneyScreen = props =>{

    const onSendClick = () =>{
        props.navigation.navigate("RecieverDetails")
    }
    return(
        <LinearGradient colors = {[colors.bgColor, '#1B1B23']} style = {{flex: 1}}>
            <ScrollView style = {{flex: 1}}>
                <View style = {styles.balanceContainer}>
                    <Text style = {styles.availableText}>Available</Text>
                    <Text style = {styles.balanceText}>$233.34</Text>
                </View>
                <View style = {styles.contactSection}>
                    <Text style = {{color: 'white', opacity: 0.5, fontSize: 15, fontWeight: '500', marginBottom: 10}}>Send money to</Text>
                    <ScrollView horizontal = {true}>
                        <RecieverCard onPress = {onSendClick} addContact title = "New contact" />
                        <RecieverCard title = "Morenikeji Ayo" />
                        <RecieverCard title = "Noble Junior" />
                        <RecieverCard title = "Bolanle Baby"/>
                    </ScrollView>
                </View>
                <View style = {styles.contactSection}>
                    <Text style = {{color: 'white', opacity: 0.5, fontSize: 15, fontWeight: '500', marginBottom: 10}}>Last transactions</Text>
                    <View >
                        <HistoryCard/>
                        <HistoryCard/>
                        <HistoryCard/>
                        <HistoryCard/>
                        <HistoryCard/>
                        <HistoryCard/>
                        <HistoryCard/>
                        <HistoryCard/>
                    </View>
                </View>
            </ScrollView>
        </LinearGradient>
    )
}

SendMoneyScreen.navigationOptions = navData =>{
    return({
        headerTitle: "Send Money"
    })
}

const styles = StyleSheet.create({
    balanceContainer: {
        paddingTop: 20,
        paddingBottom: 50,
        width: '100%',
        alignItems: 'center'
    },
    availableText: {
        color: 'white',
        opacity: 0.5,
        fontSize: 15,
    },
    balanceText: {
        color: 'white',
        fontWeight: '500',
        opacity: 0.85,
        marginVertical: 7,
        fontSize: 45
    },
    contactSection:{
        paddingHorizontal: 20,
        marginBottom: 40
    }
})

export default SendMoneyScreen;