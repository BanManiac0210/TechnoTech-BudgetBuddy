import { ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
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

export default function EditBudgetScreen({moneySourceID}) {
  const navigation = useNavigation();
  var fakeMSName = "MB Bank"
  var tempColor = "#DA70D6";
  var fakeIcon = "money";
  var fakeBalance = 1420000;
  const [defaultName, setDefaultName] = useState(fakeMSName);
  const [defaultColor, setDefaultColor] = useState(tempColor);
  const [defaultIcon, setDefaultIcon] = useState(fakeIcon);
  const [defaultBalance, setDefaultBalance] = useState(fakeBalance);

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
        setPopupDeleteConfVisible(true)
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
      case "BudgetDetailScreen":
        navigation.navigate('BudgetDetailScreen', {moneySourceID: moneySourceID});
        break;
      default:
        navigation.navigate('StatisticScreen');
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
      <PopupConfirm 
          popupText={"Đã chỉnh sửa"}
          visible={popupModifiedVisible}
          onConfirm={() => popupNavigate({screen:"BudgetDetailScreen"})}
      />
      <View className="w-screen h-screen bg-white items-center justify-center px-[20] pt-[50] pb-[100]">
        <ScrollView className="w-full h-full bg-purple-50 px-4 py-4 rounded-2xl space-y-3">
          <View className="w-full flex-row space-x-3 items-center justify-center mb-10">
            <Text className="flex-1 font-bold text-center text-xl text-purple-900">Chỉnh sửa ngân sách tổng</Text>  
          </View>

          <CustomNumpad initValue={defaultBalance} updateValue={setDefaultBalance}/>

          <View className="flex-1 justify-center items-center flex-row space-x-2">
            <TouchableOpacity
              className="h-[50] bg-slate-300 justify-center items-center py-2.5 px-5 rounded-lg"
              onPress={() => navigation.navigate('BudgetDetailScreen')}
            >
              <Text className="font-bold text-lg text-purple-900 leading-none">Hủy</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="h-[50] bg-blue-400 justify-center items-center py-2.5 px-5 rounded-lg"
              onPress={() => openPopup({popupName:"modified"})}
            >
              <Text className="font-bold text-lg text-purple-900 leading-none">Xong</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
