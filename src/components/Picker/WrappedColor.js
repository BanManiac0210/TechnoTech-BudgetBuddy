import React from "react";
import { TouchableOpacity } from "react-native";

export default function WrappedColor({colorHex, updateColor}) {
    return (
        <TouchableOpacity  
            className="items-center justify-center h-[50] w-[50] mr-2 rounded-full"
            style={{backgroundColor: colorHex}}
            onPress={() => {updateColor(colorHex)}}
        >
        </TouchableOpacity>
    )
}