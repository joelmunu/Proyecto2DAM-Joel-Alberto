import { StyleSheet, ScrollView, View, Text, ImageBackground, TouchableOpacity, Modal, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';
import { useEffect, useState } from 'react';

export default function RecipesScreen() {
    const [username, setUsername] = useState("");
    const [user, setUser] = useState();
    const [recipes, setRecipes] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    const [formData, setFormData] = useState({
        "name": "",
        "description": "",
        "ingredients": "",
        "id": null,
    });

    async function getValueFor(key) {
        let result = await SecureStore.getItemAsync(key);
        if (result) {
            setUsername(result);
            console.log(result);
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
        console.log(user);
    }, [username]);

    useEffect(() => {
        const getRecipes = async () => {
            if (user && user.user_id) {
                const url = `http://192.168.0.27:8080/recipes/${user.user_id}`;
                try {
                    const response = await fetch(url, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                    });
                    if (response.ok) {
                        const data = await response.json();
                        setRecipes(data);
                    } else {
                        console.log('Error en la solicitud');
                    }
                } catch (error) {
                    console.error('Error en la solicitud:', error);
                }
            }
        };


        getRecipes();
        if (user && user.user_id) {
            setFormData(prevFormData => ({
                ...prevFormData,
                id: user.user_id
            }));
        }
    }, [user]);

    useEffect(() => {
        console.log(recipes);
    }, [recipes]);

    const saveRecipe = () => {
        const url = 'http://192.168.0.27:8080/addrecipe';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                if (response.ok) {
                    updateRecipes();
                } else {
                    throw new Error('Error en la solicitud');
                }
            })
            .catch(error => {
                console.error('Error en la solicitud:', error);
            });
    };

    const closeModal = () => {
        setModalVisible(false);
        saveRecipe();
    };

    const openModal = () => {
        setModalVisible(true);
    };

    const updateRecipes = async () => {
        if (user && user.user_id) {
            const url = `http://192.168.0.27:8080/recipes/${user.user_id}`;
            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    setRecipes(data);
                } else {
                    console.log('Error en la solicitud');
                }
            } catch (error) {
                console.error('Error en la solicitud:', error);
            }
        }
    };

    return (
        <View style={styles.screenContainer}>
            <ScrollView style={{ marginTop: 50 }} >
                {recipes.map((recipe, index) => (
                    <View style={styles.routinesContent} key={index}>
                        <ImageBackground source={require('../assets/recipe.jpg')} style={styles.routineCard}>
                            <View style={styles.routineContent}>
                                <View style={styles.routineTitleContainer}>
                                    <Text style={styles.routineTitle}>{recipe.name}</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                ))}
            </ScrollView>
            <Modal visible={modalVisible} animationType="slide" transparent={true}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={styles.option}>
                            <Text style={styles.text}>Nombre</Text>
                            <TextInput
                                value={formData.name}
                                style={styles.input}
                                onChangeText={value => setFormData({ ...formData, name: value })}
                            />
                        </View>
                        <View style={styles.option}>
                            <Text style={styles.text}>Descripción</Text>
                            <TextInput
                                value={formData.description}
                                style={styles.input}
                                onChangeText={value => setFormData({ ...formData, description: value })}
                            />
                        </View>
                        <View style={styles.option}>
                            <Text style={styles.text}>Ingredientes</Text>
                            <TextInput
                                value={formData.ingredients}
                                style={styles.input}
                                onChangeText={value => setFormData({ ...formData, ingredients: value })}
                            />
                        </View>
                        <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                            <Text style={styles.closeButtonText}>Crear</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.button} onPress={openModal}>
                    <Ionicons name="add" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
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
        marginBottom: 20,
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
        width: 200
    },
    option: {
        marginBottom: 10
    },
    closeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    closeButton: {
        marginTop: 20,
        backgroundColor: '#FF8000',
        padding: 10,
        borderRadius: 5,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        width: 300,
        height: 400
    }
});