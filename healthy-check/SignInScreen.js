import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { firebase } from './firebaseConfig';  // Nhập firebaseConfig của bạn

export default function SignInScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    // Hàm đăng nhập
    const handleSignIn = () => {
        if (!email || !password) {
            Alert.alert("Error", "Please enter both email and password.");
            return;
        }

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log("User signed in:", user);
                // Điều hướng người dùng tới màn hình chính
                navigation.navigate('Dashboard');  // Ví dụ: Điều hướng về màn hình Dashboard
            })
            .catch(error => {
                console.error(error);
                Alert.alert("Error", error.message);
            });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome back 👋</Text>
            
            <TextInput
                style={styles.input}
                placeholder="Enter email"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
            />
            
            <View style={styles.passwordContainer}>
                <TextInput
                    style={[styles.input, { flex: 1 }]}
                    placeholder="Enter password"
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <FontAwesome name={showPassword ? "eye" : "eye-slash"} size={24} color="grey" />
                </TouchableOpacity>
            </View>
            
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                <Text style={styles.forgotPassword}>Forgot password?</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
                <Text style={styles.signInButtonText}>Sign In</Text>
            </TouchableOpacity>

            <Text style={styles.orText}>OR LOG IN WITH</Text>
            
            <View style={styles.socialIcons}>
                <FontAwesome name="google" size={32} color="red" />
                <FontAwesome name="facebook" size={32} color="blue" style={styles.socialIcon} />
                <FontAwesome name="apple" size={32} color="black" style={styles.socialIcon} />
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.signUpText}>Don't have an account? <Text style={styles.signUpLink}>Sign up</Text></Text>
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
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 30,
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
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    forgotPassword: {
        textAlign: 'right',
        color: '#00BFFF',
        marginVertical: 10,
    },
    signInButton: {
        backgroundColor: '#00BFFF',
        borderRadius: 8,
        paddingVertical: 12,
        alignItems: 'center',
        marginVertical: 20,
    },
    signInButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    orText: {
        textAlign: 'center',
        color: '#999',
        marginVertical: 20,
    },
    socialIcons: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 30,
    },
    socialIcon: {
        marginHorizontal: 15,
    },
    signUpText: {
        textAlign: 'center',
        color: '#555',
    },
    signUpLink: {
        color: '#00BFFF',
        fontWeight: 'bold',
    },
});
