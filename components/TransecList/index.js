import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {
    StyleSheet,
    View,
    SafeAreaView,
    TouchableOpacity,
    SectionList,
    Animated
} from 'react-native';
import {
    VStack,
    Center,
    Box,
    Flex,
    Text,
    Heading,
    Fab,
    Icon,
    Spinner
} from "native-base"
import TransecItem from "./TransecItem";
import TransecHeader from "./TransecHeader";
import TransecChart from "../TransecChart";
import { Ionicons, Entypo, FontAwesome5 } from '@expo/vector-icons';
import { getTransecList } from "../../state/actions/TransecAction";

const __DATA = [
    {
        title: "Main dishes",
        data: ["Pizza", "Burger", "Risotto"]
    },
    {
        title: "Sides",
        data: ["French Fries", "Onion Rings", "Fried Shrimps"]
    },
    {
        title: "Drinks",
        data: ["Water", "Coke", "Beer"]
    },
    {
        title: "Desserts",
        data: ["Cheese Cake", "Ice Cream", "xxxxxx", "xxxxxx", "xxxxxx", "xxxxxx", "xxxxxx", "xxxxxx", "xxxxxx"]
    }
];

const HEADER_MAX_HEIGHT = 250;
const HEADER_MIN_HEIGHT = 50;
const HEADER_SCROLL_DISTANCE = (HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT);

const TransecList = () => {

    const dispatch = useDispatch();
    const offset = useRef(new Animated.Value(0)).current;
    const DATA = useSelector(({ transec }) => transec.transData);
    const loading = useSelector(({ transec }) => transec.transLoading);


    const headerHeight = useMemo(() => {
        return offset.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [HEADER_SCROLL_DISTANCE, 0],
            extrapolate: 'clamp'
        });
    }, [offset]);

    useEffect(() => {

        getTransecList()(dispatch)
    }, [])



    return (
        <View style={styles.contaner} >
            <Fab
                position="absolute"
                bottom={120}
                size="sm"
                icon={<Icon color="white" as={<Ionicons name="add" />} size="sm" />}
            />
            <View style={{ height: 130 }}>
                <SafeAreaView style={styles.hBox}  >
                    <Heading size="md" color="white">฿50,000</Heading>
                    <Text fontSize="xs" color="#cbd5e1">ยอดเงิน</Text>
                    <View style={styles.mShow}  >
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity>
                                <Text fontSize="sm" pl={3} textAlign="left" color="#9e9e9e" >เดือนก่อนหน้า</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text fontSize="sm" textAlign="center" color="white" >เดือนปัจจุบัน</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity>
                                <Text fontSize="sm" pr={3} textAlign="right" color="#9e9e9e" >ระบุเดือน</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView >
            </View>
            <Animated.View style={[styles.ghHeader, { height: headerHeight, backgroundColor: '#f87171' }]}>
                {/* <Text fontSize="sm" pr={3} textAlign="right" color="#9e9e9e" >test</Text> */}
                <TransecChart />
            </Animated.View>
            <Animated.View
                style={{
                    flex: 1,
                    paddingTop: headerHeight
                }}
            >
                {loading && <VStack flex={1} pt={20} space={1} justifyContent="flex-start" >
                    <Spinner color="#4ade80" accessibilityLabel="Loading posts" />
                    <Text color="#4ade80" alignSelf="center" fontSize="xxs" >loading...</Text>
                </VStack>}
                {!loading && <SectionList
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: offset } } }],
                        {
                            useNativeDriver: false,
                            listener: (e) => { }
                        }
                    )}
                    sections={DATA}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => <TransecItem data={item} />}
                    renderSectionHeader={({ section: { title } }) => (
                        <TransecHeader title={title} />
                    )}
                />}
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    contaner: {
        flex: 1,
        backgroundColor: '#374151',

    },
    ghHeader: {
        position: 'absolute',
        top: 130,
        left: 0,
        right: 0,
        backgroundColor: '#03A9F4',
        overflow: 'hidden'
    },
    hBox: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#1e293b',
        color: '#ffffff',
        paddingTop: 5
    },
    mShow: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: "row",
        color: '#fca5a5',
        marginTop: 8,
        flexWrap: 'wrap'
    },
    mSlide: {
        flex: 1
    }
});


export default TransecList;