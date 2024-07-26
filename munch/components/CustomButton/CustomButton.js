import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'

function CustomButton ({ onPress, text, type = "primary", width, bgColor, fgColor }) {
    return (
        <Pressable onPress={onPress} 
            style={
                [styles.container, 
                styles[`container_${type}`],
                bgColor ? {backgroundColor: bgColor} : {},
                width ? {width: width} : {}
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