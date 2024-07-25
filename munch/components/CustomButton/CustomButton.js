import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'

function CustomButton ({ onPress, text, type = "primary", bgColor, fgColor }) {
    return (
        <Pressable onPress={onPress} 
            style={
                [styles.container, 
                styles[`container_${type}`],
                bgColor ? {backgroundColor: bgColor} : {}
            ]}>
            <Text 
                style={[
                    styles.text, styles[`text_${type}`],
                    fgColor ? {color: fgColor} : {}
                ]}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "80%",

        padding: 15,
        marginVertical: 5,

        alignItems: "center",
        borderRadius: 30,
    },
    container_primary: {
        backgroundColor: "black",
    },
    container_tertiary: {},
    
    text: {
        fontWeight: "bold",
        color: "white",
    },
    text_tertiary: {
        color: "gray",
    }
})

export default CustomButton;