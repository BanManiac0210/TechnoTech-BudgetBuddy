import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import formattedValue from "./formattedValue";
import Icon from "react-native-vector-icons/FontAwesome"
import { COLORS } from "../constants";

export default function CustomNumpad({initValue, updateValue}) {
    return (
        <View className="flex-1 pb-2 mt-2 ">
            <Text className="font-bold text-lg text-purple-900 mb-2">Chỉnh số tiền</Text>
            <Text className="font-bold text-4xl text-purple-900 mb-2 text-center">{formattedValue({value:initValue})}</Text> 
            <View className="flex-col items-center justify-center space-y-2">
                <View className="flex-row items-center justify-center space-x-2">
                    <TouchableOpacity
                        className="w-[70] h-[50] rounded-lg bg-purple-200 items-center justify-center"
                        onPress={() => updateValue(initValue * 10 + 1)}
                    >
                        <Text className="font-bold text-4xl text-purple-900 leading-none">1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        className="w-[70] h-[50] rounded-lg bg-purple-200 items-center justify-center"
                        onPress={() => updateValue(initValue * 10 + 2)}
                    >
                        <Text className="font-bold text-4xl text-purple-900 leading-none">2</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        className="w-[70] h-[50] rounded-lg bg-purple-200 items-center justify-center"
                        onPress={() => updateValue(initValue * 10 + 3)}
                    >
                        <Text className="font-bold text-4xl text-purple-900 leading-none">3</Text>
                    </TouchableOpacity>
                </View>

                <View className="flex-row items-center justify-center space-x-2">
                    <TouchableOpacity
                        className="w-[70] h-[50] rounded-lg bg-purple-200 items-center justify-center"
                        onPress={() => updateValue(initValue * 10 + 4)}
                    >
                        <Text className="font-bold text-4xl text-purple-900 leading-none">4</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        className="w-[70] h-[50] rounded-lg bg-purple-200 items-center justify-center"
                        onPress={() => updateValue(initValue * 10 + 5)}
                    >
                        <Text className="font-bold text-4xl text-purple-900 leading-none">5</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        className="w-[70] h-[50] rounded-lg bg-purple-200 items-center justify-center"
                        onPress={() => updateValue(initValue * 10 + 6)}
                    >
                        <Text className="font-bold text-4xl text-purple-900 leading-none">6</Text>
                    </TouchableOpacity>
                </View>

                <View className="flex-row items-center justify-center space-x-2">
                    <TouchableOpacity
                        className="w-[70] h-[50] rounded-lg bg-purple-200 items-center justify-center"
                        onPress={() => updateValue(initValue * 10 + 7)}
                    >
                        <Text className="font-bold text-4xl text-purple-900 leading-none">7</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        className="w-[70] h-[50] rounded-lg bg-purple-200 items-center justify-center"
                        onPress={() => updateValue(initValue * 10 + 8)}
                    >
                        <Text className="font-bold text-4xl text-purple-900 leading-none">8</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        className="w-[70] h-[50] rounded-lg bg-purple-200 items-center justify-center"
                        onPress={() => updateValue(initValue * 10 + 9)}
                    >
                        <Text className="font-bold text-4xl text-purple-900 leading-none">9</Text>
                    </TouchableOpacity>
                </View>

                <View className="flex-row items-center justify-center space-x-2">
                    <TouchableOpacity
                        className="w-[70] h-[50] rounded-lg bg-purple-200 items-center justify-center"
                        onPress={() => updateValue(0)}
                    >
                        <Icon name="times" size={30} color={COLORS.purple_primary}/>
                    </TouchableOpacity>

                    <TouchableOpacity
                        className="w-[70] h-[50] rounded-lg bg-purple-200 items-center justify-center"
                        onPress={() => updateValue(initValue * 10)}
                    >
                        <Text className="font-bold text-4xl text-purple-900 leading-none">0</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        className="w-[70] h-[50] rounded-lg bg-purple-200 items-center justify-center"
                        onPress={() => updateValue(Math.floor(initValue /10))}
                    >
                        <Icon name="reply" size={25} color={COLORS.purple_primary}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}