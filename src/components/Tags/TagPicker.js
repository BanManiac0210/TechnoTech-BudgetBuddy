import React from "react";
import { View, Text, ScrollView } from "react-native";
import PickableTag from "./PickableTag";
import { COLORS, FDATA } from "../../constants";

export default function TagPicker({tagInfo, tagData, onPicked}) {
    return (
        <View className="w-full flex-col mt-2.5">
            <Text className="font-bold text-lg text-purple-900 mb-2">{tagInfo}</Text>
            <ScrollView contentContainerStyle={{opacity:1}} horizontal={true} showsHorizontalScrollIndicator={false}>
                {tagData.map((item, index) => (
                    <PickableTag 
                        key={index} 
                        tagName={item.tagName}
                        tagIconName={item.tagIconName}
                        tagColor={item.tagColor}
                    />
                ))}
            </ScrollView>
        </View>
    )
}