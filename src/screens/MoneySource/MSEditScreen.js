import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import { COLORS, FDATA } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconPicker from '../../components/Picker/IconPicker';
import ColorPicker from '../../components/Picker/ColorPicker';
import CustomNumpad from '../../components/CustomNumpad';
import PopupAsk from '../../components/Popups/PopupAsk';
import PopupConfirm from '../../components/Popups/PopupConfirm';
import { getUserFromStorage } from '../../services/userService';
import { deleteMoneySource, getDetailMoneySourceById, updateMoneySource } from '../../services/moneySourceService';
import { getColors, getIcons } from '../../services/componentService';
import { updateTag } from '../../services/tagService';

export default function MoneySourceEditScreen({route, navigation}) {
  const {moneySourceID} = route.params;
  const [defaultName, setDefaultName] = useState("Nguồn tiền");
  const [defaultColor, setDefaultColor] = useState("#DA70D6");
  const [defaultIcon, setDefaultIcon] = useState("money");
  const [defaultBalance, setBalance] = useState(0);

  const [colorList, setColorList] = useState([]);
  const [defaultColorId, setDefaultColorId] = useState("");

  const [iconList, setIconList] = useState([]);
  const [defaultIconId, setDefaultIconId] = useState("");

  const [tagId, setTagId] = useState("")
  const [userID, setUserID] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await getUserFromStorage();
        setUserID(user._id)
        const data = await getDetailMoneySourceById(moneySourceID, user._id);
        const colorArr = await getColors();
        setColorList(colorArr)
        const iconArr = await getIcons();
        setIconList(iconArr)
        setTagId(data.moneySource.TagId._id)
        setBalance(data.moneySource.Budget)
        setDefaultName(data.moneySource.name)
        setDefaultColor(data.moneySource.TagId.colorId.code)
        setDefaultIcon(data.moneySource.TagId.iconId.url)
        setDefaultColorId(data.moneySource.TagId.colorId._id)
      } catch (error) {
        console.log("Failed to fetch data on MoneySourceEditScreen: ", error);
      }
    };
    fetchData();
  }, [navigation]);
  const [popupDeleteVisible, setPopupDeleteVisible] = useState(false);
  const [popupDeleteConfVisible, setPopupDeleteConfVisible] = useState(false);
  const [popupModifiedVisible, setPopupModifiedVisible] = useState(false);
  const openPopup = ({popupName}) => {
    switch (popupName) {
      case "delete":
        setPopupDeleteVisible(true)
        break;
      case "modified":
        setPopupModifiedVisible(true)
        break;
      default:
        try {
          const response = deleteMoneySource(moneySourceID)
          setPopupDeleteConfVisible(true)
        }
        catch (error) {
          Alert.alert("Lỗi!", "Không thể xóa nguồn tiền vào lúc này!")
        }
    }
  };
  const closePopup = ({popupName}) => {
    switch (popupName) {
      case "delete":
        setPopupDeleteVisible(false)
        break;
      case "modified":
        setPopupModifiedVisible(false)
        break;
      default:
        setPopupDeleteConfVisible(false)
    }
  };
  const popupNavigate = ({screen}) => {
    switch (screen) {
      case "MoneySourceDetailScreen":
        navigation.navigate('MoneySourceDetailScreen', {moneySourceID: moneySourceID});
        break;
      default:
        navigation.navigate('MoneySourceScreen');
    }
  }
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setPopupDeleteVisible(false);
      setPopupModifiedVisible(false);
      setPopupDeleteConfVisible(false);
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView>
      <PopupAsk 
          popupText={"Xóa nguồn tiền?"}
          visible={popupDeleteVisible} 
          onClose={() => closePopup({popupName:"delete"})} 
          onNavigate={() => openPopup({popupName:"deleteConfirm"})}
        />
      <PopupConfirm 
          popupText={"Đã chỉnh sửa"}
          visible={popupModifiedVisible}
          onConfirm={() => popupNavigate({screen:"HomeScreen"})}
      />
      <PopupConfirm 
          popupText={"Đã xóa nguồn tiền"}
          visible={popupDeleteConfVisible}
          onConfirm={() => popupNavigate({screen:"MoneySourceScreen"})}
      />
      <View className="w-screen h-screen bg-white items-center justify-center px-[20] pt-[50] pb-[100]">
        <ScrollView 
          className="w-full h-full bg-purple-50 px-4 py-4 rounded-2xl space-y-3"
          showsVerticalScrollIndicator={false}
        >
          <View className="w-full flex-row space-x-3 items-center">
            <Text className="flex-1 font-bold text-xl text-purple-900">Chỉnh sửa nguồn tiền</Text>  
            <TouchableOpacity 
              className="items-center justify-center"
              onPress={() => openPopup({popupName:"delete"})}
            >
              <Icon name="trash" size={25} color={COLORS.purple_primary}/>
            </TouchableOpacity>
          </View>

          <View className="w-full flex-row space-x-3 items-center">
            <View className="items-center justify-center h-[50] w-[50] rounded-full" style={{backgroundColor:defaultColor}}>
              <Icon name={defaultIcon} size={25} color="white"/>
            </View>
            <View className="flex-1 justify-center border-2 rounded-xl px-2.5 py-2 border-purple-200">
              <TextInput
                className="font-bold text-xl text-purple-900"
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
              onPress={() => navigation.navigate('MoneySourceDetailScreen', {
                moneySourceID: moneySourceID
              })}
            >
              <Text className="font-bold text-lg text-purple-900 leading-none">Hủy</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="h-[50] bg-blue-400 justify-center items-center py-2.5 px-5 rounded-lg"
              onPress={() => {
                openPopup({popupName:"modified"});
                try{
                  updateTag(tagId, {
                    iconId: defaultIconId,
                    colorId: defaultColorId,
                    name: defaultName,
                    userId: userID
                  })
                  updateMoneySource(moneySourceID, {
                    name: defaultName,
                    TagId: tagId,
                    Budget: defaultBalance,
                    userId: userID,
                    createAt: new Date()
                  })
                }
                catch (error) {
                  console.log("Failed to edit Data: ", error);
                }
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
