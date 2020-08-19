import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
/*
can add in on ejecting, package not accepted by Expo
prevents passing in navigation per button
import { useNavigation } from '@react-navigation/native';
*/

export const MenuButton = (props) => {
    //const navigation = useNavigation()
    const { title, navigateTo, navigation } = props
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate(navigateTo)}
                style={styles.button}
            >
               <Text> {title} </Text> 
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent:'space-around',
        padding: 10
    },
    button: {
        backgroundColor: '#b067d8',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        borderRadius: 15
    }
});