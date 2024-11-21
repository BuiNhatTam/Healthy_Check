import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const StepDetailsScreen = () => {
  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Steps</Text>

      {/* Goal */}
      <Text style={styles.goalText}>
        You have achieved <Text style={styles.percentageText}>80%</Text> of your goal today
      </Text>

      {/* Progress Circle (using a styled view for now) */}
      <View style={styles.progressContainer}>
        <Text style={styles.stepCount}>11,857</Text>
        <Text style={styles.stepGoalText}>Steps out of 18k</Text>
      </View>

      {/* Stats Section */}
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

      {/* Line Chart */}
      <LineChart
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              data: [20, 45, 28, 80, 99, 43]
            }
          ]
        }}
        width={Dimensions.get("window").width - 16}
        height={220}
        yAxisLabel=""
        yAxisSuffix="k"
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: "#4F83CC",
          backgroundGradientFrom: "#6C9BDC",
          backgroundGradientTo: "#7AABF6",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
            paddingRight: 10
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
          }
        }}
        bezier
        style={styles.chartStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#4F83CC', // Add color for more contrast
  },
  goalText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#4F83CC',
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
    color: '#4F83CC',
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
    color: '#4F83CC',
  },
  chartStyle: {
    marginVertical: 8,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  }
});

export default StepDetailsScreen;
