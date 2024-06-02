import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PopupConfirm = ({ popupText, visible, onConfirm }) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
    >
      <View className="w-full h-full items-center justify-center bg-purple-100 opacity-90 px-10">
        <View className="w-full items-center justify-center bg-indigo-200 pt-2 pb-3 rounded-xl space-y-2">
          <Text className="text-base font-bold text-violet-900">{popupText}</Text>
          <View className="items-center justify-center flex-row space-x-3 ">
            <TouchableOpacity 
              onPress={onConfirm}
              className="items-center space-x-2 h-[40] flex-row p-2 bg-blue-400 rounded"
            >
              <Text className="text-base font-bold text-violet-900">Xong</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PopupConfirm;