import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { getColorByID, getIconByID } from "../../services/componentService";

export default function PickableTag({tagName, tagId, setText, setTagID, type}) {
    return (
        <TouchableOpacity 
            className="px-2 py-[6] rounded-lg flex-row items-center space-x-2 mr-1"
            style={{backgroundColor: (type == "MS" ? "#D8BFD8" : "#9370DB")}}
            onPress={() => {
                setText(tagName)
                setTagID(tagId)
            }}
        >
            <Icon name={(type == "MS" ? "money" : "cutlery")} size={16} color="white" />
            <Text className="font-bold text-white">{tagName}</Text>
        </TouchableOpacity>
    );
}
