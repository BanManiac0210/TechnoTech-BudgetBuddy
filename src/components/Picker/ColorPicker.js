import React from "react";
import {View, Text, ScrollView } from "react-native";
import WrappedColor from "./WrappedColor";

export default function ColorPicker({colorData, onUpdateColor}) {
    return (
        <View className="w-full flex-col mt-2.5">
            <Text className="font-bold text-lg text-purple-900 mb-2">Chọn màu</Text>
            <ScrollView contentContainerStyle={{opacity:1}} horizontal={true} showsHorizontalScrollIndicator={false}>
                {colorData.map((item, index) => (
                    <WrappedColor key={index} colorHex={item.color} updateColor={onUpdateColor}/>
                ))}
            </ScrollView>
        </View>
    )
}