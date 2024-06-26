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

export default function AbsenDetail({ navigation, route }) {
    const item = route.params;
    const webURL = `https://siakademik.okeadmin.com/home/absen?latitude=${item.latitude}&longitude=${item.longitude}`;
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white
        }}>
            <MyHeader judul="Absen Detail" onPress={() => navigation.goBack()} />

            <ScrollView>
                <View style={{
                    position: 'relative',
                    width: 300,
                    height: 400,
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
                        width: 300,
                        height: 400,
                    }} source={{
                        uri: item.image,
                    }} />
                    {item.image !== 'https://zavalabs.com/nogambar.jpg' &&

                        <View style={{
                            left: 5,
                            position: 'absolute',
                            bottom: 10,
                        }}>
                            <Text style={{
                                fontFamily: fonts.secondary[800],
                                color: colors.white,
                                fontSize: 14,
                            }}>Absen {item.jenis}</Text>
                            <Text style={{
                                fontFamily: fonts.secondary[600],
                                color: colors.white,
                                fontSize: 18,
                            }}>{moment(item.tanggal).format('dddd, DD MMMM YYYY')} {item.jam}</Text>
                            <Text style={{
                                fontFamily: fonts.secondary[600],
                                color: colors.white,
                                fontSize: 14,
                            }}>{item.latitude}, {item.longitude}</Text>

                        </View>
                    }
                </View>
                <View style={{
                    padding: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: colors.border
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        color: colors.black,
                        fontSize: 14,
                    }}>Nama</Text>
                    <Text style={{
                        fontFamily: fonts.secondary[400],
                        color: colors.black,
                        fontSize: 14,
                    }}>{item.nama}</Text>
                </View>
                <View style={{
                    padding: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: colors.border
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        color: colors.black,
                        fontSize: 14,
                    }}>Jenis</Text>
                    <Text style={{
                        fontFamily: fonts.secondary[400],
                        color: colors.black,
                        fontSize: 14,
                    }}>Aben {item.jenis}</Text>
                </View>
                <WebView source={{ uri: `${webURL}` }} style={{ height: windowHeight / 2 }} />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})