import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity } from 'react-native';

export default function InitCategoryScreen() {
  const navigation = useNavigation()
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Text className="text-xl font-bold text-violet-900">Init Cate Screen</Text>
      <TouchableOpacity className="px-[20] bg-blue-300 justify-center p-[10]" onPress={() => navigation.navigate('AddCategoryScreen')}>
        <Text className="text-xl font-bold text-violet-900">Go to AddCategoryScreen</Text>
      </TouchableOpacity>
      <TouchableOpacity className="px-[20] bg-blue-300 justify-center p-[10]" onPress={() => navigation.navigate('AppTab')}>
        <Text className="text-xl font-bold text-violet-900">Go to HomeScreen</Text>
      </TouchableOpacity>
    </View>
  );
}