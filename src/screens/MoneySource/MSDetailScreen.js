import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FDATA } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import formattedValue from "../../components/formattedValue";
import IncomeExpenseTag from "../../components/IncomeExpenseTag";
import HistoryCardMS from "../../components/HistoryCard/HistoryCardMS";
import { getDetailMoneySourceById } from "../../services/moneySourceService";
import { useEffect, useState } from "react";
export default function MoneySourceDetailScreen({ moneySourceID }) {
  const [detail, setBalance] = useState({});
  const [userId, setUserId] = useState("665dcbf114bc7da8c41eddf3");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const detail = await getDetailMoneySourceById(moneySourceID, userId);
        setBalance(detail);
      } catch (error) {
        console.log("Failed to fetch data: ", error);
      }
    };
    fetchData();
  }, [moneySourceID]);
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View className="w-screen h-screen bg-white items-center justify-center px-[20] pt-[50] pb-[100]">
        <View className="w-full h-full flex-col justify-start bg-purple-50 px-4 py-5 rounded-2xl">
          <View className="flex-row w-full space-x-3 items-center">
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("MoneySourceScreen");
              }}
            >
              <Icon
                name="chevron-left"
                size={30}
                color={COLORS.purple_primary}
              />
            </TouchableOpacity>
            <View className="h-[30] w-[30] justify-center items-center rounded-full bg-purple-300">
              <Icon name="money" size={15} color="white" />
            </View>
            <Text className="font-bold text-2xl text-purple-900 flex-1">
              Nguon tien
            </Text>
            <TouchableOpacity
              className="items-end"
              onPress={() => {
                navigation.navigate("MoneySourceEditScreen");
              }}
            >
              <Icon name="pencil" size={30} color={COLORS.purple_primary} />
            </TouchableOpacity>
          </View>

          <View className="p-3">
            <Text className="font-bold text-center text-4xl text-purple-900">
              {formattedValue({ value: parseInt("90") })}
            </Text>
          </View>

          <IncomeExpenseTag incomeValue={123123} expenseValue={123123} />

          <View className="flex-1 items-center flex-col">
            <Text className="font-bold text-xl text-purple-900 text-start">
              Lịch sử
            </Text>
            <View className="w-full h-[2] bg-purple-900 my-1 opacity-10"></View>
            <ScrollView className="w-full" showsVerticalScrollIndicator={false}>
              {FDATA.mainHistory.map((item, index) => (
                <HistoryCardMS
                  key={index}
                  cateName={item.cateName}
                  cateIcon={item.cateIcon}
                  cateColor={FDATA.tagColor}
                  date={item.date}
                  value={item.value}
                  description={item.description}
                  type={item.type}
                />
              ))}
            </ScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
