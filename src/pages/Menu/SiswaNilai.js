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
import { Icon } from 'react-native-elements'
export default function SiswaNilai({ navigation, route }) {

    const item = route.params;

    const [soal, setSoal] = useState([

        {
            label: 'Dapat membedakan baik dan buruk',
            value: 0,
        },
        {
            label: 'Menyayangi ciptaan Allah',
            value: 0,
        },
        {
            label: 'Berlari sambil membawa benda ringan',
            value: 0,
        },
        {
            label: 'Naik turun tangga dengan kaki bergantian',
            value: 0,
        },
        {
            label: 'Meniti di atas papan titian yang cukup lebar',
            value: 0,
        },
        {
            label: 'Melompat turun dari ketingian kurang lebih 20 cm',
            value: 0,
        },
        {
            label: 'Meniru gerakan senam sederhana',
            value: 0,
        },
        {
            label: 'Menuang air, pasir atau biji-bijian ke tempat penampung (mangkuk, ember, dll)',
            value: 0,
        },
        {
            label: 'Memasukkan benda kecil ke dalam botol (potongan lidi, kerikil, biji-bijian)',
            value: 0,
        },
        {
            label: 'Meronce manik-manik yang tidak terlalu kecil dengan benang yang agak kaku',
            value: 0,
        },
        {
            label: 'Menggunting kertas mengikuti pola garis lurus',
            value: 0,
        },
        {
            label: 'Menemukan bagian yang hilang dari gambar',
            value: 0,
        },
        {
            label: 'Menyebutkan berbagai makanan dan rasanya',
            value: 0,
        },
        {
            label: 'Dapat membedakan dua hal dari jenis yang sama (misalnya perbedaan antara ayam dan kucing, antara rambutan dan pisang)',
            value: 0,
        },
        {
            label: 'Dapat mengurutkan benda dari benda yang paling kecil hingga benda yang paling besar atau sebaliknya',
            value: 0,
        },
        {
            label: 'Dapat mengikuti pola tepuk tangan',
            value: 0,
        },
        {
            label: 'Dapat membedakan konsep banyak dan sedikit',
            value: 0,
        },
        {
            label: 'Pura-pura membaca cerita bergambar dalam buku dengan kata-kata sendiri',
            value: 0,
        },
        {
            label: 'Memahami 2 perintah yang diberikan',
            value: 0,
        },
        {
            label: 'Manyatakan keinginan dengan kalimat sederhana',
            value: 0,
        },
        {
            label: 'Menceritakan pengalaman yang dialami dengan cerita sederhana ',
            value: 0,
        },
        {
            label: 'Baung air kecil tanpa bantuan',
            value: 0,
        },
        {
            label: 'Sabar Menunggu giliran',
            value: 0,
        },
        {
            label: 'Menunjukkan sikap toleran sehingga dapat bekerja dalam kelompok ',
            value: 0,
        },
        {
            label: 'Menghargai orang lain',
            value: 0,
        },
        {
            label: 'Bereaksi terhadap hal yang dianggap tidak benar (marah bila diganggu atau diperlakukan berbeda)',
            value: 0,
        },
        {
            label: 'Menunjukkan ekspresi menyesal ketika melakukan kesalahan',
            value: 0,
        },

    ])

    const [kirim, setKirim] = useState({
        fid_siswa: route.params.id,
        n1: '',
        n2: '',
        n3: '',
        n4: '',
        n5: '',
        n6: '',
        n7: '',
        n8: '',
        n9: '',
        n10: '',
        n11: '',
        n12: '',
        n13: '',
        n14: '',
        n15: '',
        n16: '',
        n17: '',
        n18: '',
        n19: '',
        n20: '',
        n21: '',
        n22: '',
        n23: '',
        n24: '',
        n25: '',
        n26: '',
        n27: '',
        tinggi_badan: '',
        berat_badan: '',
        sakit: '',
        izin: '',
        alfa: '',
        rekomendasi: ''

    });

    const sendServer = () => {
        console.log(kirim);
        axios.post(apiURL + 'nilai_add', kirim).then(res => {
            console.log(res.data);
            if (res.data == 200) {
                showMessage({
                    type: 'success',
                    message: 'Nilai berhasil ditambahkan !'
                });
                navigation.goBack();
            }
        })
    }

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
                <MyList l="Nomor Induk" v={item.nomor_induk} />

                <View style={{
                    padding: 10,
                    borderWidth: 1,
                    marginVertical: 10,
                    borderColor: colors.primary,
                    borderRadius: 10,
                }}>
                    {/* <Text style={{
                        fontFamily: fonts.secondary[800],
                        fontSize: 14
                    }}>I. MORAL DAN NILAI-NILAI AGAMA</Text> */}

                    {soal.map((i, idx) => {
                        return (
                            <View style={{
                                marginVertical: 4, borderBottomWidth: 1,
                                padding: 5,
                            }}>
                                <Text style={{
                                    fontSize: 14,
                                    fontFamily: fonts.secondary[600]
                                }}>{idx + 1}. {soal[idx].label}</Text>
                                <View style={{
                                    marginTop: 10,
                                    flexDirection: 'row',
                                    justifyContent: 'space-around'
                                }}>
                                    <TouchableWithoutFeedback onPress={() => {
                                        let tmp = [...soal];
                                        if (tmp[idx].value == 1) {
                                            tmp[idx].value = 0;
                                        } else {
                                            tmp[idx].value = 1;
                                        }
                                        let no = parseFloat(idx) + parseFloat(1);
                                        setKirim({
                                            ...kirim,
                                            ['n' + no]: 1
                                        })
                                        setSoal(tmp);
                                    }}>
                                        <View style={{
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>

                                            <View style={{
                                                width: 40,
                                                height: 40,
                                                borderWidth: 1,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderRadius: 5,
                                            }}>
                                                {soal[idx].value == 1 && <Icon type='ionicon' color={colors.success} name='checkmark' size={30} />}
                                            </View>
                                            <Text style={{
                                                fontFamily: fonts.secondary[600]
                                            }}>BM</Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                    <TouchableWithoutFeedback onPress={() => {
                                        let tmp = [...soal];
                                        if (tmp[idx].value == 2) {
                                            tmp[idx].value = 0;
                                        } else {
                                            tmp[idx].value = 2;
                                        }
                                        let no = parseFloat(idx) + parseFloat(1);
                                        setKirim({
                                            ...kirim,
                                            ['n' + no]: 2
                                        })
                                        setSoal(tmp);
                                    }}>
                                        <View style={{
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>

                                            <View style={{
                                                width: 40,
                                                height: 40,
                                                borderWidth: 1,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderRadius: 5,
                                            }}>
                                                {soal[idx].value == 2 && <Icon type='ionicon' color={colors.success} name='checkmark' size={30} />}
                                            </View>
                                            <Text style={{
                                                fontFamily: fonts.secondary[600]
                                            }}>SM</Text>
                                        </View>
                                    </TouchableWithoutFeedback>

                                    <TouchableWithoutFeedback onPress={() => {
                                        let tmp = [...soal];
                                        if (tmp[idx].value == 3) {
                                            tmp[idx].value = 0;
                                        } else {
                                            tmp[idx].value = 3;
                                        }
                                        let no = parseFloat(idx) + parseFloat(1);
                                        setKirim({
                                            ...kirim,
                                            ['n' + no]: 3
                                        })
                                        setSoal(tmp);
                                    }}>
                                        <View style={{
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>

                                            <View style={{
                                                width: 40,
                                                height: 40,
                                                borderWidth: 1,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderRadius: 5,
                                            }}>
                                                {soal[idx].value == 3 && <Icon type='ionicon' color={colors.success} name='checkmark' size={30} />}
                                            </View>
                                            <Text style={{
                                                fontFamily: fonts.secondary[600]
                                            }}>MM</Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </View>
                            </View>
                        )
                    })}
                    <MyGap jarak={20} />
                    <MyInput keyboardType='number-pad' label="Tinggi Badan (cm)" onChangeText={x => {
                        setKirim({
                            ...kirim,
                            tinggi_badan: x
                        })
                    }} />
                    <MyGap jarak={20} />
                    <MyInput keyboardType='number-pad' label="Berat Badan (kg)" onChangeText={x => {
                        setKirim({
                            ...kirim,
                            berat_badan: x
                        })
                    }} />
                    <View style={{
                        borderBottomWidth: 1,
                        marginVertical: 20,

                    }} />

                    <MyInput keyboardType='number-pad' label="Sakit" onChangeText={x => {
                        setKirim({
                            ...kirim,
                            sakit: x
                        })
                    }} />
                    <MyGap jarak={20} />
                    <MyInput keyboardType='number-pad' label="Izin" onChangeText={x => {
                        setKirim({
                            ...kirim,
                            izin: x
                        })
                    }} />
                    <MyGap jarak={20} />
                    <MyInput keyboardType='number-pad' label="Alfa" onChangeText={x => {
                        setKirim({
                            ...kirim,
                            alfa: x
                        })
                    }} />
                    <View style={{
                        borderBottomWidth: 1,
                        marginVertical: 20,

                    }} />
                    <MyInput multiline label="Rekomendasi" onChangeText={x => {
                        setKirim({
                            ...kirim,
                            rekomendasi: x
                        })
                    }} />
                    <MyGap jarak={20} />

                </View>

                <MyGap jarak={20} />
                <MyButton onPress={sendServer} title="Simpan" Icons="download" />
                <MyGap jarak={40} />

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})