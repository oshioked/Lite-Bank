import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../../constants/colors';
import NotificationCard from '../../components/NotificationCard';

const NotificationScreen = props =>{
    return(

        <LinearGradient colors = {[colors.bgColor, '#1B1B23']} style = {{flex: 1}}>
            <ScrollView style = {{flex: 1}}>
                <View>
                    <Text style = {styles.date}>12 Nov 2018</Text>
                    <View>
                        <NotificationCard/>
                        <NotificationCard/>
                        <NotificationCard/>
                        <NotificationCard/>
                        <NotificationCard/>
                    </View>
                </View>
            </ScrollView>            
        </LinearGradient>

    )
}

const styles = StyleSheet.create({
    date: {
        color: 'white',
        fontSize: 17,
        opacity: 0.3,
        marginLeft: 20,
        marginTop: 20
    }
})

export default NotificationScreen;