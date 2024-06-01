import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { COLORS } from "../../constants";
import CategoryTag from "../CategoryTag.js"
import formattedValue from "../formattedValue.js";

export default function HistoryCardMS({
    cateName,
    cateIcon, 
    date,
    value,
    description,
    type
}) {
    return (
        <View className="flex-col flex-1 p-2.5 bg-blue-100 rounded-lg mb-2.5">
            <ScrollView className="flex-row  rounded-lg" horizontal={true} showsHorizontalScrollIndicator={false}>
                <CategoryTag tagName={cateName} tagIconName={cateIcon}/>
                <Text className="text-lg font-bold text-purple-600">| {date}</Text>
            </ScrollView>
            <Text className="italic font-bold text-lg text-blue-800">{description}</Text>
            <Text className="font-bold text-xl text-red-600">{formattedValue({value:parseInt(value)})} | {type}</Text>
        </View>
    );
}