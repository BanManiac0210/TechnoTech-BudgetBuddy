import React from "react";
import { View, Text, ScrollView } from "react-native";
import WrappedIcon from "./WrappedIcon";

export default function IconPicker({iconData, onUpdateIcon}) {
    return (
        <View className="w-full flex-col mt-2.5">
            <Text className="font-bold text-lg text-purple-900 mb-2">Chọn icon</Text>
            <ScrollView contentContainerStyle={{opacity:1}} horizontal={true} showsHorizontalScrollIndicator={false}>
                {iconData.map((item, index) => (
                    <WrappedIcon key={index} iconName={item.iconName} updateIcon={onUpdateIcon}/>
                ))}
            </ScrollView>
        </View>
    )
}