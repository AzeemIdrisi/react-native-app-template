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
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>OpenGig - Home Screen</Text>
      <View style={{ marginTop: 10 }}>
        <Button
          title="View Details"
          onPress={() => navigation.navigate("details")}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
