import { View, Text } from "react-native";
import React, { useEffect } from "react";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const paddingOne = useSharedValue(0);
  const paddingTwo = useSharedValue(0);
  const navigation = useNavigation();
  useEffect(() => {
    paddingOne.value = 0;
    paddingTwo.value = 0;
    setTimeout(() => {}, 100);
    setTimeout(() => {}, 110);
    setTimeout(() => {
      navigation.navigate("Home");
    }, 2500);
  }, []);
  return (
    <View>
      <Text>WelcomeScreen</Text>
    </View>
  );
};

export default WelcomeScreen;
