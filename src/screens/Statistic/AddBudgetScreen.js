import { ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import { FDATA } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import CustomNumpad from '../../components/CustomNumpad';
import PopupConfirm from '../../components/Popups/PopupConfirm';
import TagPicker from '../../components/Tags/TagPicker';

export default function AddBudgetScreen() {
  const navigation = useNavigation();
  const [defaultName, setDefaultName] = useState('');
  const [defaultBalance, setDefaultBalance] = useState(0);

  const [popupVisible, setPopupVisible] = useState(false);
  const openPopup = () => {
    setPopupVisible(true)
  };
  const popupNavigate = () => {
    navigation.navigate('StatisticScreen')
  }
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setPopupVisible(false)
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView>
      <PopupConfirm 
          popupText={"Đã thêm ngân sách mới"}
          visible={popupVisible}
          onConfirm={() => popupNavigate()}
      />
      <View className="w-screen h-screen bg-white items-center justify-center px-[20] pt-[50] pb-[100]">
        <ScrollView className="w-full h-full bg-purple-50 px-4 py-4 rounded-2xl space-y-3">
          <View className="w-full flex-row space-x-3 items-center">
            <Text className="flex-1 font-bold text-xl text-purple-900 text-center">Thêm danh mục ngân sách</Text>  
          </View>

          {/* <TagPicker tagInfo="Chọn nguồn tiền" tagData={FDATA.tagList}/> */}
          <TagPicker tagInfo="Chọn danh mục" tagData={FDATA.tagList}/>
          <CustomNumpad initValue={defaultBalance} updateValue={setDefaultBalance}/>

          <View className="flex-1 justify-center items-center flex-row space-x-2">
            <TouchableOpacity
              className="h-[50] bg-slate-300 justify-center items-center py-2.5 px-5 rounded-lg"
              onPress={() => navigation.navigate('StatisticScreen')}
            >
              <Text className="font-bold text-lg text-purple-900 leading-none">Hủy</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="h-[50] bg-blue-400 justify-center items-center py-2.5 px-5 rounded-lg"
              onPress={() => openPopup()}
            >
              <Text className="font-bold text-lg text-purple-900 leading-none">Xong</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
