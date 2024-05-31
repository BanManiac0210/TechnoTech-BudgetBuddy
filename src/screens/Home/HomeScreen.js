import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../../components/SearchBar';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View className="flex-col bg-white w-screen h-screen p-2.5 space-y-1">
        <View className=" items-center justify-center">
          <SearchBar/>  
        </View>

        <View className="flex-col justify-start h-full w-full pb-[120] pt-[15]">
          <Text className="text-xl text-center font-bold text-violet-900">Home Screen</Text>
        </View>
    </View>
    </SafeAreaView>
  );
}