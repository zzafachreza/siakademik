import { ActivityIndicator, FlatList, Image, Linking, PermissionsAndroid, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MyDimensi, colors, fonts, windowHeight, windowWidth } from '../../utils'
import { Icon } from 'react-native-elements';
import YoutubePlayer from "react-native-youtube-iframe";
import axios from 'axios';
import { apiURL } from '../../utils/localStorage';
import moment from 'moment';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import GetLocation from 'react-native-get-location';
import { MyButton, MyCalendar, MyGap, MyHeader, MyInput, MyPicker } from '../../components';
import { showMessage } from 'react-native-flash-message';
import { WebView } from 'react-native-webview';
export default function Absen({ navigation, route }) {
    const item = route.params;
    const [kirim, setKirim] = useState({
        nama: '',
        jenis: 'Masuk',
        tanggal: moment().format('YYYY-MM-DD'),
        kehadiran: 'Hadir',
        foto_absen: 'https://zavalabs.com/nogambar.jpg',
        latitude: 0,
        longitude: 0,
    });
    const [loading, setLoading] = useState(true);

    const webURL = `https://siakademik.okeadmin.com/home/absen?latitude=${kirim.latitude}&longitude=${kirim.longitude}`;


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



    const requestLocationPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Cool Photo App Location Permission',
                    message:
                        'Cool Photo App needs access to your location ' +
                        'so you can take awesome pictures.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You can use the camera');
            } else {
                console.log('Camera permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    };

    useEffect(() => {

        requestLocationPermission();
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
            .then(location => {
                console.log('lokasi', location);
                setLoading(false);
                setKirim({
                    ...kirim,
                    latitude: location.latitude,
                    longitude: location.longitude,
                });



            })
            .catch(error => {
                setLoading(false);
                const { code, message } = error;
                console.warn('error', code, message);
            });

    }, []);




    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white
        }}>

            <MyHeader judul="Absen Guru" onPress={() => navigation.goBack()} />
            <ScrollView style={{
                flex: 1,
            }}>
                {!loading && <WebView source={{ uri: `${webURL}` }} style={{ height: windowHeight / 2 }} />}
                <View style={{
                    padding: 10
                }}>

                    <TouchableOpacity onPress={() => {


                        launchCamera({
                            includeBase64: true,
                            quality: 1,
                            mediaType: "photo",
                            maxWidth: 500,
                            maxHeight: 500
                        }, response => {
                            // console.log('All Response = ', response);

                            setKirim({
                                ...kirim,
                                foto_absen: `data:${response.type};base64, ${response.base64}`,
                            });
                        });



                    }} style={{
                        width: 200,
                        height: 200,
                        marginBottom: 40,
                        alignSelf: 'center',
                        borderWidth: 1,
                        borderColor: colors.border,
                        overflow: 'hidden',
                        borderRadius: 20,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image style={{
                            width: 200,
                            height: 200,
                        }} source={{
                            uri: kirim.foto_absen,
                        }} />
                    </TouchableOpacity>
                    <MyPicker label="Jenis Absen" iconname="options" onValueChange={x => {
                        setKirim({
                            ...kirim,
                            jenis: x
                        })
                    }} data={[
                        { value: 'Masuk', label: 'Masuk' },
                        { value: 'Pulang', label: 'Pulang' },
                    ]} />
                    <MyGap jarak={20} />
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
                </View>
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