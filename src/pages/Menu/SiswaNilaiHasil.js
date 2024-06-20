import { Alert, StyleSheet, Text, View, Image, FlatList, ActivityIndicator, Dimensions, BackHandler, Linking } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { apiURL, getData, MYAPP, storeData, webURL } from '../../utils/localStorage';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { showMessage } from 'react-native-flash-message';
import Sound from 'react-native-sound';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { MyButton, MyGap, MyHeader, MyInput } from '../../components';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import { FloatingAction } from "react-native-floating-action";
import 'intl';
import 'intl/locale-data/jsonp/en';
import Webview from "react-native-webview";
export default function SiswaNilaiHasil({ navigation, route }) {
    const item = route.params;
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white
        }}>
            <MyHeader judul="Hasi Nilai Rapor" onPress={() => navigation.goBack()} />
            <View style={{
                flex: 1,
            }}>
                <Webview injectedJavaScript='window.print()' source={{
                    uri: 'https://siakademik.okeadmin.com/nilai/detail/' + item.id
                }} />
            </View>
            <MyButton radius={0} title="Print" warna={colors.danger} onPress={() => Linking.openURL('https://siakademik.okeadmin.com/nilai/detail/' + item.id)} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})