import { ActivityIndicator, FlatList, Image, Linking, SafeAreaView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MyDimensi, colors, fonts, windowHeight, windowWidth } from '../../utils'
import { Icon } from 'react-native-elements';
import YoutubePlayer from "react-native-youtube-iframe";
import axios from 'axios';
import { MYAPP, apiURL, getData } from '../../utils/localStorage';
import moment from 'moment';
import { showMessage } from 'react-native-flash-message';
import { MyButton, MyCalendar, MyGap, MyHeader, MyInput, MyPicker, MyRadio } from '../../components';
import { ScrollView } from 'react-native';
import SweetAlert from 'react-native-sweet-alert';
export default function Menu1a({ navigation, route }) {
    const [loading, setLoading] = useState(false);

    const MyList = ({ no, label }) => {
        return (
            <View style={{
                flexDirection: 'row',
                marginVertical: 5,

            }}>
                <Text style={{
                    fontFamily: fonts.secondary[400],
                    fontSize: 14,
                    color: colors.black,
                }}>{no}. </Text>
                <Text style={{
                    flex: 1,

                    paddingLeft: 5,
                    fontFamily: fonts.secondary[400],
                    fontSize: 14,
                    color: colors.black,
                }}>{label}</Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white
        }}>

            <MyHeader judul="Input Nilai" onPress={() => navigation.goBack()} />

            <View style={{
                flex: 1,
                backgroundColor: colors.white,
                padding: 20,
            }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <MyList no={1} label="Buku Laporan Penilaian Perkembangan Anak ini dipergunakan di lembaga PAUD sesuai dengan usia kalender anak." />
                    <MyList no={2} label="Buku Laporan Penilaian Perkembangan Anak Didik ini diisi oleh Guru Kelas." />
                    <MyList no={3} label="Penilaian perkembangan diisi dengan memberi  tanda ceklis (✓) atau memberi tanda bulat (●) pada kolom hasil pengamatan yang di sediakan." />
                    <MyList no={4} label="Pengamatan dilakukan dengan menggunakan teknik-teknik penilaian sebagai berikut : " />
                    <Text style={{
                        marginVertical: 5,
                        marginLeft: 30,
                        fontFamily: fonts.secondary[400],
                        fontSize: 14,
                        color: colors.black,
                    }}>BM = Belum Muncul{'\n'}
                        Kemampuan anak telah terlihat, guru perlu memberi rangsangan agar kemampuannya muncul dan orang tua perlu mendukung dengan memupuknya dirumah.</Text>

                    <Text style={{
                        marginVertical: 5,
                        marginLeft: 30,
                        fontFamily: fonts.secondary[400],
                        fontSize: 14,
                        color: colors.black,
                    }}>MM = Mulai Muncul{'\n'}
                        Kemampuan anak telah terlihat, namun masih jarang. Guru perlu memberi rangsangan agar kemunculannya semakin sering dan orang tua perlu mendukung dengan memupuknya di rumah.</Text>

                    <Text style={{
                        marginVertical: 5,
                        marginLeft: 30,
                        fontFamily: fonts.secondary[400],
                        fontSize: 14,
                        color: colors.black,
                    }}>SM = Sudah Muncul{'\n'}
                        Kemampuan anak terlihat sudah muncul, Guru perlu memberikan  rangsangan agar kemampuan anak semakin baik kualitasya dan orang tua perlu mendukung dengan memupuknya di rumah.</Text>


                    <MyList no={5} label="Keterangan untuk perkembangan pribadi anak: S = Sering, J = Jarang, TP = Tidak Pernah " />
                    <MyList no={6} label="Tahapan perkembangan anak diisi dengan kemampuan anak sebagaimana pada pedoman penilaian perkembangan anak (tahap 1 s/d 6 untuk perilaku sosial, tahap 1 s/d 7 untuk menggunting, tahap 1 s/d 8 untuk menggambar, melukis dan menulis, tahap 1 s/d 9 untuk meronce dan bermain peran, tahap 1 s/d 19 untuk bermain balok)" />

                </ScrollView>
            </View>



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