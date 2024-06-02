import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { COLORS, FDATA } from "../../constants";
import formattedValue from "../formattedValue";
import { useNavigation } from "@react-navigation/native";

export default function BudgetExpense({iconType, moneySourceName, balance}) {
    const navigation = useNavigation()
    return (
      <TouchableOpacity onPress={() => {navigation.navigate('BudgetDetailScreen')}}>
        <View className="flex-row justify-start w-full bg-blue-100 px-5 pt-2 pb-3 space-x-3 rounded-lg mb-2.5 border-gray-400 border-2 shadow-lg" style={{ 
          shadowColor: '#000', 
          shadowOffset: { width: 0, height: 2 }, 
          shadowOpacity: 0.25, 
          shadowRadius: 3.84, 
          elevation: 5 
        }}>
          
            <View className="flex-col items-start pt-2.5 space-y-1">
              {/* CATEGORY */}
              <View className="flex-row items-start space-x-2 justify-start">
                <Icon name={iconType} size={30} color={COLORS.purple_primary} />
                <Text className="text-lg text-center font-bold text-violet-900">{moneySourceName}</Text>
                <Icon name={iconType} size={30} color={COLORS.purple_primary} />
              </View>
              
              <Text className="text-2xl text-center font-bold text-violet-900">{formattedValue({value:parseInt(balance)})}</Text>
              <Text className="text-lg text-center font-bold text-violet-900">Đã chi tiêu: </Text>
            </View>
        </View>
      </TouchableOpacity>
    )
}