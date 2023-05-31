import { StyleSheet, Text, View, ImageBackground, Image, Dimensions } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useEffect, useState } from 'react';


export default function ProfileScreen() {
    const [username, setUsername] = useState("")
    const [user, setUser] = useState()

    async function getValueFor(key) {
        let result = await SecureStore.getItemAsync(key);
        if (result) {
            setUsername(result);
            console.log(result)
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
                        console.log(data)
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
    return (
        <View style={styles.container}>
            <View style={styles.images}>
                <Image source={require('../assets/profile.jpg')} style={styles.image} />
                <Image source={require('../assets/profileImg.jpg')} style={styles.imageProfile} />
            </View>
            <View>
            {user && user.username && <Text style={styles.username}>{user.username}</Text>}
            </View>
            <View>
            {user && user.fullname && <Text style={styles.name}>{user.fullname}</Text>}
            </View>
            <View style={styles.dataContainer}>
                <View style={styles.data}>
                    <Text style={styles.dataTitle}>Height</Text>
                    {user && user.height && <Text style={styles.dataContent}>{user.height}</Text>}
                </View>
                <View style={styles.data}>
                    <Text style={styles.dataTitle}>Weight</Text>
                    {user && user.weight && <Text style={styles.dataContent}>{user.weight}</Text>}
                </View>
                <View style={styles.data}>
                    <Text style={styles.dataTitle}>PR Dead Lift</Text>
                    {user && user.age && <Text style={styles.dataContent}>{user.pr_deadLift}</Text>}
                </View>
                <View style={styles.data}>
                    <Text style={styles.dataTitle}>PR Back Squat</Text>
                    {user && user.age && <Text style={styles.dataContent}>{user.pr_backSquat}</Text>}
                </View>
                <View style={styles.dataLast}>
                    <Text style={styles.dataTitle}>PR Bench Press</Text>
                    {user && user.age && <Text style={styles.dataContent}>{user.pr_benchPress}</Text>}
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
        alignItems: "center",
        backgroundColor: "#EDEBEB"
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