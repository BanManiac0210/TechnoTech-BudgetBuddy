import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../../components/SearchBar';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS, FDATA } from '../../constants';
import IncomeExpenseTag from '../../components/IncomeExpenseTag';
import CategoryTag from '../../components/CategoryTag';

export default function HomeScreen({navigation}) {
  const formattedValue = ({value}) => {
    return value.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND', // You can change the currency as needed
        minimumFractionDigits: 0,
    })
  }
  const toMoneySource = () => {
    navigation.navigate('MoneySourceScreen')
  }

  return (
    <SafeAreaView>
      <View className="flex-col bg-white w-screen h-screen p-2.5 space-y-1">
        <SearchBar/>  
        <View className="flex-col justify-center w-full pt-2.5 space-y-4">
          <View className="flex-row justify-start w-full bg-slate-300 px-5 pt-2 pb-5 space-x-3 rounded-lg">
            <View className="flex-col items-start  pt-2.5 space-y-3">
              <View className="flex-row items-start space-x-2 justify-start">
                <Icon name="vcard" size={30} color={COLORS.purple_primary} />
                <Text className="text-xl text-center font-bold text-violet-900">Tài chính hiện tại:</Text>
              </View>
              <Text className="text-4xl text-center font-bold text-violet-900">{formattedValue({value:parseInt(FDATA.currentBalance)})}</Text>
            </View>
            <View className="justify-center items-end flex-1">
              <TouchableOpacity onPress={toMoneySource}>
                <Icon name="money" size={50} color={COLORS.purple_primary} />
              </TouchableOpacity>
            </View>
          </View>

          <IncomeExpenseTag incomeValue={FDATA.incomeValue} expenseValue={FDATA.expenseValue}/>
        </View>

        <View className="flex-1 items-center flex-col bg-sky-50">
          <Text className="font-bold text-2xl text-purple-900 text-start">Lịch sử</Text>
          <ScrollView>
            <CategoryTag/>
            {/* Add more views here */}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}