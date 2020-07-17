import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const ImageDarkener = props =>{
    return(
    <View style = {{...styles.imageDarkener, opacity: (props.opacity) ? props.opacity : 0.3, ...props.style}}/>        
    )
}

   
   


const styles = StyleSheet.create({
    imageDarkener: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'black'
    }
})

export default ImageDarkener;