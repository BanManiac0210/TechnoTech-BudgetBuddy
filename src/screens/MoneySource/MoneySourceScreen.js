import { Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../../components/SearchBar";
import { FDATA } from "../../constants";
import MoneySource from "../../components/MoneySource";
import formattedValue from "../../components/formattedValue";
import { useEffect, useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  getBalanceAccount,
  getUserFromStorage,
} from "../../services/userService";

import { getMoneySourceByType } from "../../services/moneySourceService";
import { useNavigation } from "@react-navigation/native";
export default function MoneySourceScreen({}) {
  const navigation = useNavigation();
  const [balance, setBalance] = useState({});
  const [moneySources, setMoneySources] = useState([]);
  const [savings, setSavings] = useState([]);
  const [debts, setDebts] = useState([]);
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const user = await getUserFromStorage();
  //       const data = await getMoneySourceByType(user._id);
  //       setMoneySources(data?.moneySources);
  //       setSavings(data?.savings);
  //       setDebts(data?.debts);

  //       const moneySourceArr = data.moneySources.map(item => ({Budget: item.Budget}))
  //       const totalBudget = moneySourceArr.reduce((x, y) => {return parseInt(x) + parseInt(y.Budget)}, [0])
  //       setBalance(totalBudget);
  //     } catch (error) {
  //       console.log("Failed to fetch data from Money Source Screen ", error);
  //     }
  //   };
  //   fetchData();
  // }, [navigation]);

  const fetchData = async () => {
    try {
      const user = await getUserFromStorage();
      const data = await getMoneySourceByType(user._id);
      setMoneySources(data?.moneySources);
      setSavings(data?.savings);
      setDebts(data?.debts);
      const moneySourceArr = data.moneySources.map(item => ({Budget: item.Budget}))
      const totalBudget = moneySourceArr.reduce((x, y) => {return parseInt(x) + parseInt(y.Budget)}, [0])
      setBalance(totalBudget);
      setLoading(false);
    } catch (error) {
      console.log("Failed to fetch data from Money Source Screen ", error);
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      fetchData();

      // Clean-up function (if needed)
      return () => {
        // Clean-up code (if needed)
      };
    }, [])
  );

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
              {formattedValue({ value: parseInt(balance) })}
            </Text>
          </View>

          {moneySources.length > 0 &&
            moneySources.map((item, index) => (
              <MoneySource
              key={index}
              moneySourceID={item._id}
              iconType={"money"}
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
              moneySourceID={item._id}
              iconType={"gift"}
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
                iconType={"cc-diners-club"}
                moneySourceName={item.name}
                balance={item.Budget}
              />
            ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
