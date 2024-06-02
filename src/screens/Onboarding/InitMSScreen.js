import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity } from 'react-native';

export default function InitMoneySourceScreen() {
  const navigation = useNavigation()
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Text className="text-xl font-bold text-violet-900">Init MS Screen</Text>
      <TouchableOpacity className="px-[20] bg-blue-300 justify-center p-[10]" onPress={() => navigation.navigate('AddInitMoneySourceScreen')}>
        <Text className="text-xl font-bold text-violet-900">Go to AddInitMoneySourceScreen Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity className="px-[20] bg-blue-300 justify-center p-[10]" onPress={() => navigation.navigate('InitCategoryScreen')}>
        <Text className="text-xl font-bold text-violet-900">Go to Init Cate Screen</Text>
      </TouchableOpacity>
    </View>
  );
}