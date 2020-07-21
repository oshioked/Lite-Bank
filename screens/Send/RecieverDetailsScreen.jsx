import React from 'react';
import { View, StyleSheet, Text, ScrollView, TextInput} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../../constants/colors';
import { useState } from 'react';
import Card from '../../components/Card';
import FormContainer from '../../components/FormContainer';
import AuthFormInput from '../../components/AuthFormInput';

const RecieverDetailsScreen = props =>{
    const [amount, setAmount] = useState('233.34');

    const textChangeHandler = (text) =>{
        if(isNaN(text))return;
        console.log(!(text.length))
        if(!text.length){
            console.log(text)
            setAmount('00');
            return;
        }
        setAmount(text)
    }

    const onProceed = () =>{
        props.navigation.navigate('ConfirmDetails')
    }

    return(
        <LinearGradient colors = {[colors.bgColor, '#1B1B23']} style = {styles.screen}>
            <ScrollView style = {{flex: 1}}>
                <View style = {styles.balanceContainer}>
                    <Text style = {styles.labelText}>Enter Amount</Text>
                    <View style = {styles.amountContainer}>
                    <Text style = {styles.amountText} >$</Text>                        
                    <TextInput 
                        style = {{...styles.amountText, ...styles.amountInput}} 
                        value = {amount} 
                        onChangeText = {textChangeHandler}
                        keyboardType = "numeric"
                    />                        
                    </View>
                </View>
                <FormContainer onSubmit = {onProceed}>
                <AuthFormInput
                    placeholder = "Bank Name"
                />
                <AuthFormInput
                    placeholder = "Account Number"
                />
                <AuthFormInput
                    placeholder = "Account Name"
                />
                <AuthFormInput
                    placeholder = "Description"
                />
                </FormContainer>
            </ScrollView>
        </LinearGradient>
    )
}

RecieverDetailsScreen.navigationOptions = navData =>{
    return({
        headerTitle: "Enter Details"
    })
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        paddingHorizontal: 20,
    },
    balanceContainer: {
        paddingTop: 20,
        paddingBottom: 20,
        width: '100%',
        alignItems: 'center'
    },
    labelText: {
        color: 'white',
        opacity: 0.5,
        fontSize: 15,
    },
    amountContainer:{
        flexDirection: 'row'
    },
    amountText: {
        color: 'white',
        fontWeight: '500',
        opacity: 0.85,
        marginVertical: 7,
        fontSize: 45
    },
    amountInput:{
        minWidth: 100,
        borderBottomWidth: 1,
    }
})

export default RecieverDetailsScreen;