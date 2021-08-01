import React, { useState, useMemo, useRef } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TransecMainFrm from "./TransecMainFrm";
import {
    VStack,
    Center,
    Box,
    Flex,
    Text,
    Heading
} from "native-base"

const Stack = createStackNavigator();


const TransecForm = () => {
    return (
        <Stack.Navigator  >
            <Stack.Screen name="TransecMainFrm" options={{
                title: 'เพิ่มรายรับ/จ่าย',
                headerShown: false,
            }} component={TransecMainFrm} />
        </Stack.Navigator>
    );
};

export default TransecForm;