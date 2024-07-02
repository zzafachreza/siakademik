import { ActivityIndicator, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { UcFirst, apiURL } from '../../utils/localStorage';
import { colors, fonts } from '../../utils';
import { MyButton, MyCalendar, MyGap, MyHeader, MyInput, MyPicker } from '../../components';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export default function SiswaEdit({ navigation, route }) {
    const [value, setValue] = useState(route.params);
    const [form, setForm] = useState([]);
    const [loading, setLoading] = useState(false);

    const sendServer = () => {
        let tmp = [];
        form.map(i => {
            tmp.push({ name: i.Field, value: i.value == undefined ? '' : i.value })
        });
        axios.post(apiURL + 'edit_siswa', {
            form: tmp,
            id: value.id_siswa
        }).then(res => {
            console.log(res.data)
            if (res.data == 200) {
                navigation.pop(2);
            }
        })
    }

    useEffect(() => {
        __getForm();
    }, []);

    const __getForm = () => {
        setLoading(true);
        axios.post(apiURL + 'form_siswa').then(res => {

            let tmp = [...res.data];
            res.data.map((i, idx) => {
                tmp[idx].value = value[i.Field];
            })
            console.log('tmp value', tmp);


            setForm(res.data);
        }).finally(() => {
            setLoading(false);
        });

    }

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white,
        }}>
            <MyHeader judul="Edit Siswa" onPress={() => navigation.goBack()} />
            {!loading &&
                <View style={{
                    flex: 1,
                    padding: 20,
                }}>
                    <ScrollView>
                        <FlatList showsVerticalScrollIndicator={false} data={form} renderItem={({ item, index }) => {
                            if (item.Field == 'jenis_kelamin') {
                                return (
                                    <View style={{
                                        marginVertical: 10,
                                    }}>
                                        <MyPicker value={item.value} data={
                                            [
                                                { label: 'Laki-laki', value: 'Laki-laki' },
                                                { label: 'Perempuan', value: 'Perempuan' },
                                            ]
                                        } label={UcFirst(item.Field)} onValueChange={x => {
                                            let tmp = [...form];
                                            tmp[index].value = x;
                                            setForm(tmp);
                                        }} />
                                    </View>
                                )
                            } else if (item.Type == 'date') {
                                return (
                                    <View style={{
                                        marginVertical: 10,
                                    }}>
                                        <MyCalendar value={item.value} label={UcFirst(item.Field)} onDateChange={x => {
                                            let tmp = [...form];
                                            tmp[index].value = x;
                                            setForm(tmp);
                                        }} />

                                    </View>
                                )
                            } else if (item.Field == 'file_siswa' || item.Field == 'file_ttd') {
                                return (
                                    <View style={{
                                        marginVertical: 10,
                                    }}>
                                        <Text style={{
                                            fontFamily: fonts.secondary[600],
                                            fontSize: 12,
                                            color: colors.black,
                                            marginBottom: 10,
                                        }}>{UcFirst(item.Field)}</Text>
                                        <TouchableWithoutFeedback onPress={() => {
                                            launchImageLibrary({
                                                includeBase64: true,
                                                quality: 1,
                                                mediaType: "photo",
                                                maxWidth: 500,
                                                maxHeight: 500
                                            }, response => {
                                                // console.log('All Response = ', response);
                                                let tmp = [...form];
                                                tmp[index].value = `data:${response.type};base64, ${response.base64}`;
                                                setForm(tmp);

                                            });
                                        }}>
                                            <View style={{
                                                backgroundColor: colors.border,
                                                borderRadius: 10,
                                                overflow: 'hidden'
                                            }}>
                                                <Image style={{
                                                    width: '100%',
                                                    height: 200,
                                                    resizeMode: 'contain'
                                                }} source={{
                                                    uri: item.value
                                                }} />
                                            </View>
                                        </TouchableWithoutFeedback>

                                    </View>
                                )
                            } else {
                                return (
                                    <View style={{
                                        marginVertical: 10,
                                    }}>
                                        <MyInput value={item.value} onChangeText={x => {
                                            let tmp = [...form];
                                            tmp[index].value = x;
                                            setForm(tmp);
                                        }} label={UcFirst(item.Field)} />
                                    </View>
                                )
                            }
                        }} />
                        <MyGap jarak={10} />
                        <MyButton title="Simpan" onPress={sendServer} />
                    </ScrollView>
                </View>
            }
            {loading && <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <ActivityIndicator size="large" color={colors.primary} />
            </View>}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})