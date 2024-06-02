import { Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../../components/SearchBar';
import { FDATA } from '../../constants';
import MoneySource from '../../components/MoneySource';
import formattedValue from '../../components/formattedValue';

export default function MoneySourceScreen() { 
  return (
    <SafeAreaView>
      <View className="flex-col bg-white w-screen h-screen p-2.5 space-y-1 ">
          <SearchBar/>  
          
        <ScrollView 
          className="flex-1 px-5 py-3 flex-col " 
          contentContainerStyle={{paddingBottom: 80}} 
          showsVerticalScrollIndicator={false}
        >
          <View className="flex-row mb-2">
            <Text className="font-bold flex-1 text-left text-xl text-purple-900">Nguồn tiền</Text>
            <Text className="font-bold flex-1 text-right text-xl text-purple-900">{formattedValue({value:parseInt(FDATA.currentBalance)})}</Text>
          </View>

          {FDATA.moneySources.map((item, index) => (
            <MoneySource
              key={index}
              iconType={item.iconType}
              moneySourceName={item.moneySourceName}
              balance={item.balance}
            />
          ))}

          <Text className="font-bold flex-1 my-3 text-left text-xl text-purple-900">Tiết kiệm</Text>
          
          {FDATA.savings.map((item, index) => (
            <MoneySource
              key={index}
              iconType={item.iconType}
              moneySourceName={item.moneySourceName}
              balance={item.balance}
            />
          ))}

          <Text className="font-bold flex-1 my-3 text-left text-xl text-purple-900">Khoản nợ</Text>

          {FDATA.debts.map((item, index) => (
            <MoneySource
              key={index}
              moneySourceID={item.moneySourceID}
              iconType={item.iconType}
              moneySourceName={item.moneySourceName}
              balance={item.balance}
            />
          ))}

        </ScrollView>
    </View>
    </SafeAreaView>
  );
}