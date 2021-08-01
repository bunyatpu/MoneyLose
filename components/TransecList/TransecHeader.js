import React, { useState, useMemo, useRef } from 'react';
import moment from "moment";
import {
    StyleSheet,
    View,
} from 'react-native';
import {
    Heading,
    HStack,
    Box
} from "native-base"


const TransecHeader = ({ title }) => {
    return (
        <HStack space={3} justifyContent="space-between">
            <Heading size="sm" py={2} pl={2} bg="#334155" color="white">{moment(title.name).format("dddd, MMMM Do YYYY")}</Heading>
            <Box
                px={2}
                pt={2}
                _text={{ color: "white", fontSize: 14, fontWeight: 'bold' }}
                //alignSelf="flex-start"

            >
                {`฿${title.summary}`}
            </Box>
        </HStack>

    );
};

export default TransecHeader;