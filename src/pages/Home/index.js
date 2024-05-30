import { Alert, StyleSheet, Text, View, Image, PermissionsAndroid, FlatList, ActivityIndicator, Dimensions, ImageBackground, TouchableWithoutFeedback, TouchableNativeFeedback, Linking } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { apiURL, getData, MYAPP, storeData } from '../../utils/localStorage';
import { MyDimensi, colors, fonts, windowHeight, windowWidth } from '../../utils';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { NavigationRouteContext, useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import 'intl';
import 'intl/locale-data/jsonp/en';
import moment from 'moment';
import 'moment/locale/id';
import MyCarouser from '../../components/MyCarouser';
import { Rating } from 'react-native-ratings';
import { MyGap, MyHeader } from '../../components';
import GetLocation from 'react-native-get-location';
import ProgressCircle from 'react-native-progress-circle'
export default function Home({ navigation, route }) {



  const [user, setUser] = useState({});
  const isFocus = useIsFocused();
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [comp, setComp] = useState({});
  const [loading, setLoading] = useState(true);
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
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


  const _getTransaction = async () => {

    getData('user').then(u => {
      setUser(u);
      axios.post(apiURL + 'formulir', {
        fid_user: u.id
      }).then(res => {
        console.log(res.data);
        setData(res.data);
      })
    })




  }


  useEffect(() => {

    requestCameraPermission();


    axios.post(apiURL + 'company').then(res => {

      setComp(res.data.data);

    });


    if (isFocus) {
      _getTransaction();
    }
  }, [isFocus]);

  const [lokasi, setLokasi] = useState({
    lat: 0,
    long: 0
  })




  return (

    <View style={{
      flex: 1,
      width: "100%",
      height: "100%",



    }}>

      {/* HEADERS */}
      <View style={{
        flexDirection: "row",
        backgroundColor: colors.primary,
        padding: 10,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        justifyContent: 'space-between',
        alignItems: 'center'


      }}>

        <View>
          <Text style={{
            fontFamily: fonts.primary[600],
            color: colors.white,

          }}>Halo, {user.nama_lengkap}</Text>
          <Text style={{ fontFamily: fonts.primary[800], color: colors.white, fontSize: 20 }}>
            SISTEM INFORMASI AKADEMIK
          </Text>
        </View>

        <View>
          <TouchableNativeFeedback >
            <View style={{ flexDirection: "row", padding: 10, borderColor: "#cccccc" }}>
              <Image source={require('../../assets/logo.png')} style={{
                width: 50, height: 50,
              }}
              />
            </View>

          </TouchableNativeFeedback>
        </View>

      </View>
      <MyCarouser />
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
          <TouchableNativeFeedback onPress={() => navigation.navigate('Absen')}>
            <View style={{
              flex: 1,
              borderRadius: 10,
              marginRight: 10,
              backgroundColor: colors.primary,
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Image source={require('../../assets/a1.png')} style={{
                width: 100,
                height: 100,
                marginBottom: 10,
              }} />
              <Text style={{
                fontFamily: fonts.secondary[600],
                color: colors.white,
                fontSize: 14,
              }}>Absen Guru</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => navigation.navigate('Menu1')}>
            <View style={{
              flex: 1,
              borderRadius: 10,
              marginLeft: 10,
              backgroundColor: colors.primary,
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Image source={require('../../assets/a2.png')} style={{
                width: 100,
                height: 100,
                marginBottom: 10,
              }} />
              <Text style={{
                fontFamily: fonts.secondary[600],
                color: colors.white,
                fontSize: 14,
              }}>Input Nilai</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>



    </View>

  )
}

const styles = StyleSheet.create({
  tulisan: {
    fontSize: 14,
    marginBottom: 10,
    fontFamily: fonts.secondary[600],
    color: colors.black,
    textAlign: 'justify'
  },
  tulisanJudul: {
    fontSize: 16,
    marginBottom: 10,
    fontFamily: fonts.secondary[800],
    color: colors.black,
    textAlign: 'justify'
  }
})