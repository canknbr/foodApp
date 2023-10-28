import { View, Text } from "react-native";
import React, { useEffect } from "react";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";

const WelcomeScreen = () => {
  const paddingOne = useSharedValue(0);
  const paddingTwo = useSharedValue(0);
  const navigation = useNavigation();
  useEffect(() => {
    paddingOne.value = 0;
    paddingTwo.value = 0;
    setTimeout(() => {
      paddingOne.value = withSpring(paddingOne.value + hp(5));
    }, 100);
    setTimeout(() => {
      paddingTwo.value = withSpring(paddingTwo.value + hp(5.5));
    }, 200);
    setTimeout(() => {
      navigation.navigate("Home");
    }, 2000);
  }, []);
  return (
    <View className="flex-1 justify-center items-center bg-[#BA274A] space-y-10">
      <Animated.View
        className="rounded-full bg-[#F5E9E2]/20"
        style={{
          padding: paddingTwo,
        }}>
        <Animated.View
          className="rounded-full bg-[#F5E9E2]/20"
          style={{
            padding: paddingOne,
          }}>
          <Image
            source={require("../../assets/images/welcome.png")}
            style={{
              width: hp(20),
              height: hp(20),
            }}
          />
        </Animated.View>
      </Animated.View>
      <View className="flex items-center space-y-2">
        <Text
          className="text-[#F5E9E2] font-bold tracking-widest"
          style={{
            fontSize: hp(7),
          }}>
          Food
        </Text>
        <Text className="text-[#F5E9E2] font-bold tracking-widest">
          Food is always right
        </Text>
      </View>
    </View>
  );
};

export default WelcomeScreen;
