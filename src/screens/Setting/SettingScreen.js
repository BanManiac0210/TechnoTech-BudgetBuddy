import React, { useState } from 'react';
import { useEffect } from 'react';
import { Text, View, Switch, TouchableOpacity, Modal, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchBar from '../../components/SearchBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Picker } from '@react-native-picker/picker';
import { COLORS } from "../../constants/index.js"
import PopupAsk from '../../components/Popups/PopupAsk.js';

export default function SettingScreen({ navigation }) {
  const [selectedCurrency, setSelectedCurrency] = useState("VND");
  const [selectedLanguage, setSelectedLanguage] = useState("VIE");
  const [isEnableNoti, setStateNoti] = useState(false)
  const toggleNotiSwitch = () => setStateNoti(previousState => !previousState)
  const [isEnableBudget, setStateBudget] = useState(false)
  const toggleBudgetSwitch = () => setStateBudget(previousState => !previousState)
  const [isPopupVisible, setPopupVisible] = useState(false);
  const showAlert = () => {
    Alert.alert("Lỗi", "Tính năng này chưa được hỗ trợ.");
  }
  const openPopup = () => {
    console.log("Opening popup");
    setPopupVisible(true)
  };
  const closePopup = () => {
    console.log("Closing popup");
    setPopupVisible(false)
  };
  const navigateToLogin = () => {
    navigation.navigate('AuthStack', { screen: 'Login' });
  }
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // Reset popup visibility when screen is focused
      setPopupVisible(false);
    });

    return unsubscribe;
  }, [navigation]);
  return (
    <SafeAreaView>
      <PopupAsk 
          popupText={"Bạn có thực sự muốn đăng xuất?"}
          visible={isPopupVisible} 
          onClose={closePopup} 
          onNavigate={navigateToLogin}
        />
      <View className="flex-col bg-white w-screen h-screen p-2.5 space-y-1">
        <SearchBar/>

        <View className="flex-col justify-start h-full w-full pb-[120] pt-[15]">
          <Text className="text-2xl font-bold text-purple-900 ml-2">Cài đặt</Text>
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
                selectedValue={selectedCurrency}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedCurrency(itemValue)
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
              <Switch 
                trackColor={{false: COLORS.blue_primary, true: COLORS.purple_primary}}
                thumbColor={isEnableNoti? COLORS.extender_1 : COLORS.extender_2}
                onValueChange={toggleNotiSwitch}
                value={isEnableNoti}
              />
            </View>
            <View className="flex-row h-[60] w-[330] bg-slate-100 rounded-xl items-center px-3"> 
              <Text className="text-xl font-bold text-purple-900 ml-0 flex-1">Cảnh báo ngân sách</Text>
              <Switch className="h-[40]"
                trackColor={{false: COLORS.blue_primary, true: COLORS.purple_primary}}
                thumbColor={isEnableBudget? COLORS.extender_1 : COLORS.extender_2}
                onValueChange={toggleBudgetSwitch}
                value={isEnableBudget}
              />
            </View>
            <View className="flex-row h-[60] w-[330] bg-slate-100 rounded-xl items-center px-3"> 
              <Text className="text-xl font-bold text-purple-900 ml-0 flex-1">Xuất file CSV</Text>
              <TouchableOpacity className="items-center space-x-2 h-[40] flex-row p-2 bg-blue-200 rounded" onPress={showAlert}>
                <Icon name="download" size={25} color={COLORS.purple_primary} />
                <Text className="font-bold text-xl text-purple-900">Tải</Text>
              </TouchableOpacity>
            </View>
            <View className="flex-row h-[60] w-[330] bg-slate-100 rounded-xl items-center px-3"> 
              <Text className="text-xl font-bold text-purple-900 ml-0 flex-1">Nhập file CSV</Text>
              <TouchableOpacity className="items-center space-x-2 h-[40] flex-row p-2 bg-blue-200 rounded" onPress={showAlert}>
                <Icon name="upload" size={25} color={COLORS.purple_primary} />
                <Text className="font-bold text-xl text-purple-900">Tải</Text>
              </TouchableOpacity>
            </View>
            <View className="flex-row h-[60] w-[330] bg-slate-100 rounded-xl items-center px-3 space-x-2"> 
              <Text className="text-xl font-bold text-purple-900 ml-0">Xóa dữ liệu</Text>
              <Icon name="exclamation-circle" size={25} color={COLORS.red} />
              <View className="flex-1"></View>
              <TouchableOpacity className="items-center space-x-2 h-[40] flex-row p-2 bg-red-600 rounded" onPress={showAlert}>
                <Icon name="exclamation-circle" size={25} color="white" />
                <Text className="font-bold text-xl text-white">Xóa</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity 
              className="flex-row h-[40] bg-red-400 rounded items-center px-3 space-x-2"
              onPress={openPopup}
            >
                <Text className="font-bold text-xl text-white">
                  Đăng xuất
                </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}