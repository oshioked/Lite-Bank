import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableWithoutFeedback, KeyboardAvoidingView, Platform } from 'react-native';
import Card from '../../components/Card';
import colors from '../../constants/colors';
import LoginForm from '../../components/LoginForm';
import { LinearGradient } from 'expo-linear-gradient';
import {Ionicons, EvilIcons} from '@expo/vector-icons'
import SignupForm from '../../components/SignupForm';
import { ScrollView } from 'react-native-gesture-handler';
import CustomButton from '../../components/CustomButton';
import FormContainer from '../../components/FormContainer';

const FirstAuthScreen = props =>{
    const [isLogin, setIsLogin] = useState(true);

    const switchForm = (formName) =>{
        if(formName === 'login'){
            setIsLogin(true);
        }else{
            setIsLogin(false)
        }
    }

    const onAuth = () =>{
        props.navigation.navigate('Main')
    }

    return(
        <SafeAreaView style = {{flex: 1,}}>
            <KeyboardAvoidingView style = {{flex: 1}} behavior = {Platform.OS === 'android' ? null : 'padding'}>
                <ScrollView style = {{flex: 1, width: '100%'}} contentContainerStyle = {{alignItems: 'center'}}>
                    <View style = {styles.screen}>

                        <View style = {styles.formOptions}>
                            <TouchableWithoutFeedback onPress = {() => switchForm('login')}>
                                <Text style = {{...styles.formOptionText, opacity: isLogin ? 1 : 0.3}}>Log in</Text>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress = {() => switchForm('signup')}>
                                <Text style = {{...styles.formOptionText, opacity: isLogin ? 0.3 : 1}}>Sign up</Text>
                            </TouchableWithoutFeedback>                    
                        </View>

                        <FormContainer onSubmit = {onAuth}>
                            <View>{isLogin ? <LoginForm/> : <SignupForm/>}</View>
                        </FormContainer>

                        <View style = {styles.bottomSection}>
                            {
                            isLogin?
                                <>
                                    <Text style = {{color: 'white', opacity: 0.5, textAlign: 'center', fontWeight: '500'}} >Or Sign in with</Text>
                                    <View style = {styles.otherOptionsButtonsContainer}>
                                        <CustomButton style = {styles.otherOptionsButton}>
                                            <EvilIcons  name = "sc-facebook" size = {35} color = '#3b5998'/>
                                        </CustomButton>
                                        <CustomButton  style = {styles.otherOptionsButton}>
                                            <Ionicons  name = "logo-google" size = {24} color = '#de5246'/>
                                        </CustomButton>
                                    </View>
                                </>
                            :
                                <>
                                    <View style = {{flex: 1, flexDirection: 'row'}}>
                                        <Text style = {{color: '#9393A7', alignSelf: 'flex-end', marginBottom: 10, textAlign: 'center'}}>By signing up, you agree to the <Text style = {{color: '#7562EB'}}>Terms & Conditions</Text> of this app.</Text>
                                    </View>
                                </>
                        }</View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        width: '89%',
        paddingTop: '10%',
        alignItems: 'center'
    },
    formOptions: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: '5%',
    },
    formOptionText: {
        color: 'white',
        fontSize: 19,
        fontWeight: '800'
    },
    bottomSection: {
        marginTop: 70,
        flex: 1
    },
    otherOptionsButtonsContainer: {
        // width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        flexDirection: 'row',
    },
    otherOptionsButton:{
        width: '33%',
        backgroundColor: '#18181F',
        marginHorizontal: 15
    }
})

export default FirstAuthScreen;