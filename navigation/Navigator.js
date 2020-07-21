import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import FirstAuthScreen from '../screens/Auth/FirstAuthScreen';
import SecondAuthScreen from '../screens/Auth/SecondAuthScreen';
import SendMoneyScreen from '../screens/Send/SendMoneyScreen';
import colors from '../constants/colors';
import NotificationScreen from '../screens/Notification/NotificationScreen';
import RecieverDetailsScreen from '../screens/Send/RecieverDetailsScreen';
import ConfirmDetailsScreen from '../screens/Send/ConfirmDetailsScreen';

const defaultStackNavOption = {
    headerTintColor: 'white',
    headerStyle: {
        backgroundColor: colors.bgColor,
        shadowOpacity: 0,
        elevation: 0
    },
    headerBackTitleVisible: false
}

const AuthNavigator = createSwitchNavigator({
    FirstAuth: FirstAuthScreen,
    SecondAuth: SecondAuthScreen
})

const HomeNavigator = createStackNavigator({
    Home: HomeScreen,
    Send: SendMoneyScreen,
    RecieverDetails: RecieverDetailsScreen,
    ConfirmDetails: ConfirmDetailsScreen
},{
    defaultNavigationOptions: {
        ...defaultStackNavOption
    }
})

const NotificaitionNavigator = createStackNavigator({
    Notif: NotificationScreen
},{
    defaultNavigationOptions: {
        ...defaultStackNavOption,
        headerTitle: 'Notification'
    }
})

const TabNavigator = createBottomTabNavigator({
    Home: HomeNavigator,
    Notification: NotificaitionNavigator
},{
    tabBarOptions: {
        showLabel: true,
        activeTintColor: '#7562EB',
        tabStyle: {
            height: '100%'
        },
        inactiveTintColor: '#A9A6A6',
        style:{
            backgroundColor: colors.bgColor,
            borderTopWidth: 0,
            maxHeight: 50,
            paddingVertical: 'auto',
            marginTop: 10,
            marginHorizontal: 20,
            shadowOpacity: 0,
            elevation: 0,
            borderRadius: 10,
            alignItems: 'center'
        }
    }
})

const MainNavigator = createSwitchNavigator({
    Auth: AuthNavigator,
    Main: TabNavigator
})

export default createAppContainer(MainNavigator);