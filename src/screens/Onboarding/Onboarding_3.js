import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, ImageBackground, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../../constants';

export default function Onboarding3() {
  const navigation = useNavigation()
  return (
      <View className="w-full h-full bg-white items-center justify-start">
        <ImageBackground
          source={require('../../../assets/images/Onboarding/bg-onboarding3.png')}
          className="w-full h-[550] items-center justify-center"
          style={{}} 
          resizeMode='stretch'
        >
          <Image
            source={require('../../../assets/images/Onboarding/img-onboarding3.png')}
            className="w-[250] h-[250]"
            resizeMode='stretch'
          />
        </ImageBackground>
        <View className="flex-1 w-full  mb-2.5 p-2.5"> 
          <View className="flex-1  mb-2.5 p-2.5 justify-center items-center">
            <View>
              <Text className="font-bold text-3xl text-center text-purple-900">Gợi ý chi tiêu</Text>
              <Text className="font-bold text-3xl text-center text-purple-900">thông minh</Text>
            </View>
            <View className="mt-2">
                <Text 
                  className="text-lg text-center text-purple-900 "
                  style={{lineHeight: 24}}
                >
                  Giúp bạn quản lí tài chính hiệu
                </Text>
                <Text  
                  className="text-lg text-center text-purple-900 "
                  style={{lineHeight: 24}}
                >
                  quả, không lo vượt ngân sách
                </Text>
            </View>
          </View>
          <View className="flex-row w-full h-[50] mb-2.5 py-2.5 px-5 justify-center items-center space-x-2">
            <TouchableOpacity 
              className="flex-row space-x-2 justify-start items-center"
              onPress={() => navigation.navigate('Onboarding2')}
            >
              <Icon name="chevron-left" size={20} color={COLORS.purple_primary}/>
              <Text className="text-base text-purple-900" style={{lineHeight: 16}}>Trước</Text>
            </TouchableOpacity>
            <View className="flex-1 flex-row items-center justify-center space-x-2">
              <Icon name="circle-o" size={12} color={COLORS.purple_primary}/>
              <Icon name="circle-o" size={12} color={COLORS.purple_primary}/>
              <Icon name="circle" size={12} color={COLORS.purple_primary}/>
            </View>
            <TouchableOpacity 
              className="flex-row space-x-2 justify-start items-center"
              onPress={() => navigation.navigate('LoginScreen')}
            >
              <Text className="text-base text-purple-900" style={{lineHeight: 16}}>Bắt đầu</Text>
              <Icon name="chevron-right" size={20} color={COLORS.purple_primary}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
  );
}