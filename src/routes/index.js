import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Splash,
  Home,
  Login,
  Register,
  Account,
  AccountEdit,
  Konten,
  TanyaJawab,
  Notifikasi,
  Artikel,
  ArtikelDetail,
  Video,
  VideoDetail,
  Resep,
  ResepDetail,
  AsupanMpasi,
  AsupanAsi,
  StatusGizi,
  StatusGiziHasil,
  KursionerVark,
  GayaBelajarVisual,
  GayaBelajarAudio,
  GayaBelajarReading,


  GayaBelajarKinaesthetic,
  Diagnosa2,
  Periksagigimu,
  Gigilubang,
  TumpatanGigi,
  PaketUmrah,
  Pendaftaran,
  UpdateSeat,
  Pembayaran,
  Saldoku,
  DataJamaah,
  DataJamaah2,
  Royalti,
  Maps,
  FormulirEdit,
  Menu1,
  Menu1a,
  Menu1b,
  Absen,
  AbsenData,
  Siswa,
  SiswaNilai,
  SiswaNilaiHasil,
  AbsenDetail,
  SiswaAdd,
  SiswaEdit,


} from '../pages';
import { colors } from '../utils';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../components';
import Diagnosa from '../pages/Diagnosa';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator initialRouteName='Produk' tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="AbsenData" component={AbsenData} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default function Router() {
  return (
    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="AbsenDetail"
        component={AbsenDetail}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="SiswaAdd"
        component={SiswaAdd}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="SiswaEdit"
        component={SiswaEdit}
        options={{
          headerShown: false,
        }}
      />



      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          // headerTitle: 'Detail',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />


      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
          headerTitle: 'Daftar Pengguna',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="Maps"
        component={Maps}
        options={{
          headerShown: false,

        }}
      />



      <Stack.Screen
        name="Pendaftaran"
        component={Pendaftaran}
        options={{
          headerShown: false,

        }}
      />


      <Stack.Screen
        name="UpdateSeat"
        component={UpdateSeat}
        options={{
          headerShown: false,

        }}
      />


      <Stack.Screen
        name="Menu1"
        component={Menu1}
        options={{
          headerShown: false,

        }}
      />
      <Stack.Screen
        name="Menu1a"
        component={Menu1a}
        options={{
          headerShown: false,

        }}
      />
      <Stack.Screen
        name="Menu1b"
        component={Menu1b}
        options={{
          headerShown: false,

        }}
      />

      <Stack.Screen
        name="Absen"
        component={Absen}
        options={{
          headerShown: false,

        }}
      />


      <Stack.Screen
        name="AbsenData"
        component={AbsenData}
        options={{
          headerShown: false,

        }}
      />

      <Stack.Screen
        name="Siswa"
        component={Siswa}
        options={{
          headerShown: false,

        }}
      />

      <Stack.Screen
        name="SiswaNilai"
        component={SiswaNilai}
        options={{
          headerShown: false,

        }}
      />

      <Stack.Screen
        name="SiswaNilaiHasil"
        component={SiswaNilaiHasil}
        options={{
          headerShown: false,

        }}
      />


      <Stack.Screen
        name="Pembayaran"
        component={Pembayaran}
        options={{
          headerShown: false,

        }}
      />

      <Stack.Screen
        name="Saldoku"
        component={Saldoku}
        options={{
          headerShown: false,

        }}
      />


      <Stack.Screen
        name="FormulirEdit"
        component={FormulirEdit}
        options={{
          headerShown: false,

        }}
      />
      <Stack.Screen
        name="Datajamaah"
        component={DataJamaah}
        options={{
          headerShown: false,

        }}
      />

      <Stack.Screen
        name="DataJamaahDetail"
        component={DataJamaah2}
        options={{
          headerShown: false,

        }}
      />



      <Stack.Screen
        name="BelajarVisualAudio"
        component={GayaBelajarAudio}
        options={{
          headerShown: false,

        }}
      />



      <Stack.Screen
        name="BelajarReading"
        component={GayaBelajarReading}
        options={{
          headerShown: false,

        }}
      />





      <Stack.Screen
        name="BelajarKinaesthetic"
        component={GayaBelajarKinaesthetic}
        options={{
          headerShown: false,

        }}
      />




      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,

        }}
      />
      <Stack.Screen
        name="AccountEdit"
        component={AccountEdit}
        options={{
          headerShown: false,
          headerTitle: 'Edit Profile',
          headerStyle: {
            backgroundColor: colors.white,
          },
          headerTintColor: '#000',
        }}
      />


      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Royalti"
        component={Royalti}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ArtikelDetail"
        component={ArtikelDetail}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Video"
        component={Video}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="VideoDetail"
        component={VideoDetail}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Resep"
        component={Resep}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="ResepDetail"
        component={ResepDetail}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="AsupanMpasi"
        component={AsupanMpasi}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="AsupanAsi"
        component={AsupanAsi}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="StatusGizi"
        component={StatusGizi}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="StatusGiziHasil"
        component={StatusGiziHasil}
        options={{
          headerShown: false,
        }}
      />















    </Stack.Navigator>
  );
}
