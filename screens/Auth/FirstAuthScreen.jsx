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

                        <Card style = {styles.formContainer}>
                            <View>{isLogin ? <LoginForm/> : <SignupForm/>}</View>
                            <View style = {styles.arrowButtonContainer}>
                                <TouchableWithoutFeedback onPress = {onAuth}>
                                    <View style = {styles.arrowButton}>
                                        <LinearGradient colors = {['#965197', '#7562EB']} style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                            <Ionicons name = 'md-arrow-forward' color = "white" size = {29} />
                                        </LinearGradient>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </Card>

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
                                    <View >
                                        <Text style = {{color: '#9393A7', marginTop: 40, textAlign: 'center'}}>By signing up, you agree to the <Text style = {{color: '#7562EB'}}>Terms & Conditions</Text> of this app.</Text>
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
        paddingTop: 70,
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
    formContainer: {
        marginTop: 40,
        backgroundColor: colors.bgColor,
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 50,
        width: '100%'
    },
    arrowButtonContainer: {
        position: 'absolute',
        bottom: -33,
        left: 0,
        right: 0,
        height: 66,
        alignItems: 'center'
    },
    arrowButton: {
        height: 66,
        width: 66,
        borderRadius: 39,
        overflow: 'hidden',
    },
    bottomSection: {
        marginTop: 70
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