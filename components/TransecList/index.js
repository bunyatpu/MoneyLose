import React, { useState, useMemo, useRef } from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    SectionList,
    Animated,
    FlatList
} from 'react-native';
import {
    VStack,
    Center,
    Box,
    Flex,
    Text,
    Heading
} from "native-base"
import TransecItem from "./TransecItem";
import TransecHeader from "./TransecHeader";
import TransecChart from "../TransecChart";

const DATA = [
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

    //const [offsetY, setOffsetY] = useState(0)
    const offset = useRef(new Animated.Value(0)).current;
    const headerHeight = useMemo(() => {
        return offset.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [HEADER_SCROLL_DISTANCE, 0],
            extrapolate: 'clamp'
        });
    }, [offset])

    return (
        <View style={styles.contaner} >
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
                    flex:1,
                    paddingTop: headerHeight
                }}
            >
                <SectionList
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: offset } } }],
                        {
                            useNativeDriver: false,
                            listener: (e) => {
                                //setOffsetY(e.nativeEvent.contentOffset.y)
                            }
                        }
                    )}
                    sections={DATA}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => <TransecItem title={item} />}
                    renderSectionHeader={({ section: { title } }) => (
                        <TransecHeader title={title} />
                    )}
                />
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