import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../constants/colors';
import Card from './Card';
import CircularButton from './CircularButton';

const FormContainer = props =>{
    return(
        <Card style = {{...styles.formContainer, ...props.style}}>
            {props.children}
            <View style = {styles.arrowButtonContainer}>
                <CircularButton onPress = {props.onSubmit} iconName = {props.buttonIconName}/>
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
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
 
})

export default FormContainer;