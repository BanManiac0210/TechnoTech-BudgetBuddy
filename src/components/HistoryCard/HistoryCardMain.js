import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import CategoryTag from "../Tags/CategoryTag.js";
import formattedValue from "../formattedValue.js";

export default function HistoryCardMain({
    sourceName,
    sourceIcon, 
    sourceColor,
    cateName, 
    cateIcon, 
    cateColor,
    date,
    value,
    description,
    type
}) {
    const dateObject = new Date(date);
    return (
        <View className="flex-col flex-1 p-2.5 bg-blue-100 rounded-lg mb-2.5 border-gray-300 border-2">
            <ScrollView className="flex-row rounded-lg" horizontal={true} showsHorizontalScrollIndicator={false}>
                <CategoryTag tagName={cateName} tagIconName={cateIcon} tagColor={cateColor}/>
                <CategoryTag tagName={sourceName} tagIconName={sourceIcon} tagColor={sourceColor}/>
                <Text className="text-lg font-bold text-purple-600">| {dateObject.toLocaleDateString()}</Text>
            </ScrollView>
            <Text className="italic font-bold text-lg text-blue-800">{description}</Text>
            <Text 
                className="font-bold text-xl"
                style={{color:(type == "Thu nhập" ? "blue" : "red")}}
            >{formattedValue({value:parseInt(value)})} | {type}
            </Text>
        </View>
    );
}