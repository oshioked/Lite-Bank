import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native';
import AccountCard from '../../components/AccountCard';
import { LinearGradient } from 'expo-linear-gradient';
import TransactionCard from '../../components/TransactionCard';
import NewsCard from '../../components/NewsCard';
import colors from '../../constants/colors';

const HomeScreen = props =>{
    const onSendPress = () =>{
        props.navigation.navigate('Send')
    }
    return(
        <LinearGradient colors = {[colors.bgColor, '#1B1B23']} style = {{flex: 1}}>
            <SafeAreaView style = {{flex: 1}}>
            
                <ScrollView>
                <View style = {{flex: 1}}>
                <View style = {styles.topSection}>
                    <LinearGradient colors = {[colors.bgColor, '#1B1B23']} style = {styles.topSectionContent}>
                        <View style = {styles.profileInfoContainer}>
                            <View >
                                <Text style = {{color: 'white', opacity: 0.7, fontSize: 16}}>Good Morning,</Text>
                                <Text style = {{color: 'white', opacity: 0.8, fontSize: 20, fontWeight: '600'}}>Iyogwoya Daniel Oshioke</Text>
                            </View>
                            <View style = {styles.profileImgContainer}>
                                <Image resizeMode = 'contain' style = {styles.profileImg} source = {require('../../assets/images/profileImage.png')}/>
                            </View>
                        </View>
                        <Text style = {styles.accountTitle}>MY ACCOUNTS</Text>
                        <View style = {styles.accountCardContainer}>
                                <AccountCard style = {styles.accountCard}/>
                        </View>
                    </LinearGradient>
                </View>
                <View style = {styles.transactionSection}>
                    <Text style = {{...styles.accountTitle, marginLeft: 0}}>Quick Transaction</Text>
                    <View style = {styles.transactionCardsContainer}>
                        <TransactionCard onPress = {onSendPress} style = {styles.tranCard} iconName = "ios-paper-plane" transactionName = "Send Money"/>
                        <TransactionCard style = {styles.tranCard} iconName = "ios-phone-portrait" transactionName = "Buy Airtime"/>
                        <TransactionCard style = {styles.tranCard} iconName = "ios-paper" transactionName = "Pay Bill"/>
                        <TransactionCard style = {styles.tranCard} iconName = "ios-wallet" transactionName = "Split Payment"/>
                        <TransactionCard style = {styles.tranCard} iconName = "logo-bitcoin" transactionName = "Buy Crypto"/>
                        <TransactionCard style = {styles.tranCard} iconName = "ios-car" transactionName = "Xpress Cash"/>
                    </View>
                </View>
                <View style = {styles.newSection}>
                    <Text style = {{...styles.accountTitle, marginLeft: 0}}>NEWS</Text>
                    <NewsCard style = {styles.newsCard}/>
                </View>
                </View>
                </ScrollView>
            </SafeAreaView>    
        </LinearGradient>
        
    )
}

HomeScreen.navigationOptions = (navData)=>{
    return({
        headerShown: false
    })
}

const styles = StyleSheet.create({
    topSection: {
    },
    topSectionContent: {
        overflow:'visible'
    },
    profileInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#4E4F57',
        marginHorizontal: 20,
        paddingVertical: 20
    },
    profileImgContainer:{
        height: 80,
        width: 80,
        borderRadius: 40,
        overflow: 'hidden'
    },
    profileImg:{
        height: 80,
        width: '100%',
    },
    accountTitle:{
        color: 'white', 
        opacity: 0.4, 
        marginHorizontal: 20, 
        marginTop: 20, 
        fontSize: 13,
        marginBottom: 7
    },
    accountCardContainer:{
        width: '100%',
        height: 75,
        paddingHorizontal: 30,
        marginTop: 10,
        alignItems: 'center',
    },
    accountCard: {
        height: 150,
        position: 'relative',
        top: 0
    },
    transactionSection: {
        marginTop: 80,
       marginHorizontal: 20,
    },

    transactionCardsContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    tranCard: {
        width: '47.5%',
    },
    newSection:{
        marginHorizontal: 20,
        marginBottom: 30
    }
})

export default HomeScreen;