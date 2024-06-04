import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../../components/SearchBar";
import Icon from "react-native-vector-icons/FontAwesome";
import { COLORS, FDATA } from "../../constants";
import IncomeExpenseTag from "../../components/IncomeExpenseTag";
import HistoryCardMain from "../../components/HistoryCard/HistoryCardMain";
import formattedValue from "../../components/formattedValue";
import { useEffect, useState } from "react";
import {
  getBalanceAccount,
  getUserFromStorage,
} from "../../services/userService";
import { getLogByMonth } from "../../services/logService";
import MoneySource from "../../components/MoneySource";
export default function HomeScreen({ navigation }) {
  const toMoneySource = () => {
    navigation.navigate("MoneySourceScreen");
  };
  const [balance, setBalance] = useState({});
  const [history, setHistory] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await getUserFromStorage();
        const balance = await getBalanceAccount(user._id);
        setBalance(balance);
        const date = new Date();
        const history = await getLogByMonth(
          date.getMonth() + 1,
          date.getFullYear(),
          user._id
        );

        setHistory(history);
      } catch (error) {
        console.log("Failed to fetch data: ", error);
      }
    };
    fetchData();
  }, []);
  return (
    <SafeAreaView>
      <View className="flex-col bg-white w-screen h-screen p-2.5 space-y-1">
        <SearchBar />
        <View className="flex-col justify-center w-full pt-2.5 px-5 space-y-4">
          <View className="flex-row justify-start w-full bg-blue-100 px-5 pt-2 pb-5 space-x-3 rounded-lg ">
            <View className="flex-col items-start pt-2.5 space-y-3">
              <View className="flex-row items-start space-x-2 justify-start">
                <Icon name="vcard" size={30} color={COLORS.purple_primary} />
                <Text className="text-xl text-center font-bold text-violet-900">
                  Tài chính hiện tại:
                </Text>
              </View>
              <Text className="text-4xl text-center font-bold text-violet-900">
                {formattedValue({ value: parseInt(balance.currentBalance) })}
              </Text>
            </View>
            <View className="justify-center items-end flex-1">
              <TouchableOpacity onPress={toMoneySource}>
                <Icon name="money" size={50} color={COLORS.purple_primary} />
              </TouchableOpacity>
            </View>
          </View>

          <IncomeExpenseTag
            incomeValue={balance.incomeValue}
            expenseValue={balance.expenseValue}
          />
        </View>

        <View className="flex-1 items-center flex-col px-5">
          <Text className="font-bold text-2xl text-purple-900 text-start">
            Lịch sử
          </Text>
          <View className="w-full h-[2] bg-purple-900 my-1 opacity-10"></View>
          <ScrollView
            className="w-full"
            contentContainerStyle={{ paddingBottom: 80 }}
            showsVerticalScrollIndicator={false}
          >
            {history.length > 0 &&
              history.map((item, index) => (
                <HistoryCardMain
                  key={index}
                  sourceName={item.moneySource[0].name}
                  sourceIcon={"money"}
                  sourceColor={"#9984CF"}
                  cateName={item.tag[0].name}
                  cateIcon={item.cateIcon}
                  cateColor={"#9984CF"}
                  date={item.createdAt}
                  value={item.moneyValue}
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
