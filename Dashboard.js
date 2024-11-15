import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity,Button } from 'react-native';
import Footer from './Footer';
const Dashboard = ({ navigation }) => {
const [currentDate, setCurrentDate] = useState('');

useEffect(() => {
    const date = new Date();
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const formattedDate = `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`;
    setCurrentDate(formattedDate);
}, []);
return (
    <View style={styles.container}>
    {/* Phần avatar cố định */}
    <View style={styles.fixedHeader}>
    <Image source={require('./assets/avatar.jpg')} style={styles.profileImage} />
    <Text style={styles.date}>{currentDate}</Text>
    </View>
    <View style={styles.header}>
        <Text style={styles.title}>Overview</Text>

    </View>
    {/* Nội dung cuộn */}
    <ScrollView style={styles.content}>
      {/* Phần tiêu đề và nút All data */}
        <TouchableOpacity style={styles.allDataButton} onPress={() => navigation.navigate('HealthDashboard')}>
        <Text style={styles.allDataText}>All data</Text>
        </TouchableOpacity>
        {/* Health Score */}
        <View style={styles.healthScore}>
        <Text style={styles.healthScoreText}>Health Score</Text>
        <Text style={styles.healthScoreDescription}>
            Based on your overview health tracking, your score is 78 and considered good.
        </Text>
        <Text style={styles.score}>78</Text>
        </View>

        {/* Highlights Section */}
        <View style={styles.section}>
    <Text style={styles.sectionTitle}>Highlights</Text>
    <Text style={styles.viewMore}>View more ›</Text>
    <View style={styles.highlights}>
        <View style={[styles.highlightBox, { backgroundColor: '#00C2FF' }]} >
            <Image source={require('./assets/run.png')} style={styles.highlightImage}  />
            <Text style={styles.highlightText} onPress={() => navigation.navigate('StepDetailsScreen')} >Steps</Text>
            <Text style={styles.highlightValue}>11,857</Text>
            <Text style={styles.updateTime}>updated 15 min ago</Text>
        </View>
        <View style={[styles.highlightBox, { backgroundColor: '#FF6B6B' }]}>
            <Image source={require('./assets/calender.jpg')} style={styles.highlightImage} />
            <Text style={styles.highlightText}>Cycle tracking</Text>
            <Text style={styles.highlightValue}>12 days before period</Text>
            <Text style={styles.updateTime}>updated 30 min ago</Text>
        </View>
        <View style={[styles.highlightBox, { backgroundColor: '#2C3E50' }]}>
            <Image source={require('./assets/slepp.png')} style={styles.highlightImage} />
            <Text style={styles.highlightText}>Sleep</Text>
            <Text style={styles.highlightValue}>7 h 31 min</Text>
            <Text style={styles.updateTime}>updated a day ago</Text>
        </View>
        <View style={[styles.highlightBox, { backgroundColor: '#F39C12' }]}>
            <Image source={require('./assets/Nutrition.png')} style={styles.highlightImage} />
            <Text style={styles.highlightText}>Nutrition</Text>
            <Text style={styles.highlightValue}>960 kcal</Text>
            <Text style={styles.updateTime}>updated 5 min ago</Text>
        </View>
    </View>
</View>

        {/* Weekly Report */}
        <View style={styles.section}>
        <Text style={styles.sectionTitle}>This week report</Text>
        <View style={styles.weekReport}>
            <View style={styles.reportBox}>
            <Text style={styles.reportTitle}>Steps</Text>
            <Text style={styles.reportValue}>697,978</Text>
            </View>
            <View style={styles.reportBox}>
            <Text style={styles.reportTitle}>Workout</Text>
            <Text style={styles.reportValue}>6h 45min</Text>
            </View>
            <View style={styles.reportBox}>
            <Text style={styles.reportTitle}>Water</Text>
            <Text style={styles.reportValue}>10,659 ml</Text>
            </View>
            <View style={styles.reportBox}>
            <Text style={styles.reportTitle}>Sleep</Text>
            <Text style={styles.reportValue}>29h 17min</Text>
            </View>
        </View>
        </View>

        {/* Blog Section */}
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

      {/* Fixed Footer */}
      <Footer navigation={navigation} activeTab="Overview" />
    </View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
paddingTop: 40,
marginTop: 20,
},
header: {
// flexDirection: 'row',
alignItems: 'center',
justifyContent: 'space-between',

},
fixedHeader: {
padding: 16,
paddingTop: 10,
alignItems: 'center',
justifyContent: 'space-between',
backgroundColor: '#fff', // Giữ nền trắng cho phần avatar cố định
},
profileImage: {
width: 40,
height: 40,
borderRadius: 20,
},
date: {
    fontSize: 14,
    color: '#888',
},
title: {
    fontSize: 32,
    fontWeight: 'bold',
    
},
allDataButton: {
alignSelf: 'flex-end',
backgroundColor: '#e0f7fa',
borderRadius: 15,
paddingVertical: 5,
paddingHorizontal: 15,
marginRight: 16,
},
allDataText: {
color: '#00acc1',
fontWeight: 'bold',
},
profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,

},
healthScore: {
    padding: 16,
    backgroundColor: '#E0F7FA',
    borderRadius: 8,
    margin: 16,
},
healthScoreText: {
    fontSize: 18,
    fontWeight: 'bold',
},
healthScoreDescription: {
    fontSize: 14,
    color: '#666',
    marginVertical: 8,
},
score: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#00796B',
},
section: {
    paddingHorizontal: 16,
    marginBottom: 16,
},
sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
},
highlights: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
},
highlightBox: {
    width: '48%',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
},
highlightText: {
    fontSize: 16,
    color: '#fff',
},
highlightValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
},
highlightImage: {
    width: 32,
    height: 32,
    marginBottom: 8,
},
updateTime:{
    fontSize: 12,
    color: '#fff',
},
weekReport: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
},
reportBox: {
    width: '48%',
    padding: 16,
    backgroundColor: '#F3F3F3',
    borderRadius: 8,
    marginBottom: 8,
},
reportTitle: {
    fontSize: 16,
},
reportValue: {
    fontSize: 24,
    fontWeight: 'bold',
},
viewMore: {
alignSelf: 'flex-end',
color: '#888',
fontSize: 14,
marginBottom: 8,
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
footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
},
footerItem: {
    alignItems: 'center',
},
icon: {
    width: 24,
    height: 24,
    marginBottom: 4,
},
activeText: {
    color: '#00C2FF', // Active color
    fontSize: 12,
},
inactiveText: {
    color: '#888', // Inactive color
    fontSize: 12,
},
});


export default Dashboard;
