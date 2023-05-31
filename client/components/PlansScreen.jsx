import { StyleSheet, ScrollView, View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';

export default function PlansScreen() {
    const [username, setUsername] = useState("")
    const [user, setUser] = useState()
    const [plans, setPlans] = useState([])

    async function getValueFor(key) {
        let result = await SecureStore.getItemAsync(key);
        if (result) {
            setUsername(result);
        } else {
            alert('No values stored under that key.');
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                await getValueFor('username');
            } catch (error) {
                console.log('Error al recuperar los datos en otro componente:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const getUser = async () => {
            if (username) {
                const url = `http://192.168.0.27:8080/getUserByUsername/${username}`;
                try {
                    const response = await fetch(url, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                    });
                    if (response.ok) {
                        const data = await response.json();
                        setUser(data);
                    } else {
                        console.log('Error en la solicitud');
                    }
                } catch (error) {
                    console.error('Error en la solicitud:', error);
                }
            }
        };

        getUser();
    }, [username]);

    useEffect(() => {
        const getPlans = async () => {
            if (user && user.user_id) {
                const url = `http://192.168.0.27:8080/getUserPlans/${user.user_id}`;
                try {
                    const response = await fetch(url, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                    });
                    if (response.ok) {
                        const data = await response.json();
                        setPlans(data);
                    } else {
                        console.log('Error en la solicitud');
                    }
                } catch (error) {
                    console.error('Error en la solicitud:', error);
                }
            }
        };

        getPlans();
    }, [user]);

    useEffect(() => {
        console.log(plans);
    }, [plans]);

    return (
        <View style={styles.screenContainer}>
        <ScrollView>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Plans</Text>
            </View>

            {plans.length > 0 ? (
                    plans.map((plan) => (
                        <View style={styles.routinesContent} key={plan.user_plan_id}>
                            {plan && (
                                <ImageBackground
                                    source={require("../assets/routine.jpg")}
                                    style={styles.routineCard}
                                >
                                    <View style={styles.routineContent}>
                                        <View style={styles.routineTitleContainer}>
                                            <Text style={styles.routineTitle}>
                                                {plan.name}
                                            </Text>
                                        </View>
                                    </View>
                                </ImageBackground>
                            )}
                        </View>
                    ))
                ) : (
                    <Text>No se encontraron rutinas</Text>
                )}
            {/* <View style={styles.routinesContent}>
                <ImageBackground source={require('../assets/plan.jpg')} style={styles.routineCard}>
                    <View style={styles.routineContent}>
                        <View style={styles.routineTitleContainer}>
                            <Text style={styles.routineTitle}>Plan</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.routinesContent}>
                <ImageBackground source={require('../assets/plan.jpg')} style={styles.routineCard}>
                    <View style={styles.routineContent}>
                        <View style={styles.routineTitleContainer}>
                            <Text style={styles.routineTitle}>Plan</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.routinesContent}>
                <ImageBackground source={require('../assets/plan.jpg')} style={styles.routineCard}>
                    <View style={styles.routineContent}>
                        <View style={styles.routineTitleContainer}>
                            <Text style={styles.routineTitle}>Plan</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.routinesContent}>
                <ImageBackground source={require('../assets/plan.jpg')} style={styles.routineCard}>
                    <View style={styles.routineContent}>
                        <View style={styles.routineTitleContainer}>
                            <Text style={styles.routineTitle}>Plan</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.routinesContent}>
                <ImageBackground source={require('../assets/plan.jpg')} style={styles.routineCard}>
                    <View style={styles.routineContent}>
                        <View style={styles.routineTitleContainer}>
                            <Text style={styles.routineTitle}>Plan</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.routinesContent}>
                <ImageBackground source={require('../assets/plan.jpg')} style={styles.routineCard}>
                    <View style={styles.routineContent}>
                        <View style={styles.routineTitleContainer}>
                            <Text style={styles.routineTitle}>Plan</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View> */}
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