import { ActivityIndicator, FlatList, Image, Linking, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MyDimensi, colors, fonts, windowHeight, windowWidth } from '../../utils'
import { Icon } from 'react-native-elements';
import YoutubePlayer from "react-native-youtube-iframe";
import axios from 'axios';
import { apiURL } from '../../utils/localStorage';
import moment from 'moment';
import { MyHeader } from '../../components';
import { useIsFocused, useNavigation } from '@react-navigation/native';






export default function Menu1b({ navigation, route }) {
    const item = route.params;
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    const getDataTransaksi = () => {
        setLoading(true);
        axios.post(apiURL + 'siswa').then(res => {
            console.log(res.data);
            setData(res.data);
            setTMP(res.data);
        }).finally(() => {
            setLoading(false)
        })
    }

    const isFocus = useIsFocused();
    useEffect(() => {
        if (isFocus) {
            getDataTransaksi();
        }

    }, [isFocus]);

    const __renderItem = ({ item }) => {
        return (

            <TouchableWithoutFeedback onPress={() => navigation.navigate('Siswa', item)}>
                <View style={{
                    flex: 1,
                    position: 'relative',
                    backgroundColor: colors.primary,
                    padding: 10,
                    borderRadius: 10,
                    margin: 4,
                    overflow: 'hidden'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontFamily: fonts.secondary[800],
                            color: colors.white,
                            fontSize: MyDimensi / 4,
                            flex: 1,
                        }}>Nama Lengkap</Text>
                        <Text style={{
                            flex: 1,
                            fontFamily: fonts.secondary[600],
                            color: colors.white,
                            fontSize: MyDimensi / 4
                        }}>{item.nama_lengkap}</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontFamily: fonts.secondary[800],
                            color: colors.white,
                            fontSize: MyDimensi / 4,
                            flex: 1,
                        }}>Nomor Induk </Text>
                        <Text style={{
                            flex: 1,
                            fontFamily: fonts.secondary[600],
                            color: colors.white,
                            fontSize: MyDimensi / 4
                        }}>{item.nomor_induk}</Text>
                    </View>

                </View>
            </TouchableWithoutFeedback>

        )
    }


    const [key, setKey] = useState('');
    const [TMP, setTMP] = useState({});

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white
        }}>

            <MyHeader judul="Keterangan Diri Anak" onPress={() => navigation.goBack()} />
            {!loading &&
                <View style={{
                    flex: 1,
                    paddingHorizontal: 20,
                }}>
                    <View style={{
                        position: 'relative'
                    }}>
                        {key.length > 0 &&

                            <TouchableWithoutFeedback onPress={() => {
                                setKey(''); setData(TMP);
                            }}>
                                <View style={{
                                    position: 'absolute',
                                    zIndex: 99,
                                    top: 10,
                                    right: 10,
                                }}>
                                    <Icon type='ionicon' name='close' color={colors.secondary} />
                                </View>
                            </TouchableWithoutFeedback>}
                        <View style={{
                            position: 'absolute',
                            top: 10,
                            left: 10,
                        }}>
                            <Icon type='ionicon' name='search' color={colors.primary} />
                        </View>
                        <TextInput value={key} onChangeText={x => {
                            setKey(x);
                            if (x.length > 0) {
                                let TMPSrc = data.filter(i => i.judul.toLowerCase().indexOf(x.toLowerCase()) > -1);
                                if (TMPSrc.length > 0) {
                                    setData(TMPSrc);
                                }
                            } else {
                                setData(TMP);
                            }
                        }} placeholder='Pencarian . . .' style={{
                            height: 45,
                            borderWidth: 1,
                            marginBottom: 10,
                            borderRadius: 30,
                            paddingLeft: 40,
                            borderColor: colors.primary,
                            fontFamily: fonts.secondary[600],
                            fontSize: MyDimensi / 4
                        }} />
                    </View>
                    <FlatList data={data} numColumns={1} showsVerticalScrollIndicator={false} renderItem={__renderItem} />

                    <TouchableOpacity onPress={() => navigation.navigate('SiswaAdd')} style={{
                        width: 60,
                        position: 'absolute',
                        bottom: 20,
                        right: 20,
                        height: 60,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: colors.primary,
                        borderRadius: 40,
                    }}>
                        <Icon type='ionicon' name='add' size={40} color={colors.white} />
                    </TouchableOpacity>
                </View>
            }
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