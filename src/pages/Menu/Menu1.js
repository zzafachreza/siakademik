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
export default function Menu1({ navigation, route }) {
    const [loading, setLoading] = useState(false);



    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white
        }}>

            <MyHeader judul="Input Nilai" onPress={() => navigation.goBack()} />

            <View style={{
                flex: 1,
                backgroundColor: colors.background,
                padding: 20,
                justifyContent: 'flex-start'
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('Menu1a')}>
                        <View style={{
                            flex: 1,
                            height: 130,
                            borderRadius: 10,
                            marginRight: 10,
                            backgroundColor: colors.primary,
                            padding: 10,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Image source={require('../../assets/a3.png')} style={{
                                width: windowWidth / 5,
                                height: windowWidth / 5,
                                marginBottom: 10,
                            }} />
                            <Text style={{
                                fontFamily: fonts.secondary[600],
                                color: colors.white,
                                fontSize: 12,
                                textAlign: 'center'
                            }}>Petunjuk Penggunaan</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('Menu1b')}>
                        <View style={{
                            flex: 1,
                            borderRadius: 10,
                            height: 130,
                            marginLeft: 10,
                            backgroundColor: colors.primary,
                            padding: 10,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Image source={require('../../assets/a2.png')} style={{
                                width: windowWidth / 5,
                                height: windowWidth / 5,
                                marginBottom: 10,
                            }} />
                            <Text style={{
                                fontFamily: fonts.secondary[600],
                                color: colors.white,
                                fontSize: 12,
                                textAlign: 'center'
                            }}>Keterangan Diri Anak</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
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