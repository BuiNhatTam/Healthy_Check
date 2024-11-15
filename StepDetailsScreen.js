import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const StepDetailsScreen = () => {
  return (
    <View style={styles.container}>
      {/* Tiêu đề */}
      <Text style={styles.title}>Steps</Text>

      {/* Mục tiêu */}
      <Text style={styles.goalText}>
        You have achieved <Text style={styles.percentageText}>80%</Text> of your goal today
      </Text>

      {/* Vòng tròn tiến độ */}
      <View style={styles.progressContainer}>
        <Text style={styles.stepCount}>11,857</Text>
        <Text style={styles.stepGoalText}>Steps out of 18k</Text>
      </View>

      {/* Các thông số bổ sung */}
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statText}>850 kcal</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statText}>5 km</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statText}>120 min</Text>
        </View>
      </View>

      {/* Biểu đồ */}
      <LineChart
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              data: [20, 45, 28, 80, 99, 43]
            }
          ]
        }}
        width={Dimensions.get("window").width - 16} // from react-native
        height={220}
        yAxisLabel=""
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  goalText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  percentageText: {
    fontWeight: 'bold',
    color: '#00BFFF',
  },
  progressContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  stepCount: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  stepGoalText: {
    fontSize: 18,
    color: '#888',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default StepDetailsScreen;