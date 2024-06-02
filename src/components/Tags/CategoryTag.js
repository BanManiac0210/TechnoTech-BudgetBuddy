import { View, Text } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

export default function CategoryTag({tagName, tagIconName, tagColor, tagID}) {
    return (
        <View 
            className="px-2 py-[6] rounded-lg flex-row items-center space-x-2 mr-1"
            style={{backgroundColor: tagColor}}
        >
            <Icon name={tagIconName} size={16} color="white" />
            <Text className="font-bold text-white">{tagName}</Text>
        </View>
    );
}
