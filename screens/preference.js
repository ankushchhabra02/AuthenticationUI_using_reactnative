import { Center } from "native-base";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  Input,
  NativeBaseProvider,
  Button,
  Icon,
  Box,
  Image,
  AspectRatio,
} from "native-base";

function PreferenceScreen() {
  const navigation = useNavigation();
  const [selectedButton, setSelectedButton] = useState("");

  const handleButtonPress = (buttonText) => {
    setSelectedButton(buttonText);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        resizeMode="cover"
        source={require("../assets/download.png")}
      >
        <View style={styles.holder}>
          <Text style={styles.heading}>PREFERENCES</Text>
          <View style={styles.content}>
            <TouchableOpacity
              style={
                selectedButton === "1" ? styles.selectedButton : styles.button
              }
              onPress={() => handleButtonPress("1")}
            >
              <Text style={styles.buttonText}>Comedy</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={
                selectedButton === "2" ? styles.selectedButton : styles.button
              }
              onPress={() => handleButtonPress("2")}
            >
              <Text style={styles.buttonText}>Horror</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.content}>
            <TouchableOpacity
              style={
                selectedButton === "3" ? styles.selectedButton : styles.button
              }
              onPress={() => handleButtonPress("3")}
            >
              <Text style={styles.buttonText}>Sci-Fi</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={
                selectedButton === "4" ? styles.selectedButton : styles.button
              }
              onPress={() => handleButtonPress("4")}
            >
              <Text style={styles.buttonText}>Thriller</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.content}>
            <TouchableOpacity
              style={
                selectedButton === "5" ? styles.selectedButton : styles.button
              }
              onPress={() => handleButtonPress("5")}
            >
              <Text style={styles.buttonText}>Kids</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={
                selectedButton === "6" ? styles.selectedButton : styles.button
              }
              onPress={() => handleButtonPress("6")}
            >
              <Text style={styles.buttonText}>Anime</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.content}>
            <TouchableOpacity
              style={
                selectedButton === "7" ? styles.selectedButton : styles.button
              }
              onPress={() => handleButtonPress("7")}
            >
              <Text style={styles.buttonText}>Hollywood</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={
                selectedButton === "8" ? styles.selectedButton : styles.button
              }
              onPress={() => handleButtonPress("8")}
            >
              <Text style={styles.buttonText}>Bollywood</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    height: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  heading: {
    color: "#32cd32",
    textAlign: "center",
    fontSize: 25,
    marginBottom: 20,
    fontWeight: 600,
  },
  holder: {
    height: "70%",
  },
  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    padding: 10,
    backgroundColor: "#f0f0f0",
    height: 100,
    width: 150,
    borderRadius: 10,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedButton: {
    backgroundColor: "#32cd32",
    padding: 10,
    height: 100,
    width: 150,
    borderRadius: 10,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
});

export default () => {
  return (
    <NativeBaseProvider>
      <PreferenceScreen />
    </NativeBaseProvider>
  );
};
