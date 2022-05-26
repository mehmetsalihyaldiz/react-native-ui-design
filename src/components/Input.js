import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    Image,
    View,
    TextInput
} from 'react-native';

const Input = (props) => {

    const { title, password } = props

    return (
        <View style={{ marginBottom: 15 }}>
            <View style={{ marginHorizontal: 50 }}>
                <Text style={{ color: '#7D90AE' }}>{title}</Text>
            </View>
            <View style={{ marginHorizontal: 50 }}>
                <TextInput secureTextEntry={password ? true : false} style={{ borderBottomColor: '#7D90AE', borderBottomWidth: 1, color: '#EAF7FF', paddingLeft: 0, paddingBottom: 3, fontSize: 18 }} />
            </View>
        </View>
    )

}

export default Input