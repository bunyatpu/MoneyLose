import React from 'react';
import {
    TouchableOpacity,
    TextInput
} from 'react-native';
import {
    VStack,
    Input,
    Button,
    FormControl,
    NativeBaseProvider,
    Select
} from 'native-base';
import { useForm, Controller } from 'react-hook-form';


export const NumberInputTF = ({ control, name, defaultValue, errors }) => {
    return <FormControl isRequired isInvalid={'amt' in errors}>
        <Controller
            name={name}
            defaultValue=""
            control={control}
            rules={{ required: 'Field is required' }}
            render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                    returnKeyType={'done'}
                    onBlur={onBlur}
                    style={{ color: 'white', borderStyle: 'solid', borderColor: '#ffffff', borderWidth: 1, fontSize: 18, padding: 10, borderRadius: 5, textAlign: 'right' }}
                    keyboardType='numeric'
                    onChangeText={onChange}
                    value={value}
                />
            )}

        />
        <FormControl.ErrorMessage _invalid={{ _text: { color: "rose.500" } }}>
            {errors[name]?.message}
        </FormControl.ErrorMessage>
    </FormControl>
}

export const TextInputTF = ({ control, name, defaultValue, errors }) => {
    return <FormControl >
        <Controller
            name={name}
            defaultValue=""
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                    returnKeyType={'done'}
                    onBlur={onBlur}
                    style={{ color: 'white', borderStyle: 'solid', borderColor: '#ffffff', borderWidth: 1, fontSize: 18, padding: 10, borderRadius: 5 }}
                    onChangeText={onChange}
                    value={value}
                />
            )}

        />
        <FormControl.ErrorMessage _invalid={{ _text: { color: "rose.500" } }}>
            {errors[name]?.message}
        </FormControl.ErrorMessage>
    </FormControl>
}

export const SelectTF = ({ control, name, defaultValue, errors, options }) => {
    return <FormControl isRequired isInvalid={'amt' in errors}>
        <Controller
            name={name}
            defaultValue=""
            control={control}
            rules={{ required: 'Field is required' }}
            render={({ field: { onChange, onBlur, value } }) => (
                <Select
                    onBlur={onBlur}
                    selectedValue={value}
                    color="white"
                    accessibilityLabel="เลือกประเภท"
                    placeholder="เลือกประเภท"
                    onValueChange={onChange}
                    _selectedItem={{
                        bg: "cyan.600"
                    }}
                >
                    {options.map((i) => <Select.Item key={i.id} label={i.label} value={i.value} />)}
                </Select>
            )}

        />
        <FormControl.ErrorMessage _invalid={{ _text: { color: "rose.500" } }}>
            {errors[name]?.message}
        </FormControl.ErrorMessage>
    </FormControl>
}