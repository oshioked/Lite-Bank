import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import AuthFormInput from '../components/AuthFormInput';
const LoginForm = () =>{
    return(
        <View>
            <AuthFormInput
                placeholder = "Email Address"
            />
            <AuthFormInput
                placeholder = "Password"
            />
            <TouchableWithoutFeedback>
                <Text style = {styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({

    forgotPasswordText: {
        marginVertical: 5,
        color: 'white',
        opacity: 0.7,
        fontSize: 15,
        fontWeight: '500'
    }
})

export default LoginForm;