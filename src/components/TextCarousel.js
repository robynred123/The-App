import React from "react";
import { ScrollView } from "react-native";
import DataItem from "./DataItem";

export const TextCarousel = (props) => {
  const { data } = props;

    return (
         <ScrollView 
          horizontal 
          pagingEnabled 
          showsHorizontalScrollIndicator={false}
          overScrollMode='always'
        >
          {data.map((i) => {
              return <DataItem key={i.key} point={i.point} />;
          })}
        </ScrollView> 
    );
}; 