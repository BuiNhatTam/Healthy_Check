import React from "react";
import Footer from './Footer';
import { View, Text, TextInput, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

const ExploreScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search topic"
            placeholderTextColor="#aaa"
          />
          <TouchableOpacity>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/1828/1828774.png", // Placeholder search icon
              }}
              style={styles.searchIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('./assets/avatar.jpg')}
              style={styles.userAvatar}
            />
          </TouchableOpacity>
        </View>

        {/* "For You" Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>For you</Text>
          <View style={styles.forYouRow}>
            <TouchableOpacity style={styles.forYouItem}>
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/3106/3106921.png", // Nutrition icon
                }}
                style={styles.forYouIcon}
              />
              <Text style={styles.forYouText}>Nutrition</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.forYouItem}>
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/1041/1041928.png", // Sports icon
                }}
                style={styles.forYouIcon}
              />
              <Text style={styles.forYouText}>Sports</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.forYouItem}>
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/3093/3093570.png", // Running icon
                }}
                style={styles.forYouIcon}
              />
              <Text style={styles.forYouText}>Running</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* "Newest Blogs" Section */}
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

        <View style={styles.section}>
          <View style={styles.headerRow}>
            <Text style={styles.sectionTitle}>Collection</Text>
            <TouchableOpacity>
              <Text style={styles.viewMore}>View more ›</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {/* Collection Item 1 */}
            <View style={styles.collectionCard}>
              <Image
                source={{
                  uri: "https://images.pexels.com/photos/3471410/pexels-photo-3471410.jpeg", // Example collection image
                }}
                style={styles.collectionImage}
              />
              <Text style={styles.collectionTitle}>Healthy Recipes</Text>
              <Text style={styles.collectionDescription}>Explore a variety of healthy recipes to try.</Text>
            </View>

            {/* Collection Item 2 */}
            <View style={styles.collectionCard}>
              <Image
                source={{
                  uri: "https://images.pexels.com/photos/3993007/pexels-photo-3993007.jpeg", // Example collection image
                }}
                style={styles.collectionImage}
              />
              <Text style={styles.collectionTitle}>Fitness Tips</Text>
              <Text style={styles.collectionDescription}>Stay fit with these easy and effective tips.</Text>
            </View>

            {/* Collection Item 3 */}
            <View style={styles.collectionCard}>
              <Image
                source={{
                  uri: "https://tmssl.akamaized.net//images/foto/galerie/cristiano-ronaldo-portugal-2024-1718210600-139467.jpg?lm=1718210615", // Example collection image
                }}
                style={styles.collectionImage}
              />
              <Text style={styles.collectionTitle}>Mindfulness</Text>
              <Text style={styles.collectionDescription}>Learn the art of mindfulness and mental well-being.</Text>
            </View>
          </ScrollView>
        </View>
      </ScrollView>

      {/* Footer */}
      <Footer navigation={navigation} activeTab="Explore" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9fb",
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    paddingHorizontal: 16,
    fontSize: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginLeft: -30,
  },
  userAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginLeft: 16,
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
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  viewMore: {
    fontSize: 14,
    color: "#007bff",
  },
  forYouRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  forYouItem: {
    alignItems: "center",
    width: 80,
  },
  forYouIcon: {
    width: 40,
    height: 40,
  },
  forYouText: {
    fontSize: 12,
    color: "#555",
    marginTop: 5,
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
collectionCard: {
    width: 200,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 12,
    marginRight: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  collectionImage: {
    width: "100%",
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
  },
  collectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  collectionDescription: {
    fontSize: 12,
    color: "#555",
  },
});

export default ExploreScreen;
