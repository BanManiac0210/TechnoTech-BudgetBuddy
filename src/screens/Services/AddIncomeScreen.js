import { ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import { FDATA } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import CustomNumpad from '../../components/CustomNumpad';
import PopupConfirm from '../../components/Popups/PopupConfirm';
import TagPicker from '../../components/Tags/TagPicker';

export default function AddIncomeScreen() {
  const navigation = useNavigation();
  const [defaultName, setDefaultName] = useState('');
  const [defaultBalance, setDefaultBalance] = useState(0);

  const [popupVisible, setPopupVisible] = useState(false);
  const openPopup = () => {
    setPopupVisible(true)
  };
  const popupNavigate = () => {
    navigation.navigate('AddScreen')
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
          popupText={"Đã ghi chép"}
          visible={popupVisible}
          onConfirm={() => popupNavigate()}
      />
      <View className="w-screen h-screen bg-white items-center justify-center px-[20] pt-[50] pb-[100]">
        <ScrollView 
          className="w-full h-full bg-purple-50 px-4 py-4 rounded-2xl space-y-3"
          showsVerticalScrollIndicator={false}
        >
          <View className="w-full flex-row space-x-3 items-center">
            <Text className="flex-1 font-bold text-xl text-purple-900 text-center">Thêm ghi chép thu nhập</Text>  
          </View>

          <View className="w-full flex-row space-x-3 items-center">
            {/* <View className="items-center justify-center h-[50] w-[50] rounded-full" style={{backgroundColor:defaultColor}}>
              <Icon name={defaultIcon} size={25} color="white"/>
            </View> */}
            <View className="flex-1 justify-center border-2 rounded-xl px-2.5 py-2 border-purple-200">
              <TextInput
                className="font-bold text-xl text-purple-900"
                placeholder='Ghi chú'
                value={defaultName}
                onChangeText={setDefaultName}
              />
            </View>
          </View>

          <TagPicker tagInfo="Chọn nguồn tiền" tagData={FDATA.tagList}/>
          <TagPicker tagInfo="Chọn danh mục" tagData={FDATA.tagList}/>
          <CustomNumpad initValue={defaultBalance} updateValue={setDefaultBalance}/>

          <View className="flex-1 justify-center items-center flex-row space-x-2">
            <TouchableOpacity
              className="h-[50] bg-slate-300 justify-center items-center py-2.5 px-5 rounded-lg"
              onPress={() => navigation.navigate('AddScreen')}
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
