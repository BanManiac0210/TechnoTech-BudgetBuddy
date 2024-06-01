import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View } from 'react-native';

export default function LoginScreen( {navigation} ) {
  const navigateIntoAppTab = () => {
    navigation.navigate('HomeScreen')
  }

  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Text className="text-xl font-bold text-violet-900 p-[100]">Login Screen</Text>
      <TouchableOpacity className="px-[20] bg-blue-300 justify-center p-[10]" onPress={navigateIntoAppTab}>
        <Text className="text-xl font-bold text-violet-900">Go to HomeScreen</Text>
      </TouchableOpacity>
    </View>
  );
}