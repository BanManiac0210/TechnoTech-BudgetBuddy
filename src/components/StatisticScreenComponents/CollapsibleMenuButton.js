import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';
import Icon from "react-native-vector-icons/FontAwesome";
import { COLORS, FDATA } from "../../constants";
import formattedValue from "../formattedValue";
import BudgetExpense from './BudgetExpense';
import { useNavigation } from '@react-navigation/native';

export default function CollapsibleMenuButton ({iconType, budgetList, balance}) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleExpanded = () => {
    setCollapsed(!collapsed);
  };
  const navigation = useNavigation();
  const condition = FDATA.currentBalance < 0; // Example condition
return (
    
    <View className ="flex-col justify-start w-full space-x-3 rounded-lg mb-2.5 pt-2 pb-3 bg-blue-100">
      <TouchableOpacity onPress={toggleExpanded} className="flex-row justify-start w-full bg-blue-100 px-5 pt-2 pb-3 space-x-3 rounded-lg mb-2.5">
            <View className="flex-col items-start pt-2.5 space-y-1">
              <View className="flex-row items-start space-x-2 justify-start">
                <Icon name={iconType} size={30} color={COLORS.purple_primary} />
                <Text className="text-lg text-center font-bold text-violet-900">Ngân sách tháng</Text>
                {condition && <Icon name="star" size={20} color="red" style={{ marginLeft: -120 , marginTop: 4}} />}
              </View>
              <Text className="text-2xl text-center font-bold text-violet-900">{formattedValue({value:parseInt(balance)})}</Text>
              <Text className="text-lg text-center font-bold text-violet-900">Đã chi tiêu: {formattedValue({value:FDATA.currentBalance})}</Text>
            </View>
            <View className="justify-center items-end flex-1">
                <Icon name="pencil" size={45} color={COLORS.purple_primary} /> 
            </View>
      </TouchableOpacity>
      <Collapsible collapsed={collapsed} align="center" className ="pr-3">
        {FDATA.categoryList.map((item, index) => (
              <BudgetExpense
                key={index}
                iconType={item.tagIconName}
                tagColor={item.tagColor}
                categoryName={item.tagName}
                balance={FDATA.incomeValue}
                used={FDATA.expenseValue}
              />
        ))}
        <TouchableOpacity onPress={() => {navigation.navigate('AddBudgetScreen')}}>
          <View className="flex-row items-center justify-center w-full bg-blue-100 px-5 pt-2 pb-3 space-x-3 rounded-lg mb-2.5 border-gray-400 border-2 shadow-lg" style={{ 
            shadowColor: '#000', 
            shadowOffset: { width: 0, height: 2 }, 
            shadowOpacity: 0.25, 
            shadowRadius: 3.84, 
            elevation: 5 
          }}>
            <View className="flex-row justify-center items-center">
                <Icon name={iconType} size={30} color={COLORS.purple_primary} />
                <Text className="text-sm text-center ml-2 font-bold text-violet-900">Tạo ngân sách cho danh mục mới</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Collapsible>
    </View>
  );
};

