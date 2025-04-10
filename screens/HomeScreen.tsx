import { View, Text, Button } from "react-native";
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  home: undefined;
  details: undefined;
};

interface Props {
  navigation: StackNavigationProp<RootStackParamList, "home">;
}

const HomeScreen = ({ navigation }: Props) => {
  return (
    <View className="flex-1 justify-around items-center ">
      <Text className="text-3xl font-bold">OpenGig</Text>
      <Text className="">Home Screen</Text>
      <View>
        <Button
          title="Test Stack"
          onPress={() => navigation.navigate("details")}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
