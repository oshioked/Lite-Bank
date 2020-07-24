import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../constants/colors';
import {PieChart, ProgressChart, LineChart} from 'react-native-chart-kit';
import Card from '../components/Card';
import { ScrollView } from 'react-native-gesture-handler';

const savingsData = {
    labels: ['Jan', "Feb", "Mar", "Apr", "May", "Jun", "Jul", 'Aug'],
    datasets: [{
        data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
        ]
    }]
}

const expenditureData = [
    {
      name: "Shopping",
      population: 21500000,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 13
    },
    {
      name: "Education",
      population: 2800000,
      color: "#dc452d",
      legendFontColor: "#7F7F7F",
      legendFontSize: 13
    },
    {
      name: "Food",
      population: 527612,
      color: "green",
      legendFontColor: "#7F7F7F",
      legendFontSize: 13,
    },
    {
      name: "Women",
      population: 20538000,
      color: "rgba(0, 0, 0, .8)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 13
    },
    {
      name: "Others",
      population: 11920000,
      color: "#9D60D5",
      legendFontColor: "#7F7F7F",
      legendFontSize: 13
    }
  ];



  const progressData = {
    labels: ["Car", "Rent", "Paris"],
    data: [0.4, 0.8, 0.6],
      
  }

const StatsScreen = props =>{

    return(
        <LinearGradient colors = {[colors.bgColor, '#1B1B23']} style = {styles.screen}>
            <ScrollView style = {{paddingHorizontal: 20}}>
            <View style = {styles.chartContainer}>
                <Text style = {styles.chartTitle}>Savings</Text>
                <Card style = {styles.chartCard}>  
                    <LineChart
                        data = {savingsData}
                        width = {Dimensions.get('window').width - 40}
                        height = {250}
                        withVerticalLines = {false}
                        yAxisLabel = '$'
                        bezier
                        withDots = {false}
                        chartConfig = {{
                            backgroundColor: colors.bgColor,
                            backgroundGradientFrom: colors.bgColor,
                            backgroundGradientFromOpacity: 1,
                            backgroundGradientTo: colors.bgColor,
                            backgroundGradientToOpacity: 1,
                            fillShadowGradient: '#9D60D5',
                            fillShadowGradientOpacity: 0.5,
                            color: (opacity = 1) => '#9D60D5',
                            
                        }}
                        
                    />
                </Card>
            </View>
            <View style = {styles.chartContainer}>
                <Text style = {styles.chartTitle}>Expenditures</Text>
                <Card style = {styles.chartCard}>
                <PieChart
                    data={expenditureData}
                    width={Dimensions.get('window').width - 40}
                    height={220}
                    chartConfig={{
                        color: (opacity = 1) => '#9D60D5',
                    }}
                    accessor="population"
                    backgroundColor="transparent"
                    paddingLeft="10"
                    absolute = {false}
                />
                </Card>
            </View>
            <View style = {styles.chartContainer}>
                <Text style = {styles.chartTitle}>Goals</Text>
                <Card style = {styles.chartCard}>
                    <ProgressChart
                        data={progressData}
                        width={Dimensions.get('window').width - 40}
                        height={220}
                        strokeWidth = {13}
                        hideLegend = {false}
                        radius = {32}
                        chartConfig={{
                            backgroundGradientFromOpacity: 0,
                            backgroundGradientToOpacity: 0,
                            color: (opacity = 0.1) => `rgba(157, 96, 213, ${opacity})`,
                            labelColor: (opacity = 1) => `#7F7F7F`,
                            
                            
                            propsForLabels:{
                                fontSize: 11
                            },
                          }}
                    />
                </Card>
            </View>
            </ScrollView>
        </LinearGradient>
    )
}

StatsScreen.navigationOptions = navData =>{
    return({
        headerTitle: 'Statistics'
    })
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    chartContainer: {
        marginVertical: 20,
        
    },
    chartTitle: {
        marginLeft: 7, 
        color: 'white', 
        fontSize: 16, 
        opacity: 0.5, 
        fontWeight: '600'
    },
    chartCard: {
        marginVertical: 10,
        overflow: 'hidden'
    }

})

export default StatsScreen;