import { StyleSheet, ScrollView, View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function RoutinesScreen() {
    return (
        <View style={styles.screenContainer}>
            <ScrollView>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Routines</Text>
                </View>
                <View style={styles.routinesContent}>
                    <ImageBackground source={require('../assets/routine.jpg')} style={styles.routineCard}>
                        <View style={styles.routineContent}>
                            <View style={styles.routineTitleContainer}>
                                <Text style={styles.routineTitle}>Routine</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.routinesContent}>
                    <ImageBackground source={require('../assets/routine.jpg')} style={styles.routineCard}>
                        <View style={styles.routineContent}>
                            <View style={styles.routineTitleContainer}>
                                <Text style={styles.routineTitle}>Routine</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.routinesContent}>
                    <ImageBackground source={require('../assets/routine.jpg')} style={styles.routineCard}>
                        <View style={styles.routineContent}>
                            <View style={styles.routineTitleContainer}>
                                <Text style={styles.routineTitle}>Routine</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.routinesContent}>
                    <ImageBackground source={require('../assets/routine.jpg')} style={styles.routineCard}>
                        <View style={styles.routineContent}>
                            <View style={styles.routineTitleContainer}>
                                <Text style={styles.routineTitle}>Routine</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.routinesContent}>
                    <ImageBackground source={require('../assets/routine.jpg')} style={styles.routineCard}>
                        <View style={styles.routineContent}>
                            <View style={styles.routineTitleContainer}>
                                <Text style={styles.routineTitle}>Routine</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.routinesContent}>
                    <ImageBackground source={require('../assets/routine.jpg')} style={styles.routineCard}>
                        <View style={styles.routineContent}>
                            <View style={styles.routineTitleContainer}>
                                <Text style={styles.routineTitle}>Routine</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </ScrollView>
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.button}>
                    <Ionicons name="add" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    screenContainer: {
        backgroundColor: "#fff",
        height: "100%",
    },
    titleContainer: {
        margin: 50,
        marginLeft: 30,
        marginBottom: 20
    },
    title: {
        fontSize: 25,
        color: "#FF8000",
        fontWeight: "bold"
    },
    routinesContent: {
        flex: 1,
        alignItems: "center",
        marginBottom: 20
    },
    routineCard: {
        width: 350,
        height: 150,
        borderRadius: 20,
        overflow: 'hidden',
    },
    routineContent: {
        flex: 1,
        justifyContent: "flex-end",
        flexDirection: "row",
    },
    routineTitleContainer: {
        backgroundColor: 'background-color: rgba(57, 57, 59, 0.7)',
        width: 150,
        alignItems: "center",
        justifyContent: "center"
    },
    routineTitle: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold"
    },
    containerButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
    button: {
        backgroundColor: '#39393B',
        borderRadius: 50,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 5,
    },
});
