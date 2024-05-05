import { ActivityIndicator, FlatList, Image, Linking, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MyDimensi, colors, fonts, windowHeight, windowWidth } from '../../utils'
import { Icon } from 'react-native-elements';
import YoutubePlayer from "react-native-youtube-iframe";
import axios from 'axios';
import { apiURL } from '../../utils/localStorage';
import moment from 'moment';
import { MyButton, MyCalendar, MyGap, MyHeader, MyInput, MyPicker } from '../../components';
import { showMessage } from 'react-native-flash-message';
export default function Absen({ navigation, route }) {
    const item = route.params;
    const [kirim, setKirim] = useState({
        nama: '',
        tanggal: moment().format('YYYY-MM-DD'),
        kehadiran: 'Hadir'
    });
    const [loading, setLoading] = useState(false);

    const sendServer = () => {
        if (kirim.nama.length == 0) {
            showMessage({
                type: 'danger',
                message: 'Nama wajib di isi !'
            })
        } else {
            setLoading(true);
            axios.post(apiURL + 'absen_add', kirim).then(res => {
                console.log(res.data);
                if (res.data == 200) {
                    showMessage({
                        type: 'success',
                        message: 'Data berhasil di simpan !'
                    });
                    navigation.replace('MainApp')
                }

            }).finally(() => {
                setLoading(false)
            })
        }
    }





    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white
        }}>

            <MyHeader judul="Absen Guru" onPress={() => navigation.goBack()} />
            <ScrollView style={{
                flex: 1,
                padding: 20,
            }}>
                <MyInput label="Nama Lengkap" iconname="person-outline" onChangeText={x => setKirim({
                    ...kirim,
                    nama: x
                })} />
                <MyGap jarak={20} />
                <MyCalendar label="Tanggal" iconname="calendar-outline" onDateChange={x => setKirim({
                    ...kirim,
                    tanggal: x
                })} />
                <MyGap jarak={20} />
                <MyPicker onValueChange={x => setKirim({
                    ...kirim,
                    kehadiran: x
                })} iconname="checkmark-outline" label="Kehadiran" data={[
                    { label: 'Hadir', value: 'Hadir' },
                    { label: 'Sakit', value: 'Sakit' },
                    { label: 'Izin', value: 'Hadir' },
                    { label: 'Alfa', value: 'Alfa' },
                ]} />
                <MyGap jarak={20} />
                {!loading && <>
                    <MyButton title="Simpan" Icons="download-outline" onPress={sendServer} />
                    <MyGap jarak={20} />
                    <MyButton title="Riwayat Absen" Icons="list-outline" warna={colors.secondary} onPress={() => navigation.navigate('AbsenData')} />
                </>}
            </ScrollView>
            {loading &&
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <ActivityIndicator size="large" color={colors.primary} />

                </View>
            }



        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})