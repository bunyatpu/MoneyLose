import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TransecList from "../TransecList";
import Report from "../Report";
import RegularExpenses from "../RegularExpenses";
import Setting from "../Setting";
import ProfileScreen from "../ProfileScreen";
import TabBar from "./TabBar";
import TransecForm from "../TransecForm";
const Stack = createStackNavigator();
const MainStack = createBottomTabNavigator();


const MainScreen = () => {

    return <MainStack.Navigator  tabBar={props => <TabBar {...props} />}>
        <MainStack.Screen name="TransecList" options={{ tabBarLabel: 'รายการธุรกรรม', iconName: 'list-alt' }} component={TransecList} />
        <MainStack.Screen name="Report" options={{ tabBarLabel: 'รายงาน', iconName: 'chart-line' }} component={Report} />
        <MainStack.Screen name="RegularExpenses" options={{ tabBarLabel: 'รายจ่ายประจำ', iconName: 'clone' }} component={RegularExpenses} />
        <MainStack.Screen name="Setting" options={{ tabBarLabel: 'อื่นๆ', iconName: 'ellipsis-h' }} component={Setting} />
    </MainStack.Navigator>
}

const MainNavigation = () => {
    return (
        <Stack.Navigator mode="modal" headerMode="none"   >
            <Stack.Screen name="MainScreen" component={MainScreen} />
            <Stack.Screen name="TransecForm" component={TransecForm} />
        </Stack.Navigator>
    );
};

export default MainNavigation;