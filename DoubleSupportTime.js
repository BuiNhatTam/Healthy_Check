import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const DoubleSupportTime = () => {
  const [totalTime, setTotalTime] = useState(""); // Total walking time (in seconds)
  const [doubleSupport, setDoubleSupport] = useState(""); // Double support time (in seconds)
  const [result, setResult] = useState(null); // Result in percentage

  const calculateDoubleSupport = () => {
    const total = parseFloat(totalTime);
    const doubleTime = parseFloat(doubleSupport);

    if (!total || !doubleTime || total <= 0 || doubleTime <= 0) {
      alert("Please enter valid times!");
      return;
    }

    // Calculate percentage
    const percentage = ((doubleTime / total) * 100).toFixed(2);
    setResult(percentage);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Double Support Time</Text>

      {/* Input for Total Walking Time */}
      <TextInput
        style={styles.input}
        placeholder="Enter total walking time (seconds)"
        placeholderTextColor="#aaa"
        keyboardType="numeric"
        value={totalTime}
        onChangeText={(text) => setTotalTime(text)}
      />

      {/* Input for Double Support Time */}
      <TextInput
        style={styles.input}
        placeholder="Enter double support time (seconds)"
        placeholderTextColor="#aaa"
        keyboardType="numeric"
        value={doubleSupport}
        onChangeText={(text) => setDoubleSupport(text)}
      />

      {/* Button to Calculate */}
      <TouchableOpacity style={styles.button} onPress={calculateDoubleSupport}>
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>

      {/* Display Result */}
      {result && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>
            Double Support Time: {result}%
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f6fc",
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#007bff",
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
    backgroundColor: "#007bff",
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
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  resultText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#007bff",
  },
});

export default DoubleSupportTime;
