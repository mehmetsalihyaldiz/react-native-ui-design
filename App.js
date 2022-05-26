import React, { useEffect, useRef } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Image,
  View,
  TouchableOpacity
} from 'react-native';

import { Input } from "./src/components"

import { gsap } from 'gsap-rn';

const App = () => {

  const logoRef = useRef()

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.50 } })
    tl.fromTo(logoRef.current, { transform: { y: 0 } }, { transform: { y: -10 }, yoyo: true, repeat: -1 });
  }, [])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#314560' }}>
      <StatusBar backgroundColor="#314560" barStyle={'light-content'} />
      <TouchableOpacity style={{ position: 'absolute', top: 30, right: 30 }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ backgroundColor: 'white', width: 5, height: 5, margin: 3, borderRadius: 15 }} />
          <View style={{ backgroundColor: 'white', width: 5, height: 5, margin: 3, borderRadius: 15 }} />
          <View style={{ backgroundColor: 'white', width: 5, height: 5, margin: 3, borderRadius: 15 }} />
        </View>
      </TouchableOpacity>
      <View style={{ paddingTop: 100, paddingBottom: 50, justifyContent: 'center', alignItems: 'center' }}>
        <Image ref={logoRef} source={require('./src/assets/logo.png')} style={{ width: 100, height: 100 }} />
      </View>
      <View>
        <Input title={"E-posta"} />
      </View>
      <View style={{ marginTop: 30 }}>
        <Input title={"Şifre"} password />
      </View>
      <View style={{ marginHorizontal: 50, justifyContent: 'center', alignItems: 'center', marginBottom: 50 }}>
        <Text style={{ color: '#7D90AE' }}>{"Şifremi Unuttum"}</Text>
      </View>
      <TouchableOpacity onPress={() => {
        console.log('logged');
      }} style={{ marginHorizontal: 85, borderRadius: 50, backgroundColor: '#55F7E0', padding: 15, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: '#1A565A', fontWeight: 'bold', fontSize: 21 }}>Giriş Yap</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;
