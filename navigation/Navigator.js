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
import {HomeTabIcon, NotificationTabIcon, MoreTabIcon, StatsTabIcon} from '../components/TabBarIcons'
import MoreScreen from '../screens/More/MoreScreen';
import StatsScreen from '../screens/StatsScreen';

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
    },
    navigationOptions:{
        tabBarIcon: HomeTabIcon
    }
})

const StatsNavigator = createStackNavigator({
    Stats: StatsScreen
}, {
    defaultNavigationOptions: {
        ...defaultStackNavOption
    }, 
    navigationOptions: {
        tabBarIcon: StatsTabIcon
    }
})

const MoreNavigator = createStackNavigator({
    More: MoreScreen
}, {
    defaultNavigationOptions: {
        ...defaultStackNavOption,
    },
    navigationOptions: {
        tabBarIcon: MoreTabIcon
    }
})

const NotificaitionNavigator = createStackNavigator({
    Notif: NotificationScreen
},{
    defaultNavigationOptions: {
        ...defaultStackNavOption,
        headerTitle: 'Notification'
    },
    navigationOptions:{
        tabBarIcon: NotificationTabIcon
    }
})

const TabNavigator = createBottomTabNavigator({
    Home: HomeNavigator,
    Statistics: StatsNavigator,
    Notification: NotificaitionNavigator,
    More: MoreNavigator
},{
    tabBarOptions: {
        showLabel: true,
        // labelPosition: 'beside-icon',
        activeTintColor: '#7562EB',
        tabStyle: {
            height: '100%'
        },
        inactiveTintColor: '#A9A6A6',
        style:{
            backgroundColor: colors.bgColor,
            borderTopWidth: 0,
            height: 55,
            borderRadius: 15,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            paddingVertical: 6,
            alignItems: 'center',
            justifyContent: 'center'
        }
    }
})

const MainNavigator = createSwitchNavigator({
    Auth: AuthNavigator,
    Main: TabNavigator
})

export default createAppContainer(MainNavigator);