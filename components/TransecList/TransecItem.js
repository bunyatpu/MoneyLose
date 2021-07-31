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

const TransecItem = ({ title }) => {

    return <Box p={3} borderRadius='md' bg="#1e293b">
        <HStack space={3} justifyContent="space-between">
            <HStack space={3}  >
                <Box style={styles.iconRound} px={2} pt={2} bg="#059669">
                    <Ionicons name="american-football" size={23} color="white" />
                </Box>
                <VStack >
                    <Box _text={{ color: "white", fontWeight: 'bold', fontSize: 15 }} pt={1} >
                        {title}
                    </Box>
                    <Box _text={{ color: "white", fontSize: 12 }} >
                        GeekyAnts
                    </Box>
                </VStack>
            </HStack>
            <Box
                style={styles.price}
                px={2}
                pt={2}
                _text={{ color: "white", fontSize: 12 }}
                alignSelf="flex-start"

            >
                5000
            </Box>
        </HStack>
    </Box>
    // return (
    //     <View style={{
    //         backgroundColor: "#1e293b",
    //         padding: 20,
    //         //marginVertical: 8
    //     }}>
    //         <Text color="white" >{title}</Text>
    //     </View>
    // );
};

const styles = StyleSheet.create({
    iconRound: { borderRadius: 40, width: 40, height: 40 },
    price: {

    }
});

export default TransecItem;