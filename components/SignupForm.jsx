import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import AuthFormInput from '../components/AuthFormInput';


const SignupForm = () =>{
    return(
        <View>
            <AuthFormInput
                placeholder = "Name"
            />
            <AuthFormInput
                placeholder = "Phone Number"
            />
            <AuthFormInput
                placeholder = "Email Address"
            />
            <AuthFormInput
                placeholder = "Password"
            />
            <AuthFormInput
                placeholder = "Confirm Password"
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default SignupForm;