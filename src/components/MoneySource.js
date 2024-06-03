import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { COLORS } from "../constants";
import formattedValue from "./formattedValue";
import { useNavigation } from "@react-navigation/native";

export default function MoneySource({
  iconType,
  moneySourceName,
  moneySourceID,
  balance,
}) {
  const navigation = useNavigation();
  return (
    <View className="flex-row justify-start w-full bg-blue-100 px-5 pt-2 pb-3 space-x-3 rounded-lg mb-2.5 border-gray-300 border-2">
      <View className="flex-col items-start pt-2.5 space-y-1">
        <View className="flex-row items-start space-x-2 justify-start">
          <Icon name={iconType} size={30} color={COLORS.purple_primary} />
          <Text className="text-lg text-center font-bold text-violet-900">
            {moneySourceName}
          </Text>
        </View>
        <Text className="text-2xl text-center font-bold text-violet-900">
          {formattedValue({ value: parseInt(balance) })}
        </Text>
      </View>
      <View className="justify-center items-end flex-1">
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("MoneySourceDetailScreen", {
              moneySourceID: { moneySourceID },
            });
          }}
        >
          <Icon name="pencil" size={45} color={COLORS.purple_primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
