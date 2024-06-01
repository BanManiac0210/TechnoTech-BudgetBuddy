import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { COLORS } from "../constants";

export default function IncomeExpenseTag({incomeValue, expenseValue}) {
    const formattedValue = ({value}) => {
        return value.toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND', // You can change the currency as needed
            minimumFractionDigits: 0,
        })
    }
    return (
        <View className="flex-row justify-start items-stretch w-full space-x-3 rounded-lg my-[10]">
            <View className="flex-col flex-1 items-start py-2.5 px-5 space-y-2 bg-slate-300 rounded-lg">
              <View className="flex-row items-center space-x-2 justify-start">
                <Icon name="sign-in" size={20} color={COLORS.purple_primary} />
                <Text className="text-sm text-center font-bold text-violet-900">Thu nhập tháng:</Text>
              </View>
              <Text className="text-2xl text-center font-bold text-violet-900">{formattedValue({value:parseInt(incomeValue)})}</Text>
            </View>

            <View className="flex-col flex-1 items-start py-2.5 px-5 space-y-2 bg-slate-300 rounded-lg">
              <View className="flex-row items-center space-x-2 justify-start">
                <Icon name="sign-out" size={20} color={COLORS.purple_primary} />
                <Text className="text-sm text-center font-bold text-violet-900">Chi tiêu tháng:</Text>
              </View>
              <Text className="text-2xl text-center font-bold text-violet-900">{formattedValue({value:parseInt(expenseValue)})}</Text>
            </View>
        </View>
    );
}
