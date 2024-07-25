import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import Logo from '../../assets/munch.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function SignUpScreen() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    function onSignUpPressed () {
        // backend stuff for validating user
        navigation.navigate('HomeScreen');
    }

    function onSignInPressed () {
        navigation.navigate('LoginScreen');
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image 
                    source={Logo} 
                    style={[styles.logo, {height: height * 0.3}]} 
                    resizeMode='contain' 
                />
                
                <CustomInput 
                    label="Username"
                    placeholder="Username" 
                    value={username} 
                    setValue={setUsername} 
                />
                <CustomInput 
                    label="Email"
                    placeholder="Email" 
                    value={email} 
                    setValue={setEmail} 
                />
                <CustomInput 
                    label="Password"
                    placeholder="Password" 
                    value={password} 
                    setValue={setPassword} 
                    secureTextEntry={true} 
                />
                <CustomInput 
                    label="Confirm Password"
                    placeholder="Confirm Password" 
                    value={passwordConfirm} 
                    setValue={setPasswordConfirm} 
                    secureTextEntry={true}
                />
                
                <CustomButton 
                    text="Sign Up" 
                    onPress={onSignUpPressed} 
                    width="30%"
                />
                <CustomButton 
                    text="Have an account? Sign in" 
                    onPress={onSignInPressed}
                    type="tertiary"
                />

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create ({
    root: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'F9FBFC',
    },

    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
})

export default SignUpScreen