import React from "react";
import { TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"

export default function WrappedIcon({iconName, iconId, updateIcon, updateIconId}) {
    return (
        <TouchableOpacity 
            className="items-center justify-center h-[50] w-[50] mr-2 rounded-full bg-purple-300"
            onPress={() => {
                updateIcon(iconName);
                updateIconId(iconId);
            }}
        >
            <Icon name={iconName} size={25} color="white"/>
        </TouchableOpacity>
    )
}