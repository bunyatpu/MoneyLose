import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Ionicons, Entypo, FontAwesome5 } from '@expo/vector-icons';

const TabBar = ({ state, descriptors, navigation }) => {

    const focusedOptions = descriptors[state.routes[state.index].key].options;

    if (focusedOptions.tabBarVisible === false) {
        return null;
    }

    const onPress = (route, isFocused) => {
        const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
        }
    };

    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {

                const { options } = descriptors[route.key];
                const label = options.tabBarLabel;
                const iconName = options.iconName;
                const isFocused = state.index === index;

                return (
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        onPress={() => { onPress(route, isFocused) }}
                        style={styles.box}
                    >
                        <FontAwesome5 name={iconName} size={20} color={ isFocused ? '#ffffff' : '#9e9e9e'} />
                        <Text style={{ color: isFocused ? '#ffffff' : '#9e9e9e', fontSize: 12 }}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#1e293b'
    },
    box: {
        paddingTop:15,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 100
    }
});


export default TabBar;