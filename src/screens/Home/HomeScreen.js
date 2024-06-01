import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../../components/SearchBar';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS, FDATA } from '../../constants';
import IncomeExpenseTag from '../../components/IncomeExpenseTag';
import HistoryCardMain from '../../components/HistoryCard/HistoryCardMain';
import formattedValue from '../../components/formattedValue';

export default function HomeScreen({navigation}) {
  const toMoneySource = () => {
    navigation.navigate('MoneySourceScreen')
  }

  return (
    <SafeAreaView>
      <View className="flex-col bg-white w-screen h-screen p-2.5 space-y-1">
        <SearchBar/>  
        <View className="flex-col justify-center w-full pt-2.5 px-5 space-y-4">
          <View className="flex-row justify-start w-full bg-blue-100 px-5 pt-2 pb-5 space-x-3 rounded-lg">
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

        <View className="flex-1 items-center flex-col px-5">
          <Text className="font-bold text-2xl text-purple-900 text-start">Lịch sử</Text>
          <View className="w-full h-[2] bg-purple-900 my-1 opacity-10"></View>
          <ScrollView className="w-full" contentContainerStyle={{paddingBottom: 80}} showsVerticalScrollIndicator={false}>
            {FDATA.mainHistory.map((item, index) => (
              <HistoryCardMain
                key={index}
                sourceName={item.sourceName}
                sourceIcon={item.sourceIcon}
                cateName={item.cateName}
                cateIcon={item.cateIcon}
                date={item.date}
                value={item.value}
                description={item.description}
                type={item.type}
            />
            ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}