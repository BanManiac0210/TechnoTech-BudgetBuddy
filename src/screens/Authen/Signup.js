import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { COLORS } from "../../constants";
import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import axios from "axios";
import { registerAccount } from "../../services/userService";

export default function Signup() {
  const navigation = useNavigation();
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userMail, setUserMail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    if (
      userFirstName.trim() === "" ||
      userLastName.trim() === "" ||
      userMail.trim() === "" ||
      username.trim() === "" ||
      password.trim() === ""
    ) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    try {
      const response = await registerAccount({
        email: userMail,
        username: username,
        password: password,
        firstName: userFirstName,
        lastName: userLastName,
        phone: "08XXXXXXXX",
        totalMoney: 0
      });

      // Handle successful signup, e.g., navigate to the success screen
      Alert.alert("Success", "Signup successful");
      navigation.navigate("Success");
    } catch (error) {
      // Handle signup error, e.g., show an error message
      Alert.alert("Error", "Signup failed");
    }
  };

  return (
    <View className="w-full h-full bg-white items-center justify-start">
      <ImageBackground
        source={require("../../../assets/images/Onboarding/bg-onboarding1.png")}
        className="w-full h-[450] items-center justify-center"
        resizeMode="stretch"
      >
        {/* LOGO */}
        <View
          className="flex-col justify-center items-center space-y-2 "
          style={{ marginBottom: 0 }}
        >
          <View>
            <View className="mt-2 mb-2">
              <Text
                className="text-lg text-center text-purple-900"
                style={{ lineHeight: 24 }}
              >
                Chào mừng đến với
              </Text>
            </View>
            <View>
              <Text className="font-bold text-3xl text-center text-purple-900">
                BudgetBuddy
              </Text>
            </View>
            <View className="mt-2">
              <Text
                className="text-lg text-center text-purple-900"
                style={{ lineHeight: 24 }}
              >
                Ứng dụng ghi chép thu chi
              </Text>
              <Text
                className="text-lg text-center text-purple-900"
                style={{ lineHeight: 24 }}
              >
                tuyệt vời của riêng bạn!
              </Text>
            </View>
          </View>

          <Image
            source={require("../../../assets/images/app-icon.png")}
            className="w-[250] h-[250]"
            resizeMode="stretch"
          />
        </View>
      </ImageBackground>

      {/* SIGNUP FORM */}
      <View className="flex-col w-full justify-center items-center">
        <View className="pt-2">
          <Text className="font-bold text-3xl text-center text-purple-900">
            Đăng ký
          </Text>
        </View>

        <View className="flex-1 flex-col p-5 space-y-5 w-full justify-start items-center">
          {/* FIRST NAME */}
          <View className="mb-9 flex-row space-x-4 w-[70%]">
            <View className="flex-1">
              <Text
                style={{ zIndex: 10 }}
                className="absolute -top-2 left-2 bg-white px-1 text-md text-gray-500"
              >
                Họ
              </Text>
              <TextInput
                className="relative h-12 border-2 px-3 py-2 w-full border-purple-800 rounded-lg"
                value={userFirstName}
                onChangeText={setUserFirstName}
                placeholder="Họ của bạn..."
              />
              {userFirstName.length > 0 && (
                <TouchableOpacity
                  style={{ position: "absolute", right: 10, top: 14 }}
                  onPress={() => setUserFirstName("")}
                >
                  <Icon name="trash" size={20} color="gray" />
                </TouchableOpacity>
              )}
            </View>

            {/* LAST NAME */}
            <View className="flex-1">
              <Text
                style={{ zIndex: 10 }}
                className="absolute -top-2 left-2 bg-white px-1 text-md text-gray-500"
              >
                Tên
              </Text>
              <TextInput
                className="relative h-12 border-2 px-3 py-2 w-full border-purple-800 rounded-lg"
                value={userLastName}
                onChangeText={setUserLastName}
                placeholder="Tên của bạn..."
              />
              {userLastName.length > 0 && (
                <TouchableOpacity
                  style={{ position: "absolute", right: 10, top: 14 }}
                  onPress={() => setUserLastName("")}
                >
                  <Icon name="trash" size={20} color="gray" />
                </TouchableOpacity>
              )}
            </View>
          </View>

          {/* EMAIL */}
          <View className="mb-9 w-[70%]">
            <Text
              style={{ zIndex: 10 }}
              className="absolute -top-2 left-2 bg-white px-1 text-md text-gray-500"
            >
              Email
            </Text>
            <TextInput
              className="relative h-12 border-2 px-3 py-2 w-full border-purple-800 rounded-lg"
              value={userMail}
              onChangeText={setUserMail}
              placeholder="Điền email của bạn..."
            />
            {userMail.length > 0 && (
              <TouchableOpacity
                style={{ position: "absolute", right: 10, top: 14 }}
                onPress={() => setUserMail("")}
              >
                <Icon name="trash" size={20} color="gray" />
              </TouchableOpacity>
            )}
          </View>

          {/* USERNAME */}
          <View className="mb-9 w-[70%]">
            <Text
              style={{ zIndex: 10 }}
              className="absolute -top-2 left-2 bg-white px-1 text-md text-gray-500"
            >
              Tên đăng nhập
            </Text>
            <TextInput
              className="relative h-12 border-2 px-3 py-2 w-full border-purple-800 rounded-lg"
              value={username}
              onChangeText={setUsername}
              placeholder="Điền tên đăng nhập..."
            />
            {username.length > 0 && (
              <TouchableOpacity
                style={{ position: "absolute", right: 10, top: 14 }}
                onPress={() => setUsername("")}
              >
                <Icon name="trash" size={20} color="gray" />
              </TouchableOpacity>
            )}
          </View>

          {/* PASSWORD */}
          <View className="mb-14 w-[70%]">
            <Text
              style={{ zIndex: 10 }}
              className="absolute -top-2 left-2 bg-white px-1 text-md text-gray-500"
            >
              Mật khẩu
            </Text>
            <TextInput
              className="relative h-12 border-2 px-3 py-2 w-full border-purple-800 rounded-lg"
              value={password}
              onChangeText={setPassword}
              placeholder="Điền mật khẩu..."
              secureTextEntry={true}
            />
            {password.length > 0 && (
              <TouchableOpacity
                style={{ position: "absolute", right: 10, top: 14 }}
                onPress={() => setPassword("")}
              >
                <Icon name="trash" size={20} color="gray" />
              </TouchableOpacity>
            )}
          </View>

          {/* SIGNUP BUTTON */}
          <View className="w-[70%] flex-row space-x-5 items-center justify-center">
            <TouchableOpacity
              className="w-[45%] h-10 bg-purple-800 rounded-3xl justify-center items-center"
              onPress={() => navigation.navigate("Login")}
            >
              <Text className="text-white text-md">Quay lại</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="w-[45%] h-10 bg-white border-2 border-purple-800 rounded-3xl justify-center items-center"
              onPress={handleSignup}
            >
              <Text className="text-purple-800 text-md">Đăng ký</Text>
            </TouchableOpacity>
          </View>

          <View className="w-[70%] flex-row space-x-5 items-center justify-center">
            <TouchableOpacity>
              <Text className="text-black">Quên mật khẩu?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
