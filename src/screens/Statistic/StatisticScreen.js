import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../../components/SearchBar";
import { FDATA } from "../../constants";
import MoneySource from "../../components/MoneySource";
import formattedValue from "../../components/formattedValue";
// import DropdownMenuButton from '../../components/StatisticScreenComponents/DropdownMenuButton';
import CollapsibleMenuButton from "../../components/StatisticScreenComponents/CollapsibleMenuButton";
import Icon from "react-native-vector-icons/FontAwesome";
import Chart from "../../components/StatisticScreenComponents/Chart";
import IncomeExpenseTag from "../../components/IncomeExpenseTag";
import { logType } from "../../utils/typeEnum";
import { useState, useEffect } from "react";
import { getUserFromStorage } from "../../services/userService";
import { chartTypeByMonth } from "../../services/logService";

export default function StatisticScreen() { 
  const [incomeValue, setIncome] = useState(0) //
  const [expenseValue, setExpense] = useState(0) //

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await getUserFromStorage(); 
        const date = new Date();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const dataThu = await chartTypeByMonth(month, year, "thu", user._id);
        const incomeVal = dataThu.reduce((x, y) => {return x + y}, [0])
        const dataChi = await chartTypeByMonth(month, year, "chi", user._id);
        const expenseVal = dataChi.reduce((x, y) => {return x + y}, [0])
        setIncome(incomeVal);
        setExpense(expenseVal)


      } catch (error) {
        console.log("Failed to fetch data: ", error);
      }
    };
    fetchData();
  }, []);
  
  const condition = FDATA.currentBalance < 0; // Example condition
  return (
    <SafeAreaView>
      <View className="flex-col bg-white w-screen h-screen p-2.5 space-y-1">
        <SearchBar />

        <ScrollView
          className="flex-1 px-5 py-3 flex-col"
          contentContainerStyle={{ paddingBottom: 120 }}
          showsVerticalScrollIndicator={false}
        >
          {/* BUDGET */}
          <View>
            <View className="flex-row mb-2 items-start space-x-2 justify-start">
              <Text className="font-bold text-left text-xl text-purple-900">
                Ngân sách
              </Text>
              {condition && (
                <Icon
                  name="star"
                  size={20}
                  color="red"
                  style={{ marginTop: 4 }}
                />
              )}
            </View>
            <View>
              <CollapsibleMenuButton
                iconType={FDATA.moneySources[0].iconType}
                moneySourceName={FDATA.moneySources[0].moneySourceName}
                balance={FDATA.currentBalance}
              />
            </View>
          </View>

          {/* REPORT*/}
          <View>
            <Text className="font-bold my-3 text-left text-xl text-purple-900">
              Báo cáo
            </Text>
            <IncomeExpenseTag
              incomeValue={incomeValue}
              expenseValue={expenseValue}
            />
          </View>

          {/* CHART */}
          <View>
            <Text className="font-bold my-3 text-left text-xl text-purple-900">
              Biểu đồ trực quan
            </Text>
            <View className="flex-col mb-2 ">
              <View className="flex-1 flex-col mb-2 ">
                <View className="flex-row mb-2 ">
                  <Text className="flex-1 text-left font-bold text-lg text-purple-900">
                    Thu nhập
                  </Text>
                  <Text className="flex-1 text-right">Filter</Text>
                </View>
                <Chart type={logType.THU} />
              </View>

              <View className="flex-1 flex-col mb-2 ">
                <View className="flex-row mb-2 ">
                  <Text className="flex-1 text-left font-bold text-lg text-purple-900">
                    Chi tiêu
                  </Text>
                  <Text className="flex-1 text-right">Filter</Text>
                </View>
                <Chart type={logType.CHI} />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
