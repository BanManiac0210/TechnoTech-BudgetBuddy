import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View } from 'react-native';

export default function LoginScreen( {navigation} ) {
  const navigateIntoAppTab = () => {
    navigation.navigate('AppTab')
  }

  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Text className="text-xl font-bold text-violet-900 p-[100]">Login Screen</Text>
      <TouchableOpacity className="px-[20] bg-blue-300 justify-center p-[10]" onPress={() => navigation.navigate('Sigup')}>
        <Text className="text-xl font-bold text-violet-900">Go to Sigup</Text>
      </TouchableOpacity>
      <TouchableOpacity className="px-[20] bg-blue-300 justify-center p-[10]" onPress={() => navigation.navigate('Login')}>
        <Text className="text-xl font-bold text-violet-900">Go to Login</Text>
      </TouchableOpacity>
      <TouchableOpacity className="px-[20] bg-blue-300 justify-center p-[10]" onPress={navigateIntoAppTab}>
        <Text className="text-xl font-bold text-violet-900">Go to HomeScreen</Text>
      </TouchableOpacity>
      <TouchableOpacity className="px-[20] bg-blue-300 justify-center p-[10]" onPress={() => navigation.navigate('InitMoneySourceScreen')}>
        <Text className="text-xl font-bold text-violet-900">Go to Add Init Money Source Screen</Text>
      </TouchableOpacity>
    </View>
  );
}