import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import DataItem from "./DataItem";

export const TextCarousel = (props) => {
  const { data, itemsPerInterval } = props;

    return (
        <ScrollView 
          horizontal 
          pagingEnabled 
          showsHorizontalScrollIndicator={false}
        >
          {data.map((i) => {
              return <DataItem key={i.key} point={i.point} />;
          })}
        </ScrollView>
    );
}; 

const styles = StyleSheet.create({
  container: {
  },
});
