import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import Footer from './Footer';

const healthData = [
  { id: '1', title: 'Double Support Time', value: '29.7 %', iconColor: '#00CFFF', imageSrc: require('./assets/step.png') },
  { id: '2', title: 'Steps', value: '11,875 steps', iconColor: '#FF8500', imageSrc: require('./assets/step.png') },
  { id: '3', title: 'Cycle Tracking', value: '08 April', iconColor: '#A06AF9', imageSrc: require('./assets/step.png') },
  { id: '4', title: 'Sleep', value: '7 hr 31 min', iconColor: '#FF5353', imageSrc: require('./assets/step.png') },
  { id: '5', title: 'Heart', value: '68 BPM', iconColor: '#FF007A', imageSrc: require('./assets/step.png') },
  { id: '6', title: 'Burned Calories', value: '850 kcal', iconColor: '#4A7BFF', imageSrc: require('./assets/step.png') },
  { id: '7', title: 'Body Mass Index', value: '18.69 BMI', iconColor: '#00C5A8', imageSrc: require('./assets/step.png') },
];

const HealthDashboard = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <TouchableOpacity 
          style={styles.itemContainer}
          onPress={() => {
            // Chuyển hướng khi nhấn vào item
            if (item.title === 'Steps') {
              // Nếu là mục "Steps", điều hướng đến màn hình "StepDetailsScreen"
              navigation.navigate('StepDetailsScreen');
            }
          }}
        >
          {/* Vòng tròn màu với hình ảnh bên trong */}
          <View style={[styles.icon, { backgroundColor: item.iconColor }]}>
            <Image source={item.imageSrc} style={styles.image} />
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.value}>{item.value}</Text>
          </View>
        </TouchableOpacity>
      );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>All Health Data</Text>
      <FlatList
        data={healthData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
      <Footer navigation={navigation} activeTab="Overview" />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F8F8F8',
      paddingTop: 60,
    },
    header: {
      fontSize: 24,
      fontWeight: '600',
      textAlign: 'center',
      marginVertical: 10,
    },
    list: {
      paddingHorizontal: 20,
    },
    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 15,
      backgroundColor: '#FFF',
      borderRadius: 10,
      marginVertical: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 1,
      elevation: 2,
    },
    icon: {
      width: 40,
      height: 40,
      borderRadius: 20, // Đảm bảo hình tròn
      marginRight: 15,
      justifyContent: 'center',  // Đảm bảo ảnh căn giữa
      alignItems: 'center',      // Đảm bảo ảnh căn giữa
    },
    image: {
      width: 30,  // Giảm kích thước của ảnh để nó vừa với vòng tròn
      height: 30, // Giảm kích thước của ảnh để nó vừa với vòng tròn
      borderRadius: 15, // Đảm bảo hình ảnh cũng là hình tròn
    },
    info: {
      flex: 1,
    },
    title: {
      fontSize: 16,
      fontWeight: '500',
    },
    value: {
      fontSize: 14,
      color: '#666',
    },
  });

export default HealthDashboard;
