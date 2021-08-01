import React, { useState, useMemo, useRef } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import {
    Text,
    VStack, Box, Divider, HStack
} from "native-base"
import { Ionicons, Entypo, FontAwesome5 } from '@expo/vector-icons';


const IconNameMapping = (valType) => {

    switch (valType) {
        case 'food':
            return 'fast-food-outline'
        case 'shopping':
            return 'cart-outline'
        case 'bill':
            return 'cash-outline'
        case 'home':
            return 'home-outline'
        case 'entertainment':
            return 'game-controller-outline'
        case 'salary':
            return 'briefcase-outline'
        default:
            return "american-football";
    }
}

const TransecItem = ({ data }) => {

    //console.log('---data', data);
    const iconName = useMemo(()=>{

        return IconNameMapping(data.typeName);

    },[data.typeName])

    return <Box p={3} borderRadius='md' bg="#1e293b">
        <HStack space={3} justifyContent="space-between">
            <HStack space={3}  >
                <Box style={styles.iconRound} pl={1.5} pt={1.5} bg={(data.direct ==2)?"#f59e0b":"#059669"}>
                    {iconName && <Ionicons name={iconName} size={22} color="white" />}
                </Box>
                <VStack >
                    <Box _text={{ color: "white", fontWeight: 'bold', fontSize: 15 }} >
                        {data.typeName}
                    </Box>
                    <Box _text={{ color: "white", fontSize: 12 }} >
                        {data.desc}
                    </Box>
                </VStack>
            </HStack>
            <Box
                style={styles.price}
                px={2}
                pt={2}
                _text={{ color: (data.direct == 2) ? "#d97706" : "#4ade80", fontSize: 14, fontWeight: 'bold' }}
                alignSelf="flex-start"

            >
                {`${(data.direct == 2) ? '' : '+ '}${data.amt}`}
            </Box>
        </HStack>
    </Box>
};

const styles = StyleSheet.create({
    iconRound: { borderRadius: 35, width: 35, height: 35 },
    price: {

    }
});

export default TransecItem;