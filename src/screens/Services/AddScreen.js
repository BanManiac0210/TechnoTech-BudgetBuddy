import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../../constants';

export default function AddScreen({navigation}) {
  const toAddIncome = () => {
    navigation.navigate('AddIncomeScreen')
  }
  const toAddExpense = () => {
    navigation.navigate('AddExpenseScreen')
  }
  const toAddTransfer = () => {
    navigation.navigate('AddTransferScreen')
  }
  const toAddMoneySource = () => {
    navigation.navigate('AddMoneySourceScreen')
  }
  const toAddDebt = () => {
    navigation.navigate('AddDebtScreen')
  }
  const toAddSaving = () => {
    navigation.navigate('AddSavingScreen')
  }

  return (
    <SafeAreaView>
      <View className="flex-col bg-white w-screen h-screen p-2.5 space-y-1">        
        <View className="flex-col flex-1 pb-[80] px-[20] justify-end space-y-10">
          <View className="flex-col flex-1 px-[20] justify-end items-center space-y-5">
            <TouchableOpacity className="w-full justify-center items-center flex-row bg-purple-900 p-2 rounded space-x-3" onPress={toAddMoneySource}>
              <Icon name="credit-card" size={30} color="white" />
              <Text className="font-bold text-white text-base text-center">Tạo nguồn tiền mới</Text>
            </TouchableOpacity>

            <TouchableOpacity className="w-full justify-center items-center flex-row bg-purple-900 p-2 rounded space-x-3" onPress={toAddDebt}>
              <Icon name="calendar-minus-o" size={30} color="white" />
              <Text className="font-bold text-white text-base text-center">Tạo khoản nợ mới</Text>
            </TouchableOpacity>
            
            <TouchableOpacity className="w-full justify-center items-center flex-row bg-purple-900 p-2 rounded space-x-3" onPress={toAddSaving}>
              <Icon name="gift" size={30} color="white" />
              <Text className="font-bold text-white text-base text-center">Tạo khoản tiết kiệm mới</Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-center items-center space-x-4">
            <View className="flex-col justify-center items-center">
              <View className="h-[50]"></View>
              <TouchableOpacity className="w-[100] justify-center items-center" onPress={toAddIncome}>
                <View className="h-[50] w-[50] rounded-full items-center justify-center bg-purple-900">
                  <Icon name="sign-in" size={30} color="white" />
                </View>
                <Text className="font-bold text-purple-900 text-base text-center">Thu nhập</Text>
              </TouchableOpacity>
            </View>

            <View className="flex-col justify-center items-center">
              <TouchableOpacity className="w-[100] justify-center items-center" onPress={toAddTransfer}>
                <View className="h-[50] w-[50] rounded-full items-center justify-center bg-purple-900">
                  <Icon name="retweet" size={30} color="white" />
                </View>
                <Text className="font-bold text-purple-900 text-base text-center">Chuyển tiền</Text>
              </TouchableOpacity>
              <View className="h-[50]"></View>
            </View>

            <View className="flex-col justify-center items-center">
              <View className="h-[50]"></View>
              <TouchableOpacity className="w-[100] justify-center items-center" onPress={toAddExpense}>
                <View className="h-[50] w-[50] rounded-full items-center justify-center bg-purple-900">
                  <Icon name="sign-out" size={30} color="white" />
                </View>
                <Text className="font-bold text-purple-900 text-base text-center">Chi tiêu</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    </View>
    </SafeAreaView>
  );
}