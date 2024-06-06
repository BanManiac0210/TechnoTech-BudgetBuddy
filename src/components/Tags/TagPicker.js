import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import PickableTag from "./PickableTag";
import { COLORS, FDATA } from "../../constants";

export default function TagPicker({tagInfo, tagData, setTagId, type}) {
    const [pickedText, setPickedText] = useState("")

    return (
        <View className="w-full flex-col mt-2.5">
            <Text className="font-bold text-lg text-purple-900 mb-2">{tagInfo}: {pickedText}</Text>
            <ScrollView contentContainerStyle={{opacity:1}} horizontal={true} showsHorizontalScrollIndicator={false}>
                {tagData.map((item, index) => (
                    <PickableTag 
                        key={index} 
                        tagName={item.name}
                        tagId={item._id}
                        setText={setPickedText}
                        setTagID={setTagId}
                        type={type}
                    />
                ))}
            </ScrollView>
        </View>
    )
}