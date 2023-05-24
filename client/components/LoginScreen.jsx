import { StyleSheet, Text, View, ImageBackground, TextInput } from 'react-native';

import YellowButton from './common/YellowButton';


export default function LoginScreen() {
    return (
        <ImageBackground source={require('../assets/login.jpg')} resizeMode="cover" style={styles.image}>
            <View style={styles.loginContainer}>
                <View style={styles.loginForm}>
                    <View style={styles.username}>
                        <Text style={styles.text}>Username</Text>
                        <TextInput
                            style={styles.input}
                        />
                    </View>
                    <View>
                        <Text style={styles.text}>Password</Text>
                        <TextInput
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.centerButton}>
                        <YellowButton />
                    </View>
                    <View style={styles.forgotPassword}>
                        <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
                        <Text style={styles.forgotPasswordLink}>Reset your password</Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        flex: 1,
    },
    loginContainer: {
        backgroundColor: 'rgba(212, 212, 212, 0.6)',
        width: "90%",
        height: "70%",
        margin: 20,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#39393B",
        
    },
    loginForm: {
        padding: 40,
        height: "100%",
        justifyContent: "center"
    },
    text: {
        fontSize: 20,
        color: "#39393B",
        fontWeight: "bold"
    },
    input: {
        backgroundColor: "#EDEBEB",
        padding: 10,
        borderRadius: 10,
        borderColor: "#39393B",
        borderWidth: 2,
    },
    username: {
        marginBottom: 30
    },
    forgotPassword: {
        alignItems: "center",
        marginTop: 30
    },
    centerButton: {
        alignItems: "center"
    },
    forgotPasswordText: {
        fontSize: 20,
        padding: 10,
        color: "#39393B",
        fontWeight: "bold"
    },
    forgotPasswordLink: {
        fontSize: 20,
        padding: 10,
        textDecorationLine: "underline",
        color: "#39393B",
        fontWeight: "bold"
    }
})