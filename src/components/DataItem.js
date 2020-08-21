import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export const DataItem = (props) => {
    
    const { point } = props;

    return (
        <View style={styles.Container}>
            <View style={styles.textWidth}>
                <Text style={styles.textStyle}>
                    { point }
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        
        alignItems: 'center',
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    textWidth: {
        width: '30%',
    },
    textStyle: {
        fontSize: 20,
    }
  });

export default DataItem;