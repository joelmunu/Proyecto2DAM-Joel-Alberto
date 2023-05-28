import { StyleSheet, Text, View, ImageBackground, TextInput, Button } from 'react-native';

import YellowButton from './common/YellowButton';
import { useState } from 'react';


export default function LoginScreen() {
    const [formData, setFormData] = useState({
        "username": "",
        "password": "",

    })

    const handleInputChange = (fieldName, value) => {
        setFormData(prevState => ({
            ...prevState,
            [fieldName]: value,
        }));
        console.log(formData)
    };

    const login = () => {
        if (
            formData.username === '' ||
            formData.password === ''
        ) {
            alert('All fields are required')
        } else {
            const url = 'http://192.168.0.27:8080/login'; // Reemplaza con la dirección IP y puerto correctos de tu servidor
            console.log(JSON.stringify(formData))
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
                .then(response => {
                    if (response.ok) {
                        alert("Ha iniciado sesión")
                        return response.json();
                    } else {
                        alert("Error al inciar sesion")
                        throw new Error('Error en la solicitud');
                    }
                })
        }
    };

    return (
        <ImageBackground source={require('../assets/login.jpg')} resizeMode="cover" style={styles.image}>
            <View style={styles.loginContainer}>
                <View style={styles.loginForm}>
                    <View style={styles.username}>
                        <Text style={styles.text}>Username</Text>
                        <TextInput
                            style={styles.input}
                            value={formData.username}
                            onChangeText={value => handleInputChange('username', value)}
                        />
                    </View>
                    <View>
                        <Text style={styles.text}>Password</Text>
                        <TextInput
                            style={styles.input}
                            value={formData.password}
                            onChangeText={value => handleInputChange('password', value)}
                        />
                    </View>
                    <View style={styles.centerButton}>
                        <Button title='Login' style={styles.button} onPress={login}>
                        </Button>
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
    },
    button: {
        backgroundColor: "#FF8000",
        width: 200,
        marginTop: 40,
        padding: 20,
        borderRadius: 20,
        alignItems: "center",
    },
    centerButton: {
        alignItems: "center"
    },
})