import { StyleSheet, Text, View, ImageBackground, Image, Dimensions } from 'react-native';


export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.images}>
                <Image source={require('../assets/profile.jpg')} style={styles.image} />
                <Image source={require('../assets/profileImg.jpg')} style={styles.imageProfile} />
            </View>
            <View>
                <Text style={styles.username}>Albertitoogg</Text>
            </View>
            <View>
                <Text style={styles.name}>Alberto Valido Fuentes</Text>
            </View>
            <View style={styles.dataContainer}>
                <View style={styles.data}>
                    <Text style={styles.dataTitle}>Height</Text>
                    <Text style={styles.dataContent}>1,98 m</Text>
                </View>
                <View style={styles.data}>
                    <Text style={styles.dataTitle}>Weight</Text>
                    <Text style={styles.dataContent}>88 Kg</Text>
                </View>
                <View style={styles.data}>
                    <Text style={styles.dataTitle}>Age</Text>
                    <Text style={styles.dataContent}>44</Text>
                </View>
                <View style={styles.data}>
                    <Text style={styles.dataTitle}>PR Back Squat</Text>
                    <Text style={styles.dataContent}>120 Kg</Text>
                </View>
                <View style={styles.dataLast}>
                    <Text style={styles.dataTitle}>PR Benck Press</Text>
                    <Text style={styles.dataContent}>100 Kg</Text>
                </View>
            </View>
        </View>

    )
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    image: {
        width: 350,
        height: 200,
        marginTop: 40,
        borderRadius: 20

    },
    images: {
        height: 320
    },
    imageProfile: {
        width: 150,
        height: 150,
        marginTop: 40,
        borderRadius: 100,
        position: "absolute",
        top: windowHeight / 2 - 300,
        left: windowWidth / 2 - 105,

    },
    username: {
        fontSize: 30,
        color: "#39393B",
        fontWeight: "bold"
    },
    name: {
        fontSize: 16,
        color: "#D4D4D4",
        fontWeight: "bold"
    },
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    dataContainer: {
        backgroundColor: 'rgba(212, 212, 212, 0.6)',
        width: 380,
        height: 380,
        margin: 20,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#39393B",
        alignItems: "center"
    },
    data: {
        padding: 10,
        borderBottomWidth: 2,
        width: "90%",
        alignItems: "center",
        borderColor: "#FF8000"
    },
    dataLast: {
        padding: 10,
        width: "90%",
        alignItems: "center",
    },
    dataTitle: {
        fontSize: 18,
        color: "#39393B"

    },
    dataContent: {
        fontSize: 20,
        color: "#39393B",
        fontWeight: "bold"
    }
});