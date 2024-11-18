import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal } from "react-native";
import { Circle, G, Text as SvgText, Svg } from "react-native-svg";

const NutritionTracker = () => {
    // State for nutrition data
    const [totalCalories, setTotalCalories] = useState(1300);
    const [consumedCalories, setConsumedCalories] = useState(960);
    const [fat, setFat] = useState(80); // grams
    const [protein, setProtein] = useState(160); // grams
    const [carbs, setCarbs] = useState(230); // grams
  
    // State for modal visibility
    const [modalVisible, setModalVisible] = useState(false);
  
    // Local state for the values entered in the modal
    const [newFat, setNewFat] = useState(0);
    const [newProtein, setNewProtein] = useState(0);
    const [newCarbs, setNewCarbs] = useState(0);
  
    // Calculate percentage function
    const calculatePercentage = (value, total) => Math.round((value / total) * 100);
  
    // Function to calculate calories from fat, protein, and carbs
    const calculateCalories = (fat, protein, carbs) => {
      return fat * 9 + protein * 4 + carbs * 4;
    };
  
    // Handle "Add Meal" button press
    const handleAddMeal = () => {
      setModalVisible(true);
    };
  
    // Add a new meal and update calories
    const addMeal = () => {
      // Calculate the new calories from the added meal
      const newCalories = calculateCalories(newFat, newProtein, newCarbs);
  
      // Update the nutritional values by adding the new meal values
      setFat(prevFat => prevFat + newFat);
      setProtein(prevProtein => prevProtein + newProtein);
      setCarbs(prevCarbs => prevCarbs + newCarbs);
  
      // Update the total calories consumed
      setConsumedCalories(prevCalories => prevCalories + newCalories);
  
      // Close the modal after adding the meal
      setModalVisible(false);
  
      // Reset the modal input fields
      setNewFat(0);
      setNewProtein(0);
      setNewCarbs(0);
    };
  
    // Calculate percentages for fat, protein, and carbs
    const fatPercentage = calculatePercentage(fat, fat + protein + carbs);
    const proteinPercentage = calculatePercentage(protein, fat + protein + carbs);
    const carbPercentage = calculatePercentage(carbs, fat + protein + carbs);
  
    return (
      <View style={styles.container}>
        {/* Title */}
        <Text style={styles.title}>Nutrition</Text>
  
        {/* Total calories */}
        <Text style={styles.subtitle}>
          You have consumed{" "}
          <Text style={styles.highlight}>{consumedCalories} kcal</Text> today
        </Text>
  
        {/* Pie chart */}
        <View style={styles.chartContainer}>
          <Svg width={250} height={250} viewBox="0 0 200 200">
            <G rotation="-90" origin="100, 100">
              {/* Fat Background */}
              <Circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="#E0E0E0" // Gray background
                strokeWidth="15"
              />
              {/* Fat Circle */}
              <Circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="#FFA726" // Orange color
                strokeWidth="15"
                strokeDasharray={`${(fatPercentage * 565) / 100} 565`}
                strokeLinecap="round"
              />
              {/* Protein Background */}
              <Circle
                cx="100"
                cy="100"
                r="75"
                fill="none"
                stroke="#E0E0E0" // Gray background
                strokeWidth="15"
              />
              {/* Protein Circle */}
              <Circle
                cx="100"
                cy="100"
                r="75"
                fill="none"
                stroke="#FF7043" // Red color
                strokeWidth="15"
                strokeDasharray={`${(proteinPercentage * 471) / 100} 471`}
                strokeLinecap="round"
              />
              {/* Carbs Background */}
              <Circle
                cx="100"
                cy="100"
                r="60"
                fill="none"
                stroke="#E0E0E0" // Gray background
                strokeWidth="15"
              />
              {/* Carbs Circle */}
              <Circle
                cx="100"
                cy="100"
                r="60"
                fill="none"
                stroke="#29B6F6" // Blue color
                strokeWidth="15"
                strokeDasharray={`${(carbPercentage * 377) / 100} 377`}
                strokeLinecap="round"
              />
            </G>
            {/* Text in the center */}
            <SvgText
              x="90"
              y="90"
              fontSize="24"
              fontWeight="bold"
              textAnchor="middle"
              fill="#333"
            >
              {Math.round((consumedCalories / totalCalories) * 100)}%
            </SvgText>
            <SvgText
              x="90"
              y="110"
              fontSize="14"
              textAnchor="middle"
              fill="#999"
            >
              {totalCalories} kcal
            </SvgText>
          </Svg>
        </View>
  
        {/* Nutritional details */}
        <View style={styles.details}>
          <View style={styles.detailRow}>
            <View style={[styles.dot, { backgroundColor: "#FFA726" }]} />
            <Text style={styles.detailText}>Fat</Text>
            <Text style={styles.detailValue}>{fat}g</Text>
            <Text style={styles.detailPercentage}>{fatPercentage}%</Text>
          </View>
          <View style={styles.detailRow}>
            <View style={[styles.dot, { backgroundColor: "#FF7043" }]} />
            <Text style={styles.detailText}>Protein</Text>
            <Text style={styles.detailValue}>{protein}g</Text>
            <Text style={styles.detailPercentage}>{proteinPercentage}%</Text>
          </View>
          <View style={styles.detailRow}>
            <View style={[styles.dot, { backgroundColor: "#29B6F6" }]} />
            <Text style={styles.detailText}>Carbs</Text>
            <Text style={styles.detailValue}>{carbs}g</Text>
            <Text style={styles.detailPercentage}>{carbPercentage}%</Text>
          </View>
        </View>
  
        {/* Add meal button */}
        <TouchableOpacity style={styles.addButton} onPress={handleAddMeal}>
          <Text style={styles.addButtonText}>Add Meal</Text>
        </TouchableOpacity>
  
        {/* Meal input modal */}
        <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add Meal</Text>
            <TextInput
              style={styles.input}
              placeholder="Fat (g)"
              keyboardType="numeric"
              onChangeText={(value) => setNewFat(parseFloat(value))}
            />
            <TextInput
              style={styles.input}
              placeholder="Protein (g)"
              keyboardType="numeric"
              onChangeText={(value) => setNewProtein(parseFloat(value))}
            />
            <TextInput
              style={styles.input}
              placeholder="Carbs (g)"
              keyboardType="numeric"
              onChangeText={(value) => setNewCarbs(parseFloat(value))}
            />
            <TouchableOpacity
              style={styles.addMealButton}
              onPress={() => addMeal(fat, protein, carbs)}
            >
              <Text style={styles.addMealButtonText}>Add Meal</Text>
            </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  };
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
    marginBottom: 20,
  },
  highlight: {
    color: "#00CFFF",
    fontWeight: "bold",
  },
  chartContainer: {
    marginBottom: 30,
  },
  details: {
    width: "100%",
    marginBottom: 30,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 10,
  },
  detailText: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  detailValue: {
    fontSize: 16,
    color: "#666",
    marginRight: 10,
  },
  detailPercentage: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  addButton: {
    backgroundColor: "#00CFFF",
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: "center",
    width: "80%",
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: 300,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    borderRadius: 5,
  },
  addMealButton: {
    backgroundColor: "#00CFFF",
    borderRadius: 25,
    paddingVertical: 10,
    width: "80%",
    alignItems: "center",
  },
  addMealButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default NutritionTracker;
