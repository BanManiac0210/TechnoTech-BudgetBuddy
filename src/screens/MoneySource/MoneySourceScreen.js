import { Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../../components/SearchBar";
import { FDATA } from "../../constants";
import MoneySource from "../../components/MoneySource";
import formattedValue from "../../components/formattedValue";
import { useEffect, useState } from "react";
import {
  getBalanceAccount,
  getUserFromStorage,
} from "../../services/userService";

import { getMoneySourceByType } from "../../services/moneySourceService";
export default function MoneySourceScreen() {
  const [balance, setBalance] = useState({});
  const [moneySources, setMoneySources] = useState([]);
  const [savings, setSavings] = useState([]);
  const [debts, setDebts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await getUserFromStorage();
        const balance = await getBalanceAccount(user._id);
        setBalance(balance);
        const data = await getMoneySourceByType(user._id);
        setMoneySources(data?.moneySources);
        setSavings(data?.savings);
        setDebts(data?.debts);
      } catch (error) {
        console.log("Failed to fetch data from Money Source Screen ", error);
      }
    };
    fetchData();
  }, []);
  return (
    <SafeAreaView>
      <View className="flex-col bg-white w-screen h-screen p-2.5 space-y-1 ">
        <SearchBar />

        <ScrollView
          className="flex-1 px-5 py-3 flex-col "
          contentContainerStyle={{ paddingBottom: 80 }}
          showsVerticalScrollIndicator={false}
        >
          <View className="flex-row mb-2">
            <Text className="font-bold flex-1 text-left text-xl text-purple-900">
              Nguồn tiền
            </Text>
            <Text className="font-bold flex-1 text-right text-xl text-purple-900">
              {formattedValue({ value: parseInt(balance.currentBalance) })}
            </Text>
          </View>

          {moneySources.length > 0 &&
            moneySources.map((item, index) => (
              <MoneySource
                key={index}
                iconType={item.iconType}
                moneySourceName={item.name}
                balance={item.Budget}
              />
            ))}

          <Text className="font-bold flex-1 my-3 text-left text-xl text-purple-900">
            Tiết kiệm
          </Text>

          {savings.length > 0 &&
            savings.map((item, index) => (
              <MoneySource
                key={index}
                iconType={item.iconType}
                moneySourceName={item.name}
                balance={item.Budget}
              />
            ))}

          <Text className="font-bold flex-1 my-3 text-left text-xl text-purple-900">
            Khoản nợ
          </Text>

          {debts.length > 0 &&
            debts.map((item, index) => (
              <MoneySource
                key={index}
                moneySourceID={item._id}
                iconType={item.iconType}
                moneySourceName={item.name}
                balance={item.Budget}
              />
            ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
