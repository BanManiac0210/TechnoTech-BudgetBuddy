import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, ImageBackground, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../../constants';
import { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';


export default function Success() {
  const navigation = useNavigation()

  return (
      <View className="w-full h-full bg-white items-center justify-start">
        <ImageBackground
          source={require('../../../assets/images/Onboarding/bg-onboarding1.png')}
          className="w-full h-[450] items-center justify-center"
          resizeMode='stretch'
        >
          {/* LOGO */}
          <View className="flex-col justify-center items-center space-y-2 " style={{ marginBottom: 0 }}>
            <View >
              <View className="mt-2 mb-2">
                  <Text className="text-lg text-center text-purple-900 " style={{lineHeight: 24}}>
                    Chào mừng đến với
                  </Text>
              </View>
              <View>
                <Text className="font-bold text-3xl text-center text-purple-900">BudgetBuddy</Text>
              </View>
              <View className="mt-2">
                  <Text className="text-lg text-center text-purple-900 " style={{lineHeight: 24}}>
                    Ứng dụng ghi chép thu chi 
                  </Text>
                  <Text className="text-lg text-center text-purple-900 " style={{lineHeight: 24}}>
                    tuyệt vời của riêng bạn!
                  </Text>
              </View>
            </View>

            <Image
              source={require('../../../assets/images/app-icon.png')}
              className="w-[250] h-[250]"
              resizeMode='stretch'
            />
          </View>
        </ImageBackground>

        {/* Success */}
        <View className="flex-col w-full justify-center items-center ">
          <View className="pt-5">
            <Text className="font-bold text-3xl text-center text-purple-900">Đăng ký</Text>
            <View className="flex-1 flex-col p-5 space-y-1 w-full justify-start items-center">
              <Text className="text-lg text-center text-purple-900 ">Bạn đã đăng ký thành công.</Text>
              <Text className="text-lg text-center text-purple-900 ">Vui lòng đăng nhập để sử dụng ứng dụng.</Text>
              {/* BUTTON */}
              <View className="w-[70%] flex-row space-x-5 pt-5 items-center justify-start">
                <TouchableOpacity 
                  className="w-[45%] h-10 bg-white border-2 border-purple-800 rounded-3xl justify-center items-center"
                  onPress={() => navigation.navigate('Login')}
                >
                  <Text className="text-purple-800 text-md">Tiếp tục</Text>
                </TouchableOpacity>
              </View>
            </View>
              
              
            
            
          </View>

          
        </View>
        
      </View>
  );
}