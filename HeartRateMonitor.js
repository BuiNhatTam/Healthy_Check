import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";

const HeartRateMonitor = () => {
  const [heartRate, setHeartRate] = useState(""); // User input for heart rate
  const [status, setStatus] = useState(""); // Heart health status

  const checkHeartRate = () => {
    const bpm = parseInt(heartRate);

    if (!bpm || bpm <= 0) {
      alert("Please enter a valid heart rate!");
      return;
    }

    // Determine heart rate status
    if (bpm < 60) {
      setStatus("Low (Bradycardia)");
    } else if (bpm >= 60 && bpm <= 100) {
      setStatus("Normal");
    } else {
      setStatus("High (Tachycardia)");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Heart Rate Monitor</Text>

      {/* Heart Icon */}
      <Image
        source={require("./assets/heart.png")}
        style={styles.heartIcon}
      />

      {/* Input for Heart Rate */}
      <TextInput
        style={styles.input}
        placeholder="Enter heart rate (BPM)"
        placeholderTextColor="#aaa"
        keyboardType="numeric"
        value={heartRate}
        onChangeText={(text) => setHeartRate(text)}
      />

      {/* Button to Check Heart Rate */}
      <TouchableOpacity style={styles.button} onPress={checkHeartRate}>
        <Text style={styles.buttonText}>Check</Text>
      </TouchableOpacity>

      {/* Result Display */}
      {status ? (
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Your Heart Rate</Text>
          <Text style={styles.resultText}>{heartRate} BPM</Text>
          <Text style={styles.statusText}>Status: {status}</Text>
        </View>
      ) : null}
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
    color: "#ff6b6b",
    marginBottom: 20,
    textAlign: "center",
  },
  heartIcon: {
    width: 80,
    height: 80,
    marginBottom: 20,
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
    backgroundColor: "#ff6b6b",
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
    color: "#ff6b6b",
    marginBottom: 10,
  },
  resultText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginVertical: 5,
  },
  statusText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#555",
    marginTop: 10,
  },
});

export default HeartRateMonitor;
