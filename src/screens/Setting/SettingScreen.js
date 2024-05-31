import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Switch, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchBar from '../../components/SearchBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Picker } from '@react-native-picker/picker';
import { COLORS } from "../../constants/index.js"

export default function SettingScreen() {
  const [selectedValue, setSelectedValue] = useState("VND");
  const [selectedLanguage, setSelectedLanguage] = useState("VIE");


  return (
    <SafeAreaView>
      <View className="flex-col bg-white w-screen h-screen p-2.5 space-y-1">
        <View className=" items-center justify-center">
          <SearchBar/>  
        </View>

        <View className="flex-col justify-start h-full w-full pb-[120] pt-[15]">
          <Text className="text-2xl font-bold text-purple-900">Cài đặt</Text>
          <View className="flex-col justify-center items-center h-full w-full space-y-2">
            <View className="flex-row h-[60] w-[330] bg-slate-100 rounded-xl items-center px-3"> 
              <Text className="text-xl font-bold text-purple-900 ml-0 flex-1">Mệnh giá</Text>
              <Picker 
                // className="w-[120] h[40] bg-black mr-0"
                style={{
                  width: 120,
                  height: 40,
                  marginRight: 0,
                }}
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValue(itemValue)
                }>
                <Picker.Item label="VND" value="USD" />
                <Picker.Item label="USD" value="USD" />
              </Picker>
            </View>
            <View className="flex-row h-[60] w-[330] bg-slate-100 rounded-xl items-center px-3">
              <Text className="text-xl font-bold text-purple-900 ml-0 flex-1">Ngôn ngữ</Text>
              <Picker 
                // className="w-[120] h[40] bg-black mr-0"
                style={{
                  width: 120,
                  height: 40,
                  marginRight: 0,
                }}
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedLanguage(itemValue)
                }>
                <Picker.Item label="VIE" value="VIE" />
                <Picker.Item label="ENG" value="ENG" />
              </Picker>
            </View>
            <View className="flex-row h-[60] w-[330] bg-slate-100 rounded-xl items-center px-3"> 
              <Text className="text-xl font-bold text-purple-900 ml-0 flex-1">Nhận thông báo</Text>
            </View>
            <View className="flex-row h-[60] w-[330] bg-slate-100 rounded-xl items-center px-3"> 
              <Text className="text-xl font-bold text-purple-900 ml-0 flex-1">Cảnh báo ngân sách</Text>
            </View>
            <View className="flex-row h-[60] w-[330] bg-slate-100 rounded-xl items-center px-3"> 
              <Text className="text-xl font-bold text-purple-900 ml-0 flex-1">Xuất file CSV</Text>
              <TouchableOpacity className="items-center space-x-2 h-[40] flex-row p-2 bg-blue-200 rounded">
                <Icon name="download" size={25} color={COLORS.purple_primary} />
                <Text className="font-bold text-xl text-purple-900">Tải</Text>
              </TouchableOpacity>
            </View>
            <View className="flex-row h-[60] w-[330] bg-slate-100 rounded-xl items-center px-3"> 
              <Text className="text-xl font-bold text-purple-900 ml-0 flex-1">Nhập file CSV</Text>
              <TouchableOpacity className="items-center space-x-2 h-[40] flex-row p-2 bg-blue-200 rounded">
                <Icon name="upload" size={25} color={COLORS.purple_primary} />
                <Text className="font-bold text-xl text-purple-900">Tải</Text>
              </TouchableOpacity>
            </View>
            <View className="flex-row h-[60] w-[330] bg-slate-100 rounded-xl items-center px-3 space-x-2"> 
              <Text className="text-xl font-bold text-purple-900 ml-0">Xóa dữ liệu</Text>
              <Icon name="exclamation-circle" size={25} color={COLORS.red} />
              <View className="flex-1"></View>
              <TouchableOpacity className="items-center space-x-2 h-[40] flex-row p-2 bg-red-600 rounded">
                <Icon name="exclamation-circle" size={25} color="white" />
                <Text className="font-bold text-xl text-white">Xóa</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  picker: {
    height: 50,
    width: 150,
  },
  text: {
    marginTop: 16,
    fontSize: 18,
  },
});