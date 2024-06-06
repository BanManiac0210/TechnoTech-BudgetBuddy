import { ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import { getUserFromStorage } from '../../services/userService';
import { getIcons, getColors } from '../../services/componentService';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconPicker from '../../components/Picker/IconPicker';
import ColorPicker from '../../components/Picker/ColorPicker';
import CustomNumpad from '../../components/CustomNumpad';
import PopupConfirm from '../../components/Popups/PopupConfirm';
import { createTag } from '../../services/tagService';
import { createMoneySource } from '../../services/moneySourceService';

export default function AddDebtScreen({navigation}) {
  const [defaultName, setDefaultName] = useState();
  const [defaultColor, setDefaultColor] = useState("#D8BFD8");
  const [defaultIcon, setDefaultIcon] = useState("home");
  const [defaultBalance, setBalance] = useState(0);

  const [colorList, setColorList] = useState([]);
  const [defaultColorId, setDefaultColorId] = useState("6661dae9e3f66c3a5cbd97a5");

  const [iconList, setIconList] = useState([]);
  const [defaultIconId, setDefaultIconId] = useState("6661dce5e3f66c3a5cbd97e1");
  const [userID, setUserID] = useState("")

  const [popupVisible, setPopupVisible] = useState(false);
  const openPopup = () => {
    setPopupVisible(true)
  };
  const popupNavigate = () => {
    navigation.navigate('AddScreen')
  }

  const createNewSaving = async () => {
    try {
      const tagCreated = await createTag({
        iconId: defaultIconId,
        colorId: defaultColorId,
        name: defaultName,
        userId: userID
      })
      console.log(JSON.stringify(tagCreated, null, 2))
      const result = await createMoneySource({
        name: defaultName,
        TagId: tagCreated._id,
        Budget: defaultBalance,
        type: "khoanno",
        userId: userID,
        createAt: new Date()
      })
    }
    catch (error) {
      console.log("Failed to create new debt: ", error);
    }
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setPopupVisible(false)
    });
    
    const fetchData = async () => {
      try{
        const user = await getUserFromStorage();
        setUserID(user._id)
        const colorArr = await getColors();
        setColorList(colorArr)
        const iconArr = await getIcons();
        setIconList(iconArr)
      }
      catch (error) {
        console.log("Failed to fetch data on AddDebtScreen: ", error);
      } 
    }

    fetchData();

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

          <ColorPicker colorData={colorList} onUpdateColor={setDefaultColor} onUpdateColorId={setDefaultColorId}/>
          <IconPicker iconData={iconList} onUpdateIcon={setDefaultIcon} onUpdateIconId={setDefaultIconId}/>
          <CustomNumpad initValue={defaultBalance} updateValue={setBalance}/>

          <View className="flex-1 justify-center items-center flex-row space-x-2">
            <TouchableOpacity
              className="h-[50] bg-slate-300 justify-center items-center py-2.5 px-5 rounded-lg"
              onPress={() => navigation.navigate('AddScreen')}
            >
              <Text className="font-bold text-lg text-purple-900 leading-none">Hủy</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="h-[50] bg-blue-400 justify-center items-center py-2.5 px-5 rounded-lg"
              onPress={() => {
                createNewSaving();
                openPopup()
              }}
            >
              <Text className="font-bold text-lg text-purple-900 leading-none">Xong</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
