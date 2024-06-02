import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, ImageBackground, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../../constants';

export default function Onboarding1() {
  const navigation = useNavigation()
  return (
      <View className="w-full h-full bg-white items-center justify-start">
        <ImageBackground
          source={require('../../../assets/images/Onboarding/bg-onboarding1.png')}
          className="w-full h-[550] items-center justify-center"
          style={{}} 
          resizeMode='stretch'
        >
          <Image
            source={require('../../../assets/images/Onboarding/img-onboarding1.png')}
            className="w-[250] h-[250]"
            resizeMode='stretch'
          />
        </ImageBackground>
        <View className="flex-1 w-full  mb-2.5 p-2.5"> 
          <View className="flex-1  mb-2.5 p-2.5 justify-center items-center">
            <View>
              <Text className="font-bold text-3xl text-center text-purple-900">Báo cáo thông minh,</Text>
              <Text className="font-bold text-3xl text-center text-purple-900">làm chủ tài chính</Text>
            </View>
            <View className="mt-2">
                <Text 
                  className="text-lg text-center text-purple-900 "
                  style={{lineHeight: 24}}
                >
                  Theo dõi chi tiêu với báo cáo 
                </Text>
                <Text  
                  className="text-lg text-center text-purple-900 "
                  style={{lineHeight: 24}}
                >
                  trực quan, dễ hiểu
                </Text>
            </View>
          </View>
          <View className="flex-row w-full h-[50] mb-2.5 py-2.5 px-5 justify-center items-center space-x-2">
            <TouchableOpacity 
              className="flex-row space-x-2 justify-start items-center"
              // onPress={() => navigation.navigate('Onboarding_1')}
            >
              <Icon name="chevron-left" size={20} color="white"/>
              <Text className="text-base text-white" style={{lineHeight: 16}}>Trước</Text>
            </TouchableOpacity>
            <View className="flex-1 flex-row items-center justify-center space-x-2">
              <Icon name="circle" size={12} color={COLORS.purple_primary}/>
              <Icon name="circle-o" size={12} color={COLORS.purple_primary}/>
              <Icon name="circle-o" size={12} color={COLORS.purple_primary}/>
            </View>
            <TouchableOpacity 
              className="flex-row space-x-2 justify-start items-center"
              onPress={() => navigation.navigate('Onboarding2')}
            >
              <Text className="text-base text-purple-900" style={{lineHeight: 16}}>Tiếp</Text>
              <Icon name="chevron-right" size={20} color={COLORS.purple_primary}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
  );
}