import React from "react";
import { ScrollView, View, Text, StyleSheet, Dimensions } from "react-native";

let screenWidth = Dimensions.get('window').width;

export const TextCarousel = (props) => {
  const { data } = props;

    return (
      <View>
        <ScrollView 
          horizontal 
          pagingEnabled={true}
          showsHorizontalScrollIndicator={true}
        >
          {data.map((item, i) => (
              <View key={item.key} style={styles.textContainer}> 
                <Text style={styles.textStyle}> 
                  {item.point} 
                </Text> 
              </View>
          ))}
        </ScrollView> 
      </View>
    );
}; 

const styles = StyleSheet.create({
  textContainer: {
    width: screenWidth,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  textStyle:{
    textAlign: 'center',
    fontSize: 18
  }
})