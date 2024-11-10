    import React, { useState } from 'react';
    import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

    export default function ForgotPasswordScreen({ navigation }) {
    const [email, setEmail] = useState('');

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Forgot Password</Text>
        
        <Text style={styles.label}>Enter your email to reset your password</Text>
        <TextInput
            style={styles.input}
            placeholder="Enter email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
        />
        
        <TouchableOpacity style={styles.resetButton}>
            <Text style={styles.resetButtonText}>Reset Password</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backText}>Go back to Sign In</Text>
        </TouchableOpacity>
        </View>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    label: {
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'center',
        color: '#555',
    },
    input: {
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 10,
        fontSize: 16,
        marginBottom: 15,
    },
    resetButton: {
        backgroundColor: '#00BFFF',
        borderRadius: 8,
        paddingVertical: 12,
        alignItems: 'center',
        marginVertical: 20,
    },
    resetButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    backText: {
        textAlign: 'center',
        color: '#00BFFF',
        marginTop: 20,
    },
    });
