import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import CategoryTag from "../Tags/CategoryTag.js";
import formattedValue from "../formattedValue.js";

export default function HistoryCardMS({
    cateName,
    cateIcon, 
    cateColor,
    date,
    value,
    description,
    type
}) {
    return (
        <View className="flex-col flex-1 p-2.5 bg-blue-100 rounded-lg mb-2.5 border-gray-400 border-2">
            <ScrollView className="flex-row  rounded-lg" horizontal={true} showsHorizontalScrollIndicator={false}>
                <CategoryTag tagName={cateName} tagIconName={cateIcon} tagColor={cateColor}/>
                <Text className="text-lg font-bold text-purple-600">| {date}</Text>
            </ScrollView>
            <Text className="italic font-bold text-lg text-blue-800">{description}</Text>
            <Text className="font-bold text-xl text-red-600">{formattedValue({value:parseInt(value)})} | {type}</Text>
        </View>
    );
}