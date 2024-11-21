import React from 'react';
import Footer from './Footer';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SharingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Sharing</Text>

        {/* Cards */}
        <View style={styles.card}>
          <Ionicons name="list-outline" size={24} color="red" />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Keep your health in check</Text>
            <Text style={styles.cardDescription}>
              Keep loved ones informed about your condition.
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <Ionicons name="lock-closed-outline" size={24} color="purple" />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Protect your privacy</Text>
            <Text style={styles.cardDescription}>
              Share key conclusions. Stop anytime.
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <Ionicons name="notifications-outline" size={24} color="blue" />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Notifications</Text>
            <Text style={styles.cardDescription}>
              Get notified of updates to shared dashboards.
            </Text>
          </View>
        </View>

        {/* Buttons */}
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Start sharing</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Setting</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <Footer navigation={navigation} activeTab="Sharing" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-end', // Ensures footer stays at the bottom
  },
  content: {
    padding: 20,
    flex: 1,
    justifyContent: 'flex-start', // Ensures content is at the top
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
  },
  cardContent: {
    marginLeft: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
  },
  primaryButton: {
    backgroundColor: '#00C4CC',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 10,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    borderColor: '#ccc',
    borderWidth: 1,
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#333',
    fontSize: 16,
  },
});

export default SharingScreen;
