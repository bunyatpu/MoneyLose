import React, { useState, useMemo, useRef } from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    SectionList,
    Animated,
    FlatList,
    Dimensions 
} from 'react-native';
import {
    VStack,
    Center,
    Box,
    Flex,
    Text,
    Heading
} from "native-base"

import {
    BarChart,
    LineChart
} from "react-native-chart-kit";

const windowWidth = Dimensions.get('window').width;
const data = {
    labels: ["10th", "11th", "12th", "13th", "14th", "15th"],
    datasets: [
        {
            data: [5000, 4500, 3000, 2000, 4000, 5000]
        }
    ]
};

const chartConfig = {
    backgroundColor: '#000000',
    backgroundGradientFrom: '#1E2923',
    backgroundGradientTo: '#08130D',
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    style: {
        borderRadius: 16
    }
}


const TransecChart = () => {
    return (
        <LineChart
            bezier
            data={data}
            width={windowWidth}
            height={200}
            yAxisLabel=""
            chartConfig={chartConfig}
        />
    );
};

export default TransecChart;