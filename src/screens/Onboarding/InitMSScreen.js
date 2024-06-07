import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity, ImageBackground, Image, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS, FDATA } from '../../constants';
import CategoryTag from '../../components/Tags/CategoryTag';
import { useEffect } from 'react';
import { createTag } from '../../services/tagService';
import { createMoneySource } from '../../services/moneySourceService';
import { getUserFromStorage } from '../../services/userService';

export default function InitMoneySourceScreen({}) {
  const navigation = useNavigation()
  useEffect(() => {
    const initMoneySource = async () => {
      try{
        const user = await getUserFromStorage();
        const tag1 = await createTag({
          iconId: "6661dc6ae3f66c3a5cbd97c5",
          colorId: "6661daf0e3f66c3a5cbd97a7",
          name: "Ngân hàng",
          userId: user._id
        })
        const moneySource1 = await createMoneySource({
          "name": "Ngân hàng",
          "TagId": tag1._id,
          "Budget": 0,
          "type": "nguontien",
          "userId": user._id,
          "createdAt": new Date()
        })

        const tag2 = await createTag({
          iconId: "6661dd0be3f66c3a5cbd97eb",
          colorId: "6661daf8e3f66c3a5cbd97ab",
          name: "Tiền mặt",
          userId: user._id
        })
        const moneySource2 = await createMoneySource({
          "name": "Tiền mặt",
          "TagId": tag2._id,
          "Budget": 0,
          "type": "nguontien",
          "userId": user._id,
          "createdAt": new Date()
        })

      }
      catch (error) {
        console.log("Error: ", error);
      } 
    }

    initMoneySource();

  }, [navigation]);

  return (
    <View className="w-full h-full bg-white items-center justify-start">
        <ImageBackground
          source={require('../../../assets/images/Others/bg-category.png')}
          className="w-full h-[340] items-center justify-center"
          style={{}} 
          resizeMode='stretch'
        >
          <View className="w-full h-[340] items-start justify-center px-[50]">
          <Text className="font-bold text-3xl text-purple-900 mb-3">Chờ chút đã!</Text>
          <Text className="text-base font-medium text-purple-900" style={{lineHeight: 20}}>Vì đây là lần đầu tiên bạn sử dụng
                ứng dụng của chúng tôi, xin hãy thực
                hiện các bước tiếp theo để thiết lập
                cấu trúc ban đầu cho quỹ tiền của 
                bạn! Các thiết lập này có thể tùy ý 
                thay đổi trong quá trình sử dụng.</Text>
        </View>
        </ImageBackground>
        <View className="flex-1 w-full mb-2.5 p-2.5 justify-center items-center"> 
          <View className="flex-1 w-full mb-2.5 px-[40] py-2.5 flex-col justify-center items-center ">
            <Text className="font-bold w-full text-xl my-2 text-left text-purple-900">Tạo nguồn tiền</Text>
            <ScrollView className="w-full"
              contentContainerStyle={{
                opacity: 1, 
                flexWrap: 'wrap',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignContent:'flex-start',
                alignItems:'flex-start'
              }} 
              showsVerticalScrollIndicator={false}
            >
                {FDATA.tagList.map((item, index) => (
                    <CategoryTag 
                        key={index} 
                        tagName={item.tagName}
                        tagIconName={item.tagIconName}
                        tagColor={item.tagColor}
                    />
                ))}
            </ScrollView>
            <View className="w-full h-[1] bg-purple-400 my-1"></View>
            <View className="w-full flex-row">
              <TouchableOpacity
                className="px-2 py-[6] rounded-lg flex-row items-center space-x-2 mr-1 bg-purple-300"
                onPress={() => {Alert.alert("Lỗi", "Tính năng này chưa được hỗ trợ.");}}
              >
                <Icon name="plus" size={16} color="white"/>
                <Text className="font-bold text-white">Tạo mới</Text>
              </TouchableOpacity>
              <View className="flex-1"></View>
            </View>
            
          </View>

          {/* Button */}
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
            </View>
            <TouchableOpacity 
              className="flex-row space-x-2 justify-start items-center"
              onPress={() => navigation.navigate('InitCategoryScreen')}
            >
              <Text className="text-base text-purple-900" style={{lineHeight: 16}}>Tiếp</Text>
              <Icon name="chevron-right" size={20} color={COLORS.purple_primary}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
  );
}