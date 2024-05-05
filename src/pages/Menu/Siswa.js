import { FlatList, Image, Linking, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { MyDimensi, colors, fonts, windowHeight, windowWidth } from '../../utils'
import { MyButton, MyGap, MyHeader, MyInput, MyPicker } from '../../components'
import axios from 'axios';
import { apiURL, webURL } from '../../utils/localStorage'
import { showMessage } from 'react-native-flash-message'
import RenderHtml from 'react-native-render-html';
import moment from 'moment'
export default function Siswa({ navigation, route }) {

    const item = route.params;

    const MyList = ({ l, v }) => {
        return (
            <View style={{
                borderBottomWidth: 1,
                paddingBottom: 10,
                borderBottomColor: colors.border
            }}>
                <Text style={{
                    fontFamily: fonts.secondary[800],
                    color: colors.black,
                    fontSize: 14,
                }}>{l}</Text>
                <Text style={{
                    fontFamily: fonts.secondary[600],
                    color: colors.black,
                    fontSize: 14
                }}>{v}</Text>
            </View>
        )
    }
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white,
            // padding: 10,
        }}>
            <MyHeader judul="Siswa Detail" onPress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false} style={{
                padding: 20,
            }}>
                <MyList l="Nama Lengkap" v={item.nama_lengkap} />
                <MyList l="Nama Panggilan" v={item.nama_panggilan} />
                <MyList l="Nomor Induk" v={item.nomor_induk} />
                <MyList l="Jenis Kelamin" v={item.jenis_kelamin} />
                <MyList l="Tempat Lahir" v={item.tempat_lahir} />
                <MyList l="Tanggal Lahir" v={item.tanggal_lahir} />
                <MyList l="Agama" v={item.agama} />
                <MyList l="Anak Ke" v={item.anak_ke} />
                <MyList l="Status Anak dalam Keluarga" v={item.status_anak} />
                <MyList l="Nama Orang Tua Ayah" v={item.nama_ayah} />
                <MyList l="Nama Orang Tua Ibu" v={item.nama_ibu} />
                <MyList l="Nama Wali (Jika Ada)" v={item.nama_wali} />
                <MyList l="Status Hubungan Dengan Anak" v={item.status_wali} />
                <MyList l="Pekerjaan Orang Tua / Wali" v={item.pekerjaan_orangtua} />
                <MyList l="Alamat Orang Tua / Wali" v={item.alamat_orangtua} />
                <MyList l="Nama Guru" v={item.nama_guru} />
                <View style={{
                    paddingVertical: 10,
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[800],
                        fontSize: 14
                    }}>Foto</Text>
                    <Image source={{
                        uri: item.file_siswa
                    }} style={{
                        width: 150,
                        height: 150,
                    }} />
                </View>
                <View style={{
                    paddingVertical: 10,
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[800],
                        fontSize: 14
                    }}>Tanda Tangan dan Cap</Text>
                    <Image source={{
                        uri: item.file_ttd
                    }} style={{
                        width: 150,
                        height: 150,
                    }} />
                </View>

                <MyGap jarak={20} />
                <MyButton onPress={() => navigation.navigate('SiswaNilai', item)} title="Input Nilai Siswa" Icons="create" />

                <MyGap jarak={20} />
                <MyButton title="Lihat Nilai Rapor" warna={colors.secondary} onPress={() => navigation.navigate('SiswaNilaiHasil', item)} Icons="list" />
                <MyGap jarak={40} />

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})