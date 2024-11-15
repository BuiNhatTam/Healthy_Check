import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { firebase } from './firebaseConfig'; // Đảm bảo firebase được import từ file cấu hình của bạn

export default function ForgotPasswordScreen({ navigation }) {
    const [email, setEmail] = useState('');

    const handleResetPassword = () => {
        if (!email) {
            Alert.alert("Error", "Please enter your email address");
            return;
        }

        // Kiểm tra định dạng email hợp lệ
        if (!validateEmail(email)) {
            Alert.alert("Error", "Invalid email format");
            return;
        }

        // Gửi email khôi phục mật khẩu
        firebase.auth().sendPasswordResetEmail(email)
            .then(() => {
                Alert.alert("Success", "Password reset email sent!");
                navigation.navigate("SignIn"); // Điều hướng đến màn hình đăng nhập sau khi gửi email
            })
            .catch(error => {
                Alert.alert("Error", error.message); // Hiển thị lỗi nếu có
            });
    };

    // Hàm kiểm tra định dạng email hợp lệ
    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    };

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

            <TouchableOpacity style={styles.resetButton} onPress={handleResetPassword}>
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
