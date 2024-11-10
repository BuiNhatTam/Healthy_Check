    import React, { useState } from 'react';
    import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
    import { firebase } from './firebaseConfig';

    export default function SignUpScreen({ navigation }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        if (!name || !email || !password) {
        Alert.alert("Error", "Please fill in all fields");
        return;
        }

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            const user = userCredential.user;
            // Optional: Update user's display name
            user.updateProfile({ displayName: name });
            Alert.alert("Success", "Account created successfully");
            navigation.navigate("SignIn");
        })
        .catch(error => {
            Alert.alert("Error", error.message);
        });
    };

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Create Account</Text>

        <TextInput
            style={styles.input}
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
        />
        <TextInput
            style={styles.input}
            placeholder="Enter email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
        />
        <TextInput
            style={styles.input}
            placeholder="Enter password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
            <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.signInLink}>Already have an account? Sign In</Text>
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
    input: {
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 10,
        fontSize: 16,
        marginBottom: 15,
    },
    signUpButton: {
        backgroundColor: '#00BFFF',
        borderRadius: 8,
        paddingVertical: 12,
        alignItems: 'center',
        marginVertical: 20,
    },
    signUpButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    signInLink: {
        textAlign: 'center',
        color: '#00BFFF',
        marginTop: 20,
    },
    });
