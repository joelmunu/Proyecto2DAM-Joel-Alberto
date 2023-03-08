import { StyleSheet, Text, View, ImageBackground, Pressable } from 'react-native';


export default function WelcomeScreen() {
    return (
        <ImageBackground source={require('../assets/welcome.jpg')} resizeMode="cover" style={styles.image}>
            <View style={styles.welcome}>
                <Text style={styles.textTitle}>Get started with our routines and food plans made for you</Text>
                <Text style={styles.textDescription}>Learn to manage and create your ideal routines an food plans with us </Text>
            </View>

            <View style={styles.getStarted}>
                <Pressable style={styles.started}>
                    <Text style={styles.startedText}>Get started</Text>
                </Pressable>
                <Text style={styles.logInText}>Already have an account? <Text style={styles.logInTextLink}>Log In</Text></Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    },
    welcome: {
        margin: 20,
    },
    textTitle: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20
    },
    textDescription: {
        color: "white",
        fontSize: 20,

        textAlign: "center",
        marginBottom: 20
    },
    getStarted: {
        position: 'absolute',
        left: '20%',
        bottom: 20
    },
    started: {
        alignItems: 'center',
        backgroundColor: '#ff8000',
        padding: 20,
        borderRadius: 30,
        marginBottom: 20
    },
    startedText: {
        color: 'white',
        fontWeight: "bold",
        fontSize: 18,
    },
    logInText: {
        color: "white",
        fontSize: 18,
        textAlign: "center",
        marginBottom: 20
    },
    logInTextLink: {
        textDecorationLine: 'underline',
    }
});