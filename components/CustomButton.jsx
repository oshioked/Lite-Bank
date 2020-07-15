import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
  
const CustomButton = props =>{
    return(
        <View style = {{...styles.buttonContainer, ...props.style}}>
            <TouchableOpacity>
                <Text>
                    {props.children}
                </Text>
            </TouchableOpacity>            
        </View>

    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        height: 40,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 15
    }
})

export default CustomButton;