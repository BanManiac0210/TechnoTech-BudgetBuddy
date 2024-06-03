import { ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import { COLORS, FDATA } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconPicker from '../../components/Picker/IconPicker';
import ColorPicker from '../../components/Picker/ColorPicker';
import CustomNumpad from '../../components/CustomNumpad';
import PopupConfirm from '../../components/Popups/PopupConfirm';

export default function AddDebtScreen() {
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
          popupText={"Đã tạo khoản nợ"}
          visible={popupVisible}
          onConfirm={() => popupNavigate()}
      />
      <View className="w-screen h-screen bg-white items-center justify-center px-[20] pt-[50] pb-[100]">
        <ScrollView 
          className="w-full h-full bg-purple-50 px-4 py-4 rounded-2xl space-y-3"
          showsVerticalScrollIndicator={false}
        >
          <View className="w-full flex-row space-x-3 items-center">
            <Text className="flex-1 font-bold text-xl text-purple-900">Tạo khoản nợ mới</Text>  
          </View>

          <View className="w-full flex-row space-x-3 items-center">
            <View className="items-center justify-center h-[50] w-[50] rounded-full" style={{backgroundColor:defaultColor}}>
              <Icon name={defaultIcon} size={25} color="white"/>
            </View>
            <View className="flex-1 justify-center border-2 rounded-xl px-2.5 py-2 border-purple-200">
              <TextInput
                className="font-bold text-xl text-purple-900"
                placeholder='Nhập tên khoản nợ'
                value={defaultName}
                onChangeText={setDefaultName}
              />
            </View>
          </View>

          <ColorPicker colorData={FDATA.colorList} onUpdateColor={setDefaultColor}/>
          <IconPicker iconData={FDATA.iconList} onUpdateIcon={setDefaultIcon}/>
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
