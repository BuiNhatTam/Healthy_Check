import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Footer = ({ navigation, activeTab }) => {
    return (
        <View style={styles.footer}>
            <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Dashboard')}>
                <Image source={require('./assets/iconoverview.jpg')} style={styles.icon} />
                <Text style={activeTab === 'Overview' ? styles.activeText : styles.inactiveText}>Overview</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('ExploreScreen')}>
                <Image source={require('./assets/iconexplore.jpg')} style={styles.icon} />
                <Text style={activeTab === 'Explore' ? styles.activeText : styles.inactiveText}>Explore</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('SharingScreen')}>
                <Image source={require('./assets/iconshare.png')} style={styles.icon} />
                <Text style={activeTab === 'Sharing' ? styles.activeText : styles.inactiveText}>Sharing</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
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
        color: '#00C2FF',
        fontSize: 12,
    },
    inactiveText: {
        color: '#888',
        fontSize: 12,
    },
});

export default Footer;
