import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from "react-native";

const BMI = () => {
  const [weight, setWeight] = useState(""); // Weight
  const [height, setHeight] = useState(""); // Height
  const [bmi, setBmi] = useState(null); // BMI result
  const [status, setStatus] = useState(""); // Health status

  const calculateBMI = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height) / 100; // Convert cm to meters

    if (!weightNum || !heightNum) {
      alert("Please enter valid weight and height!");
      return;
    }

    const bmiValue = (weightNum / (heightNum * heightNum)).toFixed(1);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      setStatus("Underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setStatus("Normal");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setStatus("Overweight");
    } else {
      setStatus("Obese");
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>BMI Calculator</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter weight (kg)"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
          value={weight}
          onChangeText={(text) => setWeight(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter height (cm)"
          placeholderTextColor="#aaa"
          keyboardType="numeric"
          value={height}
          onChangeText={(text) => setHeight(text)}
        />

        <TouchableOpacity style={styles.button} onPress={calculateBMI}>
          <Text style={styles.buttonText}>Calculate</Text>
        </TouchableOpacity>

        {bmi && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultTitle}>Your Results</Text>
            <Text style={styles.resultText}>BMI: {bmi}</Text>
            <Text style={styles.resultText}>Status: {status}</Text>
          </View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6fc",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#3b3b98",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    width: "90%",
    height: 50,
    borderColor: "#dcdce6",
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 16,
    paddingHorizontal: 15,
    backgroundColor: "#ffffff",
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  button: {
    width: "90%",
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  resultContainer: {
    marginTop: 30,
    width: "90%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  resultTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#3b3b98",
    marginBottom: 10,
  },
  resultText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginVertical: 5,
  },
});

export default BMI;
