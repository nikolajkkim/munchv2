import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

function CustomInput ({ label, value, setValue, placeholder, secureTextEntry }) {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.container}>
                <TextInput
                    value={value}
                    onChangeText={setValue}
                    placeholder={placeholder}
                    style={styles.input}
                    secureTextEntry={secureTextEntry}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: '70%',
        marginVertical: 5, // so input boxes aren't stacked on each other
      },
      label: {
        marginBottom: 5,
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
      },
      container: {
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 20,
        paddingHorizontal: 10, // so text is not touching border
        paddingVertical: 5, // add vertical padding for better spacing
      },
      input: {
      },
})

export default CustomInput;