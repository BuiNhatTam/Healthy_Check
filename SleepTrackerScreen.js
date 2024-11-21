import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const SleepTrackerScreen = () => {
  const chartConfig = {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
    barPercentage: 0.5,
  };

  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [6, 7, 5, 6.5, 7.2, 8, 4.5],
      },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Sleep</Text>
      <Text style={styles.subHeader}>Your average time of sleep a day is</Text>
      <Text style={styles.sleepTime}>
        7h 31 <Text style={styles.sleepTimeUnit}>min</Text>
      </Text>

      {/* Tab Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Today</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Text style={styles.activeTabText}>Weekly</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Monthly</Text>
        </TouchableOpacity>
      </View>

      {/* Bar Chart */}
      <BarChart
        style={styles.chart}
        data={data}
        width={screenWidth - 20}
        height={220}
        chartConfig={chartConfig}
        verticalLabelRotation={0}
      />

      {/* Sleep Info */}
      <View style={styles.infoContainer}>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>🌞 Sleep rate</Text>
          <Text style={styles.infoValue}>82%</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>😴 Deepsleep</Text>
          <Text style={styles.infoValue}>1h 3min</Text>
        </View>
      </View>

      {/* Schedule Section */}
      <View style={styles.scheduleContainer}>
        <Text style={styles.scheduleHeader}>Set your schedule</Text>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
        <View style={styles.scheduleBoxContainer}>
          <View style={styles.scheduleBox}>
            <Text style={styles.scheduleTime}>22:00 pm</Text>
            <Text style={styles.scheduleLabel}>🛏️ Bedtime</Text>
          </View>
          <View style={styles.scheduleBox}>
            <Text style={styles.scheduleTime}>07:30 am</Text>
            <Text style={styles.scheduleLabel}>⏰ Wake up</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 10,
  },
  header: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 10,
  },
  subHeader: {
    fontSize: 16,
    textAlign: 'center',
    color: '#888',
  },
  sleepTime: {
    fontSize: 36,
    fontWeight: '700',
    textAlign: 'center',
    color: '#007AFF',
  },
  sleepTimeUnit: {
    fontSize: 24,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: '#f2f2f2',
    marginHorizontal: 5,
  },
  activeTab: {
    backgroundColor: '#007AFF',
  },
  tabText: {
    color: '#666',
    fontSize: 16,
  },
  activeTabText: {
    color: '#ffffff',
    fontSize: 16,
  },
  chart: {
    marginVertical: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  infoBox: {
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: 14,
    color: '#666',
  },
  infoValue: {
    fontSize: 18,
    fontWeight: '600',
    color: '#007AFF',
  },
  scheduleContainer: {
    marginVertical: 20,
  },
  scheduleHeader: {
    fontSize: 18,
    fontWeight: '600',
  },
  editButton: {
    position: 'absolute',
    right: 0,
  },
  editButtonText: {
    color: '#007AFF',
    fontSize: 14,
  },
  scheduleBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  scheduleBox: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '45%',
  },
  scheduleTime: {
    fontSize: 20,
    fontWeight: '700',
  },
  scheduleLabel: {
    marginTop: 10,
    fontSize: 14,
    color: '#888',
  },
});

export default SleepTrackerScreen;
