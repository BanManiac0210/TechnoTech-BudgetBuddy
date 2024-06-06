import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FDATA } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import formattedValue from "../../components/formattedValue";
import IncomeExpenseTag from "../../components/IncomeExpenseTag";
import HistoryCardMS from "../../components/HistoryCard/HistoryCardMS";
import { getDetailMoneySourceById } from "../../services/moneySourceService";
import { getUserFromStorage } from "../../services/userService";
import { useEffect, useState } from "react";
export default function MoneySourceDetailScreen({ route, navigation}) {
  const {moneySourceID} = route.params;
  const [currentBalance, setBalance] = useState(0) //
  const [incomeValue, setIncome] = useState(0) //
  const [expenseValue, setExpense] = useState(0) //
  const [moneySourceName, setDefaultName] = useState("");
  const [moneySourceColor, setDefaultColor] = useState("");
  const [moneySourceIcon, setDefaultIcon] = useState("");
  const [historyLogs, setHistory] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await getUserFromStorage();
        const detail = await getDetailMoneySourceById(moneySourceID, user._id);
        setBalance(detail.moneySource.Budget)
        setIncome(detail.logs.incomeValue)
        setExpense(detail.logs.expenseValue)
        setDefaultName(detail.moneySource.name)
        setDefaultColor(detail.moneySource.TagId.colorId.code)
        setDefaultIcon(detail.moneySource.TagId.iconId.url)
        setHistory(detail.logs.logHistory)
      } catch (error) {
        console.log("Failed to fetch data from MoneySourceDetailScreen: ", error);
      }
    };
    fetchData();
  }, [navigation]);
  return (
    <SafeAreaView>
      <View className="w-screen h-screen bg-white items-center justify-center px-[20] pt-[50] pb-[100]">
        <View className="w-full h-full flex-col justify-start bg-purple-50 px-4 py-5 rounded-2xl">
          <View className="flex-row w-full space-x-3 items-center">
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("MoneySourceScreen", {
                  moneySourceID: moneySourceID
                });
              }}
            >
              <Icon
                name="chevron-left"
                size={30}
                color={COLORS.purple_primary}
              />
            </TouchableOpacity>
            <View className="h-[30] w-[30] justify-center items-center rounded-full" style={{backgroundColor: moneySourceColor}}>
              <Icon name={moneySourceIcon} size={15} color="white" />
            </View>
            <Text className="font-bold text-2xl text-purple-900 flex-1">
              {moneySourceName}
            </Text>
            <TouchableOpacity
              className="items-end"
              onPress={() => {
                navigation.navigate("MoneySourceEditScreen", {
                  moneySourceID: moneySourceID
                });
              }}
            >
              <Icon name="pencil" size={30} color={COLORS.purple_primary} />
            </TouchableOpacity>
          </View>

          <View className="p-3">
            <Text className="font-bold text-center text-4xl text-purple-900">
              {formattedValue({ value: currentBalance})}
            </Text>
          </View>

          <IncomeExpenseTag incomeValue={incomeValue} expenseValue={expenseValue} />

          <View className="flex-1 items-center flex-col">
            <Text className="font-bold text-xl text-purple-900 text-start">
              Lịch sử
            </Text>
            <View className="w-full h-[2] bg-purple-900 my-1 opacity-10"></View>
            <ScrollView className="w-full" showsVerticalScrollIndicator={false}>
              {historyLogs.length > 0 && historyLogs.map((item, index) => (
                <HistoryCardMS
                  key={index}
                  cateName={item.TagId.name}
                  cateIcon={item.TagId.iconId.url}
                  cateColor={item.TagId.colorId.code}
                  date={item.createdAt}
                  value={item.moneyValue}
                  description={item.description}
                  type={item.type == "thu" ? "Thu nhập" : "Chi tiêu"}
                />
              ))}
            </ScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
