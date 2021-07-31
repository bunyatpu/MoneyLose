import React, { useState, useMemo, useRef } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import {
    Heading
} from "native-base"


const TransecHeader = ({title}) => {
    return (
        <Heading size="sm" py={5} bg="#334155" color="white">{title}</Heading>
    );
};

export default TransecHeader;