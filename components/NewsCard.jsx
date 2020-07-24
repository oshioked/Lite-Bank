import React from 'react';
import { View, StyleSheet, Text, ImageBackground, Image } from 'react-native';
import ImageDarkener from './ImageDarkener';
import { LinearGradient } from 'expo-linear-gradient';
import Card from './Card';

const NewsCard = props =>{
    return(
        <Card style = {{...styles.card, ...props.style}}>
            <View style = {styles.imageContainer}>
                <Image resizeMode = "cover" style = {styles.image} source = {{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTuKUOl5Fn1sYromGemj_Jt4trvb9U0Bmad0Q&usqp=CAU'}}/>
                <ImageDarkener opacity = {0.5}/>
            </View>
            <View style = {styles.newDetails}>
                <Text style = {styles.newHeadline}>Cryptocurrencies wallet coming soon for premium account owners</Text>
                <View style = {styles.button}>
                    <LinearGradient colors = {['#965197', '#7562EB']} style = {styles.buttonContent}>
                        <Text style = {{color: 'white'}}>Learn More</Text>
                    </LinearGradient>
                </View>
            </View>
            
        </Card>
    )
}

const styles = StyleSheet.create({
    card:{
        width: '100%',
        height: 250,
        overflow: 'hidden',
    },
    imageContainer:{
        width: '100%', 
        height: '75%',
        borderRadius: 10,
        overflow: "hidden"
    },
    image: {
        width: '100%',
        height: '100%',
    },
    newDetails: {
        height: '25%',
        justifyContent: "space-between",
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 15,
    },
    newHeadline: {
        color: 'white',
        opacity: 0.8,
        width: '75%'
    },
    button:{
        borderRadius: 7,
        overflow: 'hidden',
        top: -32
    },
    buttonContent: {
        paddingHorizontal: 5,
        paddingVertical: 7
    }
})

export default NewsCard;