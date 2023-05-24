import { StyleSheet, Text, View } from 'react-native';

export default function YellowButton() {
    return (
            <View style={styles.button}>
                <Text style={styles.text}>Log in</Text>
            </View>

    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#FF8000",
        width: 200,
        marginTop: 50,
        padding: 20,
        borderRadius: 20,
        alignItems: "center",
    },
    text: {
        color: "#EDEBEB",
        fontWeight: "bold",
        fontSize: 18
    }
})