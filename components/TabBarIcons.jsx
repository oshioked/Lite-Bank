import React from 'react';
import {AntDesign, EvilIcons, Ionicons, Entypo} from '@expo/vector-icons';
import { Platform } from 'react-native';

export const HomeTabIcon = ({focused, tintColor}) =>(
    focused ?
    <Entypo name = 'home' size = {24} color = {tintColor}/>
    : <AntDesign name = 'home' size = {24} color = {tintColor}/>
)

export const NotificationTabIcon = ({focused, tintColor}) =>(
    <Ionicons name = {focused ? 'ios-notifications' : 'ios-notifications-outline'} size = {24} color = {tintColor}/>
)

export const MoreTabIcon = ({focused, tintColor}) =>(
    <Ionicons name = {Platform.OS === 'android' ? 'md-more' : 'ios-more'} size = {24} color = {tintColor}/>
)

export const StatsTabIcon = ({focused, tintColor}) =>(
    <EvilIcons name="chart" size={24} color= {tintColor} />
)