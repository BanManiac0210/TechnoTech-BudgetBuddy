import { Text, TextInput, TouchableOpacity, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import { FDATA } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconPicker from '../../components/Picker/IconPicker';
import ColorPicker from '../../components/Picker/ColorPicker';
import PopupConfirm from '../../components/Popups/PopupConfirm';

export default function AddCategoryScreen() {
  const navigation = useNavigation();
  var tempColor = "#DA70D6";
  var fakeIcon = "money";
  const [defaultName, setDefaultName] = useState('');
  const [defaultColor, setDefaultColor] = useState(tempColor);
  const [defaultIcon, setDefaultIcon] = useState(fakeIcon);
  const [defaultBalance, setDefaultBalance] = useState(0);

  const [popupVisible, setPopupVisible] = useState(false);
  const openPopup = () => {
    setPopupVisible(true)
  };
  const popupNavigate = () => {
    navigation.navigate('InitCategoryScreen')
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
          popupText={"Đã tạo danh mục"}
          visible={popupVisible}
          onConfirm={() => popupNavigate()}
      />
      <View className="w-screen h-screen bg-white items-center justify-end px-[20] pt-[50] pb-[100]">
        <View className="w-full bg-purple-50 px-4 py-4 rounded-2xl space-y-3">
          <View className="w-full flex-row space-x-3 items-center">
            <Text className="flex-1 font-bold text-xl text-purple-900">Tạo danh mục mới</Text>  
          </View>

          <View className="w-full flex-row space-x-3 items-center">
            <View className="items-center justify-center h-[50] w-[50] rounded-full" style={{backgroundColor:defaultColor}}>
              <Icon name={defaultIcon} size={25} color="white"/>
            </View>
            <View className="flex-1 justify-center border-2 rounded-xl px-2.5 py-2 border-purple-200">
              <TextInput
                className="font-bold text-xl text-purple-900"
                placeholder='Nhập tên danh mục'
                value={defaultName}
                onChangeText={setDefaultName}
              />
            </View>
          </View>

          <ColorPicker colorData={FDATA.colorList} onUpdateColor={setDefaultColor}/>
          <IconPicker iconData={FDATA.iconList} onUpdateIcon={setDefaultIcon}/>

          <View className="justify-center items-center flex-row space-x-2 pt-2">
            <TouchableOpacity
              className="h-[50] bg-slate-300 justify-center items-center py-2.5 px-5 rounded-lg"
              onPress={() => navigation.navigate('InitCategoryScreen')}
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
        </View>
      </View>
    </SafeAreaView>
  );
}
