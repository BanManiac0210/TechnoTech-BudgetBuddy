import React, { useState } from "react";
import { View, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from "../constants/index.js";

export default function SearchBar() {
    const [text, setText] = useState('');

    const changeText = (inputText) => {
        setText(inputText)
    }

    return (
        <View className="w-full h-[50] justify-center items-center rounded-full bg-gray-300 px-3 py-2 flex-row space-x-2">
            <Icon name="search" size={25} color={COLORS.purple_primary} />
            <View className="flex-1 justify-center">
                <TextInput 
                    className=" text-blue-900 text-base"
                    placeholder="Nhập để tìm kiếm"
                    onChangeText={changeText}
                    value={text}
                />
            </View>
            <Icon name="user-circle" size={25} color={COLORS.purple_primary} />
        </View>
    );
}