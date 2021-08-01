import React, { useState, useMemo, useRef } from 'react';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { useForm, Controller } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import {
    TouchableOpacity,
    TextInput,
    StyleSheet
} from 'react-native';
import {
    VStack,
    HStack,
    Box,
    Divider,
    Select,
    FormControl,
    Input
} from "native-base"
import { TextInputTF, NumberInputTF, SelectTF } from "./Controls";
import { SaveTrans, getTransecList } from "../../state/actions/TransecAction";


const options = [
    { id: 1, label: 'food', value: 'food', direct: 2 },
    { id: 2, label: 'shopping', value: 'shopping', direct: 2 },
    { id: 3, label: 'bill', value: 'bill', direct: 2 },
    { id: 4, label: 'home', value: 'home', direct: 2 },
    { id: 5, label: 'entertainment', value: 'entertainment', direct: 2 },
    { id: 6, label: 'salary', value: 'salary', direct: 1 }

]

const TransecMainFrm = () => {

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [language, setLanguage] = useState(null)
    const [amt, setAmt] = useState(0);
    const [desc, setSesc] = useState("");
    const refData = useSelector(({ transec }) => transec.transData);
    const { control, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {

        const selType = options.find(i => i.value == data.typeName)
        let direct = 2;

        if (selType) {
            direct = selType.direct;
        }

        const newData = {
            typeName: data.typeName,
            direct: direct,
            amt: (direct == 2) ? data.amt * -1 : data.amt,
            desc: data.desc
        }

        SaveTrans(newData, refData)(dispatch)
        setTimeout(() => {
            navigation.goBack();
        }, 200);


    }

    const onCloseScreen = () => {
        navigation.goBack();
    }


    return (
        <Box flex={1} bg="#374151" safeArea>
            <HStack bg="#1e293b" py={5} px={5} justifyContent="space-between" alignItems="flex-end" >
                <TouchableOpacity onPress={onCloseScreen}>
                    <Box _text={{ color: "white", fontSize: 18, fontWeight: 'bold' }} >ยกเลิก</Box>
                </TouchableOpacity>
                <Box _text={{ color: "white", fontSize: 20, fontWeight: 'bold' }} >เพิ่มรายการ</Box>
                <TouchableOpacity onPress={handleSubmit(onSubmit)}>
                    <Box _text={{ color: "white", fontSize: 18, fontWeight: 'bold' }} >บันทึก</Box>
                </TouchableOpacity>
            </HStack>
            <VStack bg="#1e293b" mt={5} p={5}>
                <HStack space={2}>
                    <Box flex={1} _text={styles.labelTxt}>
                        ประเภท
                    </Box>
                    <Box flex={6} >
                        <SelectTF control={control} name="typeName" options={options} errors={errors} />
                        <Divider my={3} mx={0} bg="#525252" />
                    </Box>
                </HStack>
                <HStack space={2} >
                    <Box flex={1} _text={styles.labelTxt}>
                        จำนวน
                    </Box>
                    <Box flex={6} >
                        <NumberInputTF control={control} name="amt" defaultValue={0} errors={errors} />
                        <Divider my={3} mx={0} bg="#525252" />
                    </Box>
                </HStack>
                <HStack space={2} >
                    <Box flex={1} _text={styles.labelTxt}>
                        Note
                    </Box>
                    <Box flex={6} >
                        <TextInputTF control={control} name="desc" defaultValue={""} errors={errors} />
                    </Box>
                </HStack>

            </VStack>
        </Box>
    );
};

const styles = StyleSheet.create({
    labelTxt: { color: "white", fontSize: 15, fontWeight: 'bold' }
});

export default TransecMainFrm;