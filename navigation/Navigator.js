import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import FirstAuthScreen from '../screens/Auth/FirstAuthScreen';
import SecondAuthScreen from '../screens/Auth/SecondAuthScreen';

const AuthNavigator = createSwitchNavigator({
    FirstAuth: FirstAuthScreen,
    SecondAuth: SecondAuthScreen
})

const TabNavigator = createBottomTabNavigator({
    Home: HomeScreen
})

const MainNavigator = createSwitchNavigator({
    Auth: AuthNavigator,
    Main: TabNavigator
})

export default createAppContainer(MainNavigator);