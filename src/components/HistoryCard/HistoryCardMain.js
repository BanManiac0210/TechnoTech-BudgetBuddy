import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { COLORS } from "../../constants";
import CategoryTag from "../CategoryTag.js"

export default function HistoryCardMain({
    sourceName,
    sourceIcon, 
    cateName, 
    cateIcon, 
    date,
    value,
    description,
    type
}) {
    const formattedValue = ({value}) => {
        return value.toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND', // You can change the currency as needed
            minimumFractionDigits: 0,
        })
      }

    return (
        <View className="flex-col flex-1 p-2.5 bg-blue-100 rounded-lg mb-2.5">
            <View className="flex-row  rounded-lg items-center ">
                <CategoryTag tagName={cateName} tagIconName={cateIcon}/>
                <CategoryTag tagName={sourceName} tagIconName={sourceIcon}/>
                <Text className="text-lg font-bold text-purple-600">| {date}</Text>
            </View>
            <Text className="italic font-bold text-lg text-blue-800">{description}</Text>
            <Text className="italic font-bold text-xl text-red-600">{formattedValue({value:parseInt(value)})} | {type}</Text>
        </View>
    );
}