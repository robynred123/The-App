import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export const DataItem = (props) => {

  const { point } = props;

    return (
        <View style={styles.Container}>
            <Text style={styles.textStyle}>
                { point }
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        borderWidth: 1,
        flexDirection: 'column',
    },
    textStyle: {
        textAlign: 'left',
        fontSize: 20,
    }
  });

export default DataItem;