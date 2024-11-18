import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

const CycleTrackerScreen = () => {
  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  // Tính toán các ngày trong tuần dựa trên ngày hiện tại
  useEffect(() => {
    const today = new Date();
    const weekDates = [];
    for (let i = -3; i <= 3; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      weekDates.push({
        day: date.getDate(),
        fullDate: date.toISOString().split('T')[0], // Lưu định dạng ngày đầy đủ nếu cần
      });
    }
    setDates(weekDates);
    setSelectedDate(today.toISOString().split('T')[0]); // Chọn ngày hiện tại
  }, []);

  const handleDatePress = (date) => {
    setSelectedDate(date.fullDate);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Cycle tracking</Text>

      {/* Date Selector */}
      <View style={styles.dateContainer}>
        {dates.map((date, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.dateBox,
              selectedDate === date.fullDate && styles.selectedDate,
            ]}
            onPress={() => handleDatePress(date)}
          >
            <Text
              style={[
                styles.dateText,
                selectedDate === date.fullDate && styles.selectedDateText,
              ]}
            >
              {date.day}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Prediction Section */}
      <View style={styles.predictionCard}>
        <Text style={styles.predictionText}>Period in</Text>
        <Text style={styles.daysText}>12 days</Text>
        <Text style={styles.predictionSubText}>Low chance of getting pregnant</Text>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit period dates</Text>
        </TouchableOpacity>
      </View>

      {/* Symptom Tracking */}
      <Text style={styles.sectionTitle}>How are you feeling today?</Text>
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionBox}>
          <Text style={styles.actionIcon}>📝</Text>
          <Text style={styles.actionText}>Share your symptoms with us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBox}>
          <Text style={styles.actionIcon}>📊</Text>
          <Text style={styles.actionText}>Here’s your daily insights</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Blogs</Text>
        <Text style={styles.viewMore}>View more ›</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.blogs}>
            <View style={styles.blogBox}>
            <Image source={require('./assets/apple.jpg')} style={styles.blogImage} />
            <Text style={styles.blogCategory}>Nutrition</Text>
            <Text style={styles.blogTitle}>More about Apples: Benefits, nutrition, and tips</Text>
            <View style={styles.blogFooter}>
                <Text style={styles.blogVotes}>78 votes</Text>
                <Text style={styles.blogLink}>Tell me more ›</Text>
            </View>
            </View>
            <View style={styles.blogBox}>
            <Image source={require('./assets/apple.jpg')} style={styles.blogImage} />
            <Text style={styles.blogCategory}>Lifestyle</Text>
            <Text style={styles.blogTitle}>The side effects of max hydration</Text>
            <View style={styles.blogFooter}>
                <Text style={styles.blogVotes}>54 votes</Text>
                <Text style={styles.blogLink}>Tell me more ›</Text>
            </View>
            </View>
            {/* Add more blog items here if needed */}
        </ScrollView>
        </View>
    </ScrollView>

    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 10,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  dateBox: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    width: 40,
    alignItems: 'center',
  },
  selectedDate: {
    backgroundColor: '#007AFF',
  },
  dateText: {
    color: '#666',
  },
  selectedDateText: {
    color: '#fff',
    fontWeight: '600',
  },
  predictionCard: {
    backgroundColor: '#00D8FF',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    marginVertical: 20,
  },
  predictionText: {
    fontSize: 16,
    color: '#fff',
  },
  daysText: {
    fontSize: 36,
    fontWeight: '700',
    color: '#fff',
  },
  predictionSubText: {
    fontSize: 14,
    color: '#fff',
    marginVertical: 10,
  },
  editButton: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  editButtonText: {
    color: '#00D8FF',
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  actionBox: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  actionIcon: {
    fontSize: 24,
    marginBottom: 10,
  },
  actionText: {
    fontSize: 14,
    textAlign: 'center',
  },
  blogs: {
flexDirection: 'row',
marginBottom: 16,
},
blogBox: {
    width: 250, // Set a fixed width for horizontal scrolling
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    marginRight: 16, // Add margin to create space between items
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
},
blogCategory: {
    fontSize: 14,
    color: '#888',
    marginTop: 8,
},
blogTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
},
blogFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
},
blogVotes: {
    fontSize: 14,
    color: '#888',
},
blogLink: {
    fontSize: 14,
    color: '#00C2FF',
},
blogImage: {
    width: '100%',
    height: 150,
},
});

export default CycleTrackerScreen;
