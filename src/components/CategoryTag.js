import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { COLORS } from "../constants";

export default function CategoryTag({tagName, tagIconName}) {
    
    return (
        <View className="px-2 py-[6] bg-purple-400 rounded-lg flex-row items-center space-x-2 mr-1">
            <Icon name={tagIconName} size={16} color="white" />
            <Text className="font-bold text-white">{tagName}</Text>
        </View>
    );
}
