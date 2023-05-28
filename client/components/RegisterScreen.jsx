import { StyleSheet, Text, View, ImageBackground, TextInput, Button } from 'react-native';

import YellowButton from './common/YellowButton';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';



export default function RegisterScreen() {
    const [formData, setFormData] = useState({
        "username": "",
        "fullname": "",
        "height": 0,
        "weight": 0,
        "age": 0,
        "gender": "",
        "password": "",
        "pr_backSquat": 0,
        "pr_benchPress": 0,
        "pr_deadLift": 0
    })

    const handleInputChange = (fieldName, value) => {
        setFormData(prevState => ({
            ...prevState,
            [fieldName]: value,
        }));
        console.log(formData)
    };

    const handlePickerChange = (itemValue) => {
        setFormData(prevState => ({
            ...prevState,
            gender: itemValue,
        }));
        console.log(formData)
    };


    const register = () => {
        if (
            formData.username === '' ||
            formData.fullname === '' ||
            formData.height === 0 ||
            formData.weight === 0 ||
            formData.age === 0 ||
            formData.gender === '' ||
            formData.password === ''
        ) {
            alert('All fields are required')
        } else {
            const url = 'http://192.168.0.27:8080/registeruser'; // Reemplaza con la dirección IP y puerto correctos de tu servidor
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
                        alert("Se ha registrado")
                        return response.json();
                    } else {
                        throw new Error('Error en la solicitud');
                    }
                })
        }
    };

    return (
        <ImageBackground source={require('../assets/login.jpg')} resizeMode="cover" style={styles.image}>
            <View style={styles.registerContainer}>
                <View style={styles.registerForm}>
                    <View style={styles.option}>
                        <Text style={styles.text}>Username</Text>
                        <TextInput
                            style={styles.input}
                            value={formData.username}
                            onChangeText={value => handleInputChange('username', value)}
                        />
                    </View>
                    <View style={styles.option}>
                        <Text style={styles.text}>Full name</Text>
                        <TextInput
                            style={styles.input}
                            value={formData.fullname}
                            onChangeText={value => handleInputChange('fullname', value)}
                        />
                    </View>
                    <View style={styles.optionSmallContainer}>
                        <View style={styles.option}>
                            <Text style={styles.textSmall}>Height</Text>
                            <TextInput
                                style={styles.inputSmall}
                                keyboardType="decimal-pad"
                                value={formData.height}
                                onChangeText={value => handleInputChange('height', value)}
                            />
                        </View>
                        <View style={styles.option}>
                            <Text style={styles.textSmall}>Weight</Text>
                            <TextInput
                                style={styles.inputSmall}
                                keyboardType="decimal-pad"
                                value={formData.weight}
                                onChangeText={value => handleInputChange('weight', value)}
                            />
                        </View>
                    </View>
                    <View style={styles.optionSmallContainer}>
                        <View style={styles.option}>
                            <Text style={styles.textSmall}>Age</Text>
                            <TextInput
                                style={styles.inputSmall}
                                keyboardType="numeric"
                                value={formData.age}
                                onChangeText={value => handleInputChange('age', value)}
                            />
                        </View>
                        <View style={styles.option}>
                            <Text style={styles.textSmall}>Gender</Text>
                            <Picker style={styles.picker}
                                selectedValue={formData.gender}
                                onValueChange={handlePickerChange}>
                                <Picker.Item label="Male" value="Male" />
                                <Picker.Item label="Female" value="Female" />
                            </Picker>
                        </View>
                    </View>
                    <View style={styles.option}>
                        <Text style={styles.text}>Password</Text>
                        <TextInput
                            style={styles.input}
                            value={formData.password}
                            onChangeText={value => handleInputChange('password', value)}
                        />
                    </View>
                    <View style={styles.centerButton}>
                        <Button title='Register' style={styles.button} onPress={register}>
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
    },
    picker: {
        backgroundColor: "#EDEBEB",
        padding: 5,
        borderRadius: 10,
        borderColor: "#39393B",
        borderWidth: 2,
        width: 150,
    },
    button: {
        backgroundColor: "#FF8000",
        width: 200,
        marginTop: 40,
        padding: 20,
        borderRadius: 20,
        alignItems: "center",
    },
    textButton: {
        color: "#EDEBEB",
        fontWeight: "bold",
        fontSize: 18
    }
})