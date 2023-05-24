import { StyleSheet, Text, View, ImageBackground, TextInput } from 'react-native';

import YellowButton from './common/YellowButton';


export default function RegisterScreen() {
    return (
        <ImageBackground source={require('../assets/login.jpg')} resizeMode="cover" style={styles.image}>
            <View style={styles.registerContainer}>
                <View style={styles.registerForm}>
                    <View style={styles.option}>
                        <Text style={styles.text}>Username</Text>
                        <TextInput
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.option}>
                        <Text style={styles.text}>Full name</Text>
                        <TextInput
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.optionSmallContainer}>
                        <View style={styles.option}>
                            <Text style={styles.textSmall}>Height</Text>
                            <TextInput
                                style={styles.inputSmall}
                            />
                        </View>
                        <View style={styles.option}>
                            <Text style={styles.textSmall}>Weight</Text>
                            <TextInput
                                style={styles.inputSmall}
                            />
                        </View>
                    </View>
                    <View style={styles.optionSmallContainer}>
                        <View style={styles.option}>
                            <Text style={styles.textSmall}>Age</Text>
                            <TextInput
                                style={styles.inputSmall}
                            />
                        </View>
                        <View style={styles.option}>
                            <Text style={styles.textSmall}>Gender</Text>
                            <TextInput
                                style={styles.inputSmall}
                            />
                        </View>
                    </View>
                    <View style={styles.option}>
                        <Text style={styles.text}>Password</Text>
                        <TextInput
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.centerButton}>
                        <YellowButton />
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
    registerContainer: {
        backgroundColor: 'rgba(212, 212, 212, 0.6)',
        width: "90%",
        height: "80%",
        margin: 20,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#39393B",

    },
    text: {
        fontSize: 20,
        color: "#39393B",
        fontWeight: "bold"
    },
    textSmall: {
        fontSize: 20,
        color: "#39393B",
        fontWeight: "bold",
        textAlign: "center"
    },
    input: {
        backgroundColor: "#EDEBEB",
        padding: 10,
        borderRadius: 10,
        borderColor: "#39393B",
        borderWidth: 2,
    },
    inputSmall: {
        backgroundColor: "#EDEBEB",
        padding: 10,
        borderRadius: 10,
        borderColor: "#39393B",
        borderWidth: 2,
        width: 100,

    },
    option: {
        marginBottom: 30
    },
    registerForm: {
        padding: 40,
        height: "100%",
        justifyContent: "center"
    },
    optionSmallContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    centerButton: {
        alignItems: "center"
    }
})